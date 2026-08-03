import type { StateSetter } from "@/types/state";
import { createNestedContexts } from "@/utils/hooks/nestedContexts";

import { DialogVariant } from "./DIalog.types";

type DialogContextProps = {
    open: boolean;
    setOpen?: StateSetter<boolean>;
    variant: DialogVariant;
}

export const [DialogContexts, useDialogContexts] = 
    createNestedContexts<DialogContextProps>({
        open: false,
        setOpen: undefined,
        variant: DialogVariant.Fullscreen
    })
;
