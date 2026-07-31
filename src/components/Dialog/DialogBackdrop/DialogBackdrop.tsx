import { cls } from "@/utils/cls";
import type { DialogBackdropProps } from "./DialogBackdrop.types";
import { usePresence } from "@/utils/hooks/usePresence";
import { useContext } from "react";
import { DialogIsOpenContext, DialogSetOpenContext } from "../DialogContext";

import styles from './DialogBackdrop.module.css';

export function DialogBackdrop({ closeOnBlur }: DialogBackdropProps) {
    const open = useContext(DialogIsOpenContext);
    const setOpen = useContext(DialogSetOpenContext);
    const { mounted, exiting, onAnimationEnd } = usePresence(open);

    const handleClick = closeOnBlur ? () => setOpen?.(false) : undefined;

    return mounted ? <div 
        className={cls(styles.dialogBackdrop, exiting && styles.closing)} 
        onAnimationEnd={onAnimationEnd}
        onClick={handleClick}
    /> : null;
}
