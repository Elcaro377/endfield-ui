import type { ControllableStatesRecordWithNative } from "@/types/controllableState";

export interface Option<T> {
    label: string;
    value: T;
}

export interface SelectProps<
    O extends readonly Option<O[number]["value"]>[]
> extends ControllableStatesRecordWithNative<'div', {
    value: O[number]["value"];
    isOpen: boolean;
}> { 
    options: O 
} ;