
export class WdioDriverWrapper {

    private driver: WebdriverIO.Browser;

    constructor() {
        this.driver = browser;
    }
    public async getDriver():Promise<any>{
        return this.driver;
    }
    public async reloadSession():Promise<any> {
        await browser.reloadSession();  // This reloads the session, ensuring a fresh start for each scenario
    }
    public async deleteSession():Promise<any> {
        await browser.deleteSession();  // This reloads the session, ensuring a fresh start for each scenario
    }

    async findElement(locator: any): Promise<any> {
        const el = await $(locator)
        const mobileElement = new WdioElementWrapper(el)
        await mobileElement.waitForElement()
        return mobileElement;
    }

    async findElements(locator: any): Promise<any[]> {
        const el = await $$(locator)
        const mobileElement = el.map((el: any) => new WdioElementWrapper(el))
        await (await mobileElement)[1].waitForElement()
        return mobileElement;
    }

    async scroll(direction: string): Promise<any> {
        let initialY = 500
        let newY = 300;
        if (direction === 'up') {
            await this.driver.touchAction([
                {action: 'press', x: 500, y: initialY},
                {action: 'wait', ms: 500}, // Optional: wait for half a second
                {action: 'moveTo', x: 500, y: initialY - newY},
                {action: 'release'},

            ])
        } else {
            await browser.touchAction([
                {action: 'press', x: 500, y: initialY},
                {action: 'moveTo', x: 500, y: initialY + newY},
                'release'
            ])
        }
    }

    async scrollToElement(locator: string, direction: string, maxScrolls: number = 10): Promise<void> {
        for (let i = 0; i < maxScrolls; i++) {
            const el = await $$(locator);
            if ((await el.length) > 0) return; // Await the length before comparing
            await this.scroll(direction);
        }
        throw new Error(`Element with locator ${locator} not found after ${maxScrolls} scrolls.`);
    }


    async waitUntil(condition: () => Promise<boolean>, timeout: number = 5000, msg: string = "Condition not met!"): Promise<any> {
        await this.driver.waitUntil(async () => await condition(), {timeout: timeout, timeoutMsg: msg})
    }

    async close(): Promise<void> {
    }

}

export class WdioElementWrapper {

    private el: WebdriverIO.Element;

    constructor(el: ChainablePromiseElement) {
        this.el = el as unknown as WebdriverIO.Element; // Type assertion
    }

    async findElement(locator: any): Promise<WdioElementWrapper> {
        const el = await $(locator); // Ensures we await the element
        return new WdioElementWrapper(el); // Should now work
    }

    async waitForElement(timeout: number = 50000): Promise<WebdriverIO.Element> {
        const isDisplayed = await this.el.waitForDisplayed({
            timeout: timeout,
            reverse: false,
            timeoutMsg: `${this.el.selector} was not found in ${timeout} seconds.`
        });

        // If the element is displayed, return it
        if (isDisplayed) {
            return this.el;  // Return the WebdriverIO.Element
        }

        // If the element is not found or displayed within the timeout, throw an error
        throw new Error(`${this.el.selector} was not displayed within ${timeout} seconds.`);
    }

    async tap() {
        await this.el.isDisplayed
        await this.el.click()
    }

    async text(): Promise<string> {
        return await this.el.getText()
    }

    async getAttribute(attribute: string): Promise<string> {
        return await this.el.getAttribute(attribute)
    }

    async sendKeys(text: string) {
        await this.el.setValue(text)
    }

    async elementPresent(): Promise<boolean> {
        return await this.el.isDisplayed()
    }

}