import type { MouseEventHandler, ReactElement } from "react";

export interface DialogTriggerProps {
    children: ReactElement<{ onClick?: MouseEventHandler }>;
}