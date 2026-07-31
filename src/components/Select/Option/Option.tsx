import { cls } from "@/utils/cls";
import type { OptionProps } from "./Option.types";

import styles from './Option.module.css'

export function Option<T>({
    label, value, selected, onClick
}: OptionProps<T>) {
    return (
        <li
            className={cls(styles.option, selected && styles.selected)}
            key={label}
            onClick={() => onClick?.(value)}
        >
            <span className={cls(styles.selectedDecoLine)} />
            <span className={styles.label}>{label}</span>
            <svg className={styles.selectedIcon} width="22" height="17" viewBox="0 0 22 17">
                <polygon points="1,9 8,16 19,5 17,3 8,12 3,7" fill="currentColor" />
            </svg>
        </li>
    );
}