export const generateEmail = (): string => {
    const now = new Date();
    const dateTime = now.toISOString().replace(/[-T:.Z]/g, "");
    return `newaccount+${dateTime}@test.com`
}