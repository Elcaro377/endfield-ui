export type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

export type FromEntries<T extends readonly (readonly [PropertyKey, unknown])[]> = {
    [K in T[number][0]]: Extract<T[number], readonly [K, unknown]>[1];
};

export function objectEntries<const T extends object>(obj: T): Entry<T>[] {
    return Object.entries(obj) as Entry<T>[];
}

export function fromEntries<
    const T extends readonly (readonly [PropertyKey, unknown])[],
>(entries: T): FromEntries<T> {
    return Object.fromEntries(entries) as FromEntries<T>;
}