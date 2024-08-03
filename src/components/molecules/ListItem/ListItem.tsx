import { Text } from "@components/atoms/text";
import classNames from "classnames";
import React, { HTMLProps } from "react";
import "./styles.scss";

interface IListItem extends HTMLProps<HTMLDivElement>{
    avatarUrl?:string
    name?:string
    phone?: string
    location?: string
}

const ListItem = ({name, phone, location, className, ...restProps}:IListItem) => {

    return <div className={classNames(["grid grid-sm-col--4 grid-lg-col--4", "list-item", className])} {...restProps}>
        <Text componentType="div">
            {name}
        </Text>
        <Text componentType="div" color="gray">
            {phone}
        </Text>
        <Text componentType="div" color="gray">
            {location}
        </Text>
    </div>
}

export default ListItem;