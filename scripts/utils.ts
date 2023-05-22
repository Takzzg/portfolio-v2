export const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

export const lerp = (start: number, end: number, t: number) => start + t * (end - start);
