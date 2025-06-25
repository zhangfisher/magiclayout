
export function getCssSize(value: string | number): string {
    return typeof value === 'number' ? `${value}px` : value
}