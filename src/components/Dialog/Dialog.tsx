
import { DialogVariant, type DialogProps } from "./DIalog.types";
import { useControllableState } from "@/utils/hooks/useControllableState";
import { DialogBackdrop } from "./DialogBackdrop/DialogBackdrop";
import { DialogCard } from "./DialogCard/DialogCard";

import { DialogIsOpenContext, DialogSetOpenContext } from "./DialogContext";
import { DialogBody } from "./DialogBody/DialogBody";

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
        <DialogIsOpenContext.Provider value={_open}>
            <DialogSetOpenContext.Provider value={_setOpen}>
                <DialogBackdrop closeOnBlur={closeOnBlur} />
                <DialogCard />
                {body !== undefined && <DialogBody>{body}</DialogBody>}
                {children}
            </DialogSetOpenContext.Provider>
        </DialogIsOpenContext.Provider>
    );
}