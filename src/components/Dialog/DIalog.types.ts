import type { ControllableStatesRecordWithNative } from "@/types/controllableState";
import type { ValueOf } from "@/types/utils";
import type { ReactNode } from "react";

export const DialogVariant = {
    Normal: 'normal',
    Fullscreen: 'fullscreen',
} as const;

export type DialogVariant = ValueOf<typeof DialogVariant>;

export interface DialogProps extends ControllableStatesRecordWithNative<'div', {
    open: boolean
}> {
    variant?: DialogVariant;
    children?: ReactNode;
    closeOnBlur?: boolean;
    body?: ReactNode;
}