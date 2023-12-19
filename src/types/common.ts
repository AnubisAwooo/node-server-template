export type Result<T> =
    | { code: 0; message: 'success'; data: T }
    | { code: number; message: string; data?: undefined };

export const success = <T>(data?: T) => ({ code: 0, message: 'success', data });

export const failed = (code: number, message: string) => ({ code, message });
