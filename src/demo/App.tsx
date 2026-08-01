import { Dialog } from "@/components/Dialog/Dialog";
import { Button } from "@/components/Button/Button";
import { ButtonIcon, ButtonVariant } from "@/components/Button/Button.types";
import { DialogActions } from "@/components/Dialog/DialogActions/DialogActions";
import { DialogBody } from "@/components/Dialog/DialogBody/DialogBody";
import { DialogTrigger } from "@/components/Dialog/DialogTrigger/DialogTrigger";

export function App() {

    return (
        <>
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