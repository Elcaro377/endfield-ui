import { Button } from "@/components/Button/Button";
import { ButtonVariant, ButtonIcon, type ButtonProps } from "@/components/Button/Button.types";

export function Confirm({ children, ...rest }: ButtonProps) {
    return <Button 
        variant={ButtonVariant.Primary} 
        icon={ButtonIcon.Confirm}
        {...rest}
    >
        {children ?? '确定'}
    </Button>;
}

export function Cancel({ children, ...rest }: ButtonProps) {
    return <Button 
        variant={ButtonVariant.Secondary} 
        icon={ButtonIcon.Cancel}
        {...rest}
    >
        {children ?? '取消'}
    </Button>;
}
