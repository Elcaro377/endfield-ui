import { usePresence } from '@/utils/hooks/usePresence';
import { cls } from '@/utils/cls';
import { useContext } from 'react';
import { DialogIsOpenContext } from '../DialogContext';

import styles from './DialogCard.module.css';

export function DialogCard() {
    const open = useContext(DialogIsOpenContext);
    const { mounted, exiting, onAnimationEnd } = usePresence(open);

    if (!mounted) { return; }

    return <div 
        className={cls(styles.dialogCard, exiting && styles.closing)}
        onAnimationEnd={onAnimationEnd}
        tabIndex={0}
    >
        <div className={styles.decos}>
            <div className={styles.colorLine}>
                <div className={styles.yello}/>
                <div className={styles.cyan}/>
                <div className={styles.pink}/>
            </div>
            <div className={styles.yelloTriangle}/>
            <div className={styles.text} />
            <div className={styles.logo} />
            <div className={styles.stripes}/>
        </div>

    </div>;
}
