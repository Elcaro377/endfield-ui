import { ButtonIcon, ButtonVariant, type ButtonProps } from './Button.types';

import styles from './Button.module.css';
import variants from './variants.module.css';
import variables from './variables.module.css';

// import './variables.css';

import { cls } from "@/utils/cls";

const iconModules = import.meta.glob<string>(
    '@/assets/icons/icon_btn_*.png',
    { eager: true, query: '?url', import: 'default' },
);

const iconMap: Record<string, string> = {};
for (const [path, url] of Object.entries(iconModules)) {
    const name = path.match(/icon_btn_(.+)\.png$/)?.[1];
    if (name) { iconMap[name] = url };
}

export function Button({ 
    variant = ButtonVariant.Normal, 
    icon = ButtonIcon.Transfer,
    onClick,
    children,
    ...rest
}: ButtonProps) {

    return (
        <div 
            className={cls(styles.button, variables.button, variants[variant])}
            onClick={onClick}
            {...rest}
        >
            <div className={styles.bg}/>
            <div className={styles.buttonDeco}>
                <div className={styles.node}/>
                <div className={styles.line}/>
                <div className={styles.node}/>
            </div>
            {children}
            <div className={styles.icon} style={{
                WebkitMaskImage: `url(${iconMap[icon]})`,
                maskImage: `url(${iconMap[icon]})`,
            }} />
        </div>
    );
}