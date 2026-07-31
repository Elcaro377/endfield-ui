import { useControllableState } from "@/utils/hooks/useControllableState";

import type { Option as OptionData, SelectProps } from "./Select.types";
import { Option } from "./Option/Option";

import styles from './Select.module.css';
import { cls } from "@/utils/cls";

import { Header } from "./Header/Header";
import { Options } from "./Options/Options";

export function Select<
    T, O extends readonly OptionData<T>[]
>({ 
    options, 
    value, defaultValue, setValue, onValueChange, 
    isOpen, defaultIsOpen = false, setIsOpen, onIsOpenChange,
    ...rest 
}: SelectProps<T, O>
) {
    const labels = new Map(options.map(o => [o.value, o.label]));

    const [_isOpen, _setIsOpen] = useControllableState({
        value: isOpen, 
        defaultValue: defaultIsOpen, 
        setValue: setIsOpen, 
        onValueChange: onIsOpenChange
    });

    const [selected, setSelected] = useControllableState({ 
        value, defaultValue, setValue, onValueChange 
    });

    const handleClickOption = (v: O[number]['value']) => {
        if (v === selected) { return; }
        setSelected(v);
        _setIsOpen(false);
    };  

    const handleClickHeader = () => _setIsOpen(x => !x);

    return (
        <div 
            className={cls(styles.select, isOpen && styles.open)} 
            tabIndex={0}
            onBlur={() => _setIsOpen(false)}
            {...rest}
        >

            <Header 
                label={labels.get(selected)}
                isOpen={_isOpen}
                onClick={handleClickHeader}
            />

            <Options open={_isOpen}>
                {options.map(o => (
                    <Option 
                        {...o}
                        key={o.label}
                        selected={o.value === selected}
                        onClick={handleClickOption} 
                    />
                ))}
            </Options>
        </div>
    );
}