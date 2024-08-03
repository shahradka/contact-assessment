import React, { HTMLProps } from "react"
import { IListItem, ListItem } from "@components/molecules/listItem"
import classNames from "classnames"
import "./styles.scss"

interface IList extends HTMLProps<HTMLDivElement>{
    items?: Array<Pick<IListItem, "name" | "location" | "phone" | "avatarUrl" | "itemId">>

}

const List = ({items, className,...restProps}:IList) => {

    return <div className={classNames(["list", className])} {...restProps}>
        {items?.map((item, index) => <ListItem itemId={item.itemId} 
        key={index} avatarUrl={item.avatarUrl} 
        name={item.name} phone={item.phone} 
        location={item.location} />)}
    </div>

}

export default List;