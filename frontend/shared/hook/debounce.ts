export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timer: NodeJS.Timeout;
    return function(this: any, ...args: Parameters<T>) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    }
}