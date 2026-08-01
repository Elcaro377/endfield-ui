import type { NativeProps } from "@/types/controllableState";
import type { ValueOf } from "@/types/utils";
import type { MouseEventHandler, ReactNode } from "react";

export const ButtonVariant = {
    Primary: 'primary',
    Secondary: 'secondary',
    Normal: 'normal',
} as const;

export type ButtonVariant = ValueOf<typeof ButtonVariant>;

export const ButtonIcon = {
    Transfer: 'transfer',
    Cancel: 'cancel',
    Confirm: 'confirm'
} as const;

export type ButtonIcon = ValueOf<typeof ButtonIcon>;

export interface ButtonProps extends NativeProps<'div'> {
    variant?: ButtonVariant;
    icon?: ButtonIcon;
    onClick?: MouseEventHandler<HTMLDivElement>;
    children?: ReactNode;
}