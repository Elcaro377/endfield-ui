import { useState } from "react";

export function usePresence(visible: boolean) {
    const [mounted, setMounted] = useState(visible);

    const exiting = !visible && mounted;

    if (visible && !mounted) { setMounted(true); }

    const onAnimationEnd = () => exiting && setMounted(false);

    return { mounted, exiting, onAnimationEnd };
}
