import type React from "react";

import type { StringKeys, UnionToIntersection } from "./utils";
import type { DefaultStateName, HandlerName, SetterName, StateRecord } from "./state";

export type ControllableKeys<N extends string> = 
    N | SetterName<N> | DefaultStateName<N> | HandlerName<N>;

export type ControllableStateRecord<N extends string, T> = 
    & Partial<StateRecord<N, T>>
    & { [K in DefaultStateName<N>]?: T; } 
    & { [K in HandlerName<N>]?: (v: T) => unknown; } 

export type NativeProps<
    Element extends React.ElementType,
    Exclude extends PropertyKey = never,
> = Omit<React.ComponentProps<Element>, Exclude>;

export type ControllableStatesRecord<S extends Record<string, unknown>> =
    UnionToIntersection<
        { [N in StringKeys<S>]: ControllableStateRecord<N, S[N]> }[StringKeys<S>]
    >;

export type ControllableStatesRecordWithNative<
    E extends React.ElementType,
    S extends Record<string, unknown>
> = 
    & ControllableStatesRecord<S>
    & NativeProps<E, ControllableKeys<StringKeys<S>>>
;