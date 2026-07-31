import { useState } from "react";
import { Select } from "@/components/Select/Select";
import type { ValueOf } from "@/types/utils";
import { Dialog } from "@/components/Dialog/Dialog";
import { Button } from "@/components/Button/Button";
import { ButtonIcon, ButtonVariant } from "@/components/Button/Button.types";
import { DialogActions } from "@/components/Dialog/DialogActions/DialogActions";
import { DialogBody } from "@/components/Dialog/DialogBody/DialogBody";
import { DialogTrigger } from "@/components/Dialog/DialogTrigger/DialogTrigger";

const Strategy = {
    Quality: 'quality',
    Balanced: 'balanced',
    Performance: 'performance',
    Extreme: 'extreme'
} as const;

type Strategy = ValueOf<typeof Strategy>;

export function App() {
    const [strategy, setStrategy] = useState<Strategy>(Strategy.Balanced);
    return (
        <>
            <Select
                style={{ width: "20rem", transformOrigin: 'top left', scale: 1.5 }}
                options={[
                    { label: '质量', value: Strategy.Quality },
                    { label: '平衡', value: Strategy.Balanced },
                    { label: '性能', value: Strategy.Performance },
                    { label: '超级性能', value: Strategy.Extreme },
                ] as const}
                value={strategy}
                setValue={setStrategy}
                onValueChange={e => console.log(e)}
            />

            <Dialog closeOnBlur>
                <DialogTrigger>
                    <Button variant={ButtonVariant.Normal} style={{ 
                        position: 'absolute', inset: 0, margin: 'auto' 
                    }}>退出</Button>
                </DialogTrigger>
                <DialogBody>是否退出至登录界面？</DialogBody>
                <DialogActions>
                    <Button variant={ButtonVariant.Secondary} icon={ButtonIcon.Cancel}>取消</Button>
                    <Button variant={ButtonVariant.Primary}onClick={() => console.log("退出")}>确认</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}