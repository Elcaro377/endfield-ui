import type { ControllableStateRecord } from "@/types/controllableState";
import type { StateSetter, StateTuple } from "@/types/state";
import { useState } from "react";

export function useControllableState<T>(
    { value, defaultValue, onValueChange, setValue }: ControllableStateRecord<'value', T>
): [...StateTuple<T>, boolean]
{
    const controlled = value !== undefined;

    let initValue: T;

    if (controlled) { initValue = value; } 

    else {
        if (defaultValue === undefined) {
            throw new Error("可受控状态中值与默认值至少传入一个");
        }
        initValue = defaultValue;
    }

    const [internalValue, setInternalValue] = useState(initValue);

    const currValue = controlled ? value : internalValue;

    const setCurrValue: StateSetter<T> = valueOrSetter => {
        const newValue = typeof valueOrSetter === 'function'
            ? (valueOrSetter as (prev: T) => T)(currValue)
            : valueOrSetter;

        if (!controlled) { setInternalValue(newValue); }
        setValue?.(newValue);
        onValueChange?.(newValue);
    };

    return [currValue, setCurrValue, controlled];
}