import { Text } from "@components/atoms/text";
import classNames from "classnames";
import React, { HTMLProps } from "react";
import "./styles.scss";
import { Avatar30 } from "@components/atoms/avatar";
import { Link } from "react-router-dom";


export interface IListItem extends Omit<HTMLProps<HTMLDivElement>, "itemID">{
    itemId?: number,
    avatar?:string
    name?:string
    phone?: string
    address?: string
}

const ListItem = ({ name, phone, address, avatar, className, itemId, ...restProps}:IListItem) => {

    return <div className={classNames(["grid grid-sm-col--4 grid-lg-col--4", "list-item", className])} {...restProps}>
            <Avatar30 url={avatar || ""} />
            <Link to={`/details/${itemId}`}>
                <Text componentType="div">
                    {name}
                </Text>
            </Link>
            <Text componentType="div" color="gray">
                {phone}
            </Text>
            <Text componentType="div" color="gray">
                {address}
            </Text>
    </div>
}

export default ListItem;