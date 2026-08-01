import { usePresence } from "@/utils/hooks/usePresence";
import type { DialogActionsProps } from "./DialogActions.types";

import styles from './DialogActions.module.css';
import { cls } from "@/utils/cls";
import { useContext } from "react";
import { DialogIsOpenContext, DialogSetOpenContext } from "../DialogContext";

import { Children } from "react";

export function DialogActions(
    { notTrigger = false, children }: DialogActionsProps
) {
    const open = useContext(DialogIsOpenContext);
    const setOpen = useContext(DialogSetOpenContext);
    const { mounted, exiting, onAnimationEnd } = usePresence(open);

    if (!mounted || children === undefined) { return; }

    const handleClick = notTrigger ? undefined : () => setOpen?.(o => !o);

    return <div 
        className={cls(styles.dialogActions, exiting && styles.closing)}
        onAnimationEnd={onAnimationEnd}
    >
        {Children.map(children, (child, i) => (
            <div key={i} className={styles.box} onClick={handleClick}>{child}</div>
        ))}
    </div>;
}