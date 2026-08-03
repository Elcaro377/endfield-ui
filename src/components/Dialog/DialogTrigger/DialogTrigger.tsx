import { cloneElement, type MouseEventHandler } from "react";
import type { DialogTriggerProps } from "./DialogTrigger.types";
// import { DialogSetOpenContext } from "../DialogContext";
import { useDialogContexts } from "../DialogContexts";

export function DialogTrigger(
    { children }: DialogTriggerProps
) {
    const { setOpen } = useDialogContexts('setOpen');

    if (!children) { return null; }

    if (setOpen === undefined) {
        console.warn("DialogTrigger 必须在 Dialog 内部使用，且受控模式需传入 setOpen");
    }

    const handleClick: MouseEventHandler = e => {
        children.props.onClick?.(e);  
        if (!e.isDefaultPrevented()) {
            setOpen?.(o => !o);
        }
    };

    return cloneElement(children, { onClick: handleClick });
}