
import type { DialogProps } from "./DIalog.types";
import { useControllableState } from "@/utils/hooks/useControllableState";
import { DialogBackdrop } from "./DialogBackdrop/DialogBackdrop";
import { DialogCard } from "./DialogCard/DialogCard";

import { DialogIsOpenContext, DialogSetOpenContext } from "./DialogContext";

export function Dialog({ 
    children,
    open, defaultOpen = false, setOpen, onOpenChange,
    closeOnBlur = false
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
                {children}
            </DialogSetOpenContext.Provider>
        </DialogIsOpenContext.Provider>
    );
}