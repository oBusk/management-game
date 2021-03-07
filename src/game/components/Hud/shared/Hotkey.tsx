import { HTMLAttributes } from "react";
import styles from "./Hotkey.module.css";

const Hotkey = ({
    children,
    className: _,
    ...rest
}: HTMLAttributes<HTMLSpanElement>) => (
    <span className={styles.hotkeyTip} {...rest}>
        {children}
    </span>
);

export default Hotkey;
