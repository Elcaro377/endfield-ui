import { cls } from "@/utils/cls";
import type { OptionsProps } from "./Options.types";

import styles from './Options.module.css';
import { usePresence } from "@/utils/hooks/usePresence";

export function Options(
    { open, children }: OptionsProps
) {
    const { mounted, exiting, onAnimationEnd } = usePresence(open);
    return mounted ? (
        <ul 
            className={cls(styles.options, exiting && styles.closing)}
            onAnimationEnd={onAnimationEnd}
        >
            {children}
        </ul>
    ) : null;
}