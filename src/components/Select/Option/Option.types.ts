export interface OptionProps<T> {
    label: string;
    value: T
    selected?: boolean;
    onClick?: (v: T) => unknown
}