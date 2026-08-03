import { createContext, use, type ReactNode } from "react";
import { fromEntries, objectEntries } from "../objectEntries";

export function createNestedContexts<T extends Record<string, unknown>>(initValue: T) {
    const entries = objectEntries(initValue);
    const contextEntries = entries.map(([k, v]) => [k, createContext(v)] as const);
    const contextDict = fromEntries(contextEntries);

    function Contexts(
        { values, children }: { values: T, children?: ReactNode }
    ) {
        return contextEntries.reduce(
            (node, [k, Ctx]) => <Ctx value={values[k]}>{node}</Ctx>,
            children,
        );
    };

    function useNestedContexts<const Ks extends readonly (keyof T)[]>(...keys: Ks) {
        return Object.fromEntries(keys.map(k => [k, use(contextDict[k])])) as { [K in Ks[number]]: T[K] };
    }

    return [Contexts, useNestedContexts] as const;
}