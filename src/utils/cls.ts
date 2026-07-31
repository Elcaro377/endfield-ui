export function cls(...classes: (string | false | undefined | null)[]) {
    return classes.filter(Boolean).join(' ');
}