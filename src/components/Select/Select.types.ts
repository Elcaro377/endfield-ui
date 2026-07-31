import type { ControllableStatesRecordWithNative } from "@/types/controllableState";

export interface Option<T> {
    label: string;
    value: T;
}

export interface SelectProps<
    T, O extends readonly Option<T>[]
> extends ControllableStatesRecordWithNative<'div', {
    value: O[number]["value"];
    isOpen: boolean;
}> { 
    options: O 
} ;