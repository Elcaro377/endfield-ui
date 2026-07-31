export type StateSetter<T> = (value: T | ((prev: T) => T)) => void;

export type SetterName<N extends string> = `set${Capitalize<N>}`;

export type DefaultStateName<N extends string> = `default${Capitalize<N>}`;

export type HandlerName<N extends string> = `on${Capitalize<N>}Change`;

export type StateRecord<N extends string, T> = 
    & { [K in N]: T; } 
    & { [K in SetterName<N>]: StateSetter<T>; } 
;

export type StateTuple<T> = [T, StateSetter<T>];