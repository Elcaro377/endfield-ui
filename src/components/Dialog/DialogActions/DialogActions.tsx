import { Children } from "react";

import { usePresence } from "@/utils/hooks/usePresence";
import { cls } from "@/utils/cls";

import type { DialogActionsProps } from "./DialogActions.types";
import { useDialogContexts } from "../DialogContexts";

import styles from './DialogActions.module.css';


export function DialogActions(
    { notTrigger = false, children }: DialogActionsProps
) {
    const { open, setOpen } = useDialogContexts('open', 'setOpen');

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