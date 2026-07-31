import type { StateSetter } from "@/types/state";
import { createContext } from "react";

export const DialogIsOpenContext = createContext(false);
export const DialogSetOpenContext = createContext<StateSetter<boolean> | undefined>(undefined);

