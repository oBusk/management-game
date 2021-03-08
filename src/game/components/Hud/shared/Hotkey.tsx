import classNames from "classnames";
import { HTMLAttributes } from "react";
import styles from "./Hotkey.module.css";

const Hotkey = ({
    children,
    className,
    ...rest
}: HTMLAttributes<HTMLSpanElement>) => (
    <span className={classNames(className, styles.hotkeyTip)} {...rest}>
        {children}
    </span>
);

export default Hotkey;
