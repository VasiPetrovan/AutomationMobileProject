export function get_screen_elements(screen: any, env: any, platform: any) {
    let elements: any = {};

    function extractElements(obj: any, env: any, platform: any): any {
        let result: any = {};

        Object.keys(obj).forEach(key => {
            const value = obj[key];

            if (value && typeof value === 'object') {
                if (value[env] && typeof value[env] === 'object') {
                    if (value[env][platform] !== undefined) {
                        // If the value for the specific platform exists, add it to the result
                        result[key] = value[env][platform];
                    } else {
                        // Handle cases where the specific platform key is missing
                        result[key] = null; // Or a default value or error handling
                    }
                } else {
                    // Handle cases where the environment key is missing
                    result[key] = null; // Or a default value or error handling
                }
            } else {
                // Handle cases where the value is not an object (non-nested elements)
                result[key] = value;
            }
        });

        return result;
    }

    elements = extractElements(screen, env, platform);

    return elements;
}