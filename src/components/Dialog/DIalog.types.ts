import type { ControllableStatesRecordWithNative } from "@/types/controllableState";
import type { ReactNode } from "react";

export interface DialogProps extends ControllableStatesRecordWithNative<'div', {
    open: boolean
}> {
    children?: ReactNode;
    closeOnBlur?: boolean;
}