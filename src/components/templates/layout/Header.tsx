import { Text } from "@components/atoms/text";
import React, { HTMLProps } from "react";

interface IHeader extends HTMLProps<HTMLDivElement> {
    title:string
    innerClassName?: string
}

const Header = ({title, innerClassName,...restProps}:IHeader) => {

    return <header {...restProps}>
            <div className={innerClassName}>
                <Text variant="heading1" color="contrast">
                    {title}
                </Text>
            </div>
    </header>
    
}

export default Header;