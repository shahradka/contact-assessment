import classNames from "classnames";
import React, { HTMLProps } from "react";
import "./styles.scss";

const Note = ({children, className}:HTMLProps<HTMLDivElement>) => {
    return <div className={classNames([className, "note"])}>
        {children}
    </div>
}

export default Note;