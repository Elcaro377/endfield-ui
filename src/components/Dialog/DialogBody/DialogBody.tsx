
import styles from './DialogBody.module.css';
import { cls } from "@/utils/cls";
import type { DialogBodyProps } from "./DialogBody.types";
import { usePresence } from '@/utils/hooks/usePresence';
import { useContext } from 'react';
import { DialogIsOpenContext } from '../DialogContext';

export function DialogBody(
    { children }: DialogBodyProps
) {
    const open = useContext(DialogIsOpenContext);
    const { mounted, exiting, onAnimationEnd } = usePresence(open);
    
    if (!mounted) { return; }

    return <div
        className={cls(styles.dialogBody, exiting && styles.closing)}
        onAnimationEnd={onAnimationEnd}
    > 
        {children}
    </div>;
}   