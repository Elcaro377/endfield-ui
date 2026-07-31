import { cls } from "@/utils/cls";

import type { HeaderProps } from "./Header.types";

import styles from './Header.module.css';

export function Header(
    { label, isOpen, onClick }: HeaderProps
) {
    return (
        <div 
            className={cls(styles.header, isOpen && styles.open)} 
            onClick={onClick}
        >
            <span className={styles.label}>{label}</span>
            <svg className={styles.spinner} width="12" height="12" viewBox="0 -2 12 10">
                <polygon points="0,0 12,0 6,8" fill="currentColor" />
            </svg>
        </div>
    );
}