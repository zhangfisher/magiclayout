export function dotToPascalCase(input: string): string {
    if (!input) return ''; // 处理空字符串
    return input
        .split('.')
        .map(segment =>
            segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase()
        )
        .join('');
}