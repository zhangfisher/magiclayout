export function getVal(obj: any, keyPath: string | string[] | undefined, defaultValue?: any): any {
    if (!keyPath) return obj
    if (keyPath.length === 0) return obj
    let paths: string[] = Array.isArray(keyPath) ? keyPath : keyPath.split('.');
    let val;
    let parent = obj;

    for (let i = 0; i < paths.length; i++) {
        const key = paths[i];

        if (key in parent) {
            val = parent[key];
        } else {
            return defaultValue
        }
        parent = val;
    }
    return val;
}

