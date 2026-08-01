import type { DialogProps } from "../DIalog.types";

export interface ConfirmDialogProps extends DialogProps {
    cancelLabel?:  string;
    confirmLabel?:  string;
    onCancel?: (...args: unknown[]) => unknown;
    onConfirm?: (...args: unknown[]) => unknown;
}
