import { useState } from "react";

import { Dialog } from "@/components/Dialog/Dialog";
import { DialogActions } from "@/components/Dialog/DialogActions/DialogActions";
import { DialogBody } from "@/components/Dialog/DialogBody/DialogBody";
import { Select } from "@/components/Select/Select";
import type { ValueOf } from "@/types/utils";
import { Cancel, Confirm } from "@/components/Dialog/DialogActions/Presets";

const Strategy = {
    Quality: '质量',
    Balanced: '平衡',
    Performance: '性能',
    Extreme: '超级性能'
} as const;

type Strategy = ValueOf<typeof Strategy>;

const strategyOptions = [
    { label: '质量', value: Strategy.Quality },
    { label: '平衡', value: Strategy.Balanced },
    { label: '性能', value: Strategy.Performance },
    { label: '超级性能', value: Strategy.Extreme },
];

export function SwichStrategy() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [strategy, setStrategy] = useState<Strategy>(Strategy.Balanced);
    const [newStrategy, setNewStrategy] = useState<Strategy>(Strategy.Balanced);
    const [dialogSnap, setDialogSnap] = useState<Strategy>(Strategy.Balanced);

    const handleStrategyChange = (s: Strategy) => {
        setNewStrategy(s);
        setDialogSnap(strategy);
        setDialogOpen(true);
    };

    const handleConfirm = () => setStrategy(newStrategy);

    return <>
        <Select
            options={strategyOptions}
            value={strategy}
            onValueChange={handleStrategyChange}
        />

        <Dialog open={dialogOpen} setOpen={setDialogOpen}>
            <DialogBody>是否从{dialogSnap}更改为{newStrategy}?</DialogBody>
            <DialogActions>
                <Cancel />
                <Confirm onClick={handleConfirm} />
            </DialogActions>
        </Dialog>
    </>;
}
