import { cls } from "@/utils/cls";
import { usePresence } from '@/utils/hooks/usePresence';

import type { DialogBodyProps } from "./DialogBody.types";
import { useDialogContexts } from '../DialogContexts';

import styles from './DialogBody.module.css';

export function DialogBody(
    { children }: DialogBodyProps
) {
    const { open } = useDialogContexts('open');
    const { mounted, exiting, onAnimationEnd } = usePresence(open);
    
    if (!mounted) { return; }

    return <div
        className={cls(styles.dialogBody, exiting && styles.closing)}
        onAnimationEnd={onAnimationEnd}
    > 
        {children}
    </div>;
}   