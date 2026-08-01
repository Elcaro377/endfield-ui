import { Button } from "@/components/Button/Button";
import { Dialog } from "../Dialog";
import { DialogActions } from "../DialogActions/DialogActions";
import type { ConfirmDialogProps } from "./ConfirmDialog.types";
import { ButtonIcon, ButtonVariant } from "@/components/Button/Button.types";

export function ConfirmDialog({
    cancelLabel = '取消', confirmLabel = '确定',
    onCancel, onConfirm,
    children, ...rest
}: ConfirmDialogProps) {
    return <Dialog {...rest}>
        {children}
        <DialogActions>
            <Button 
                variant={ButtonVariant.Secondary} icon={ButtonIcon.Cancel} onClick={onCancel}
            >
                {cancelLabel}
            </Button>
            <Button 
                variant={ButtonVariant.Primary} icon={ButtonIcon.Confirm} onClick={onConfirm}
            >
                {confirmLabel}
            </Button>
        </DialogActions>
    </Dialog>
}
