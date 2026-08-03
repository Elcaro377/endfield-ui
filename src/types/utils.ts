export type EmptyObject = Record<never, never>;

export type ValueOf<T> = T[keyof T];

export type StringKeys<T> = Extract<keyof T, string>;

export type UnionToIntersection<U> = 
    (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;