import { useControllableState } from "@/utils/hooks/useControllableState";

import { DialogVariant, type DialogProps } from "./DIalog.types";
import { DialogBackdrop } from "./DialogBackdrop/DialogBackdrop";
import { DialogCard } from "./DialogCard/DialogCard";
import { DialogBody } from "./DialogBody/DialogBody";
import { DialogContexts } from "./DialogContexts";

export function Dialog({ 
    variant = DialogVariant.Fullscreen, closeOnBlur = false,
    open, defaultOpen = false, setOpen, onOpenChange,
    body, children,
}: DialogProps) {
    const [_open, _setOpen] = useControllableState({
        value: open,
        defaultValue: defaultOpen,
        setValue: setOpen,
        onValueChange: onOpenChange
    });

    return (
            <DialogContexts values={{ open: _open, setOpen: _setOpen, variant }}>
                <DialogBackdrop closeOnBlur={closeOnBlur} />
                <DialogCard />
                {body !== undefined && <DialogBody>{body}</DialogBody>}
                {children}
            </DialogContexts>
                

    );
}