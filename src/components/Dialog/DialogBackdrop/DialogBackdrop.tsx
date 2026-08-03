import { cls } from "@/utils/cls";
import { usePresence } from "@/utils/hooks/usePresence";

import type { DialogBackdropProps } from "./DialogBackdrop.types";
import { useDialogContexts } from "../DialogContexts";

import styles from './DialogBackdrop.module.css';

export function DialogBackdrop({ closeOnBlur }: DialogBackdropProps) {
    const { open, setOpen } = useDialogContexts('open', 'setOpen');
    const { mounted, exiting, onAnimationEnd } = usePresence(open);

    const handleClick = closeOnBlur ? () => setOpen?.(false) : undefined;

    return mounted ? <div 
        className={cls(styles.dialogBackdrop, exiting && styles.closing)} 
        onAnimationEnd={onAnimationEnd}
        onClick={handleClick}
    /> : null;
}
