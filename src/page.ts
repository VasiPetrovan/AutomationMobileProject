import {WdioDriverWrapper} from "./wdioWrapper";

export class Page {
    protected wdioDriver: WdioDriverWrapper;
    protected readonly platform: string;
    protected readonly env: string;

    constructor(wdioDriver: WdioDriverWrapper, platform: string, env: string) {
        this.wdioDriver = wdioDriver
        this.platform = platform;
        this.env = env;

    }

}