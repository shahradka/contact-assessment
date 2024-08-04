import React, { HTMLProps } from "react"
import { IListItem, ListItem } from "@components/molecules/listItem"
import classNames from "classnames"
import "./styles.scss"
import { Pagination } from "@components/molecules/pagination"
import { Loading } from "@components/atoms/loading"

interface IList extends HTMLProps<HTMLDivElement>{
    items?: Array<Pick<IListItem, "address" | "phone" | "avatar"> & {first_name:string, last_name:string, id:number }>
    paginationParams: Pick<Parameters<typeof Pagination>[0], "currentPage" | "onNextBtnClick" | "onPrevBtnClick">
    loading?: boolean
}

const List = ({items, className, loading = false, paginationParams,...restProps}:IList) => {

    return <div className={classNames(["list", className])} {...restProps}>
        {loading? <Loading /> :
        <>
        {items?.map((item, index) => <ListItem itemId={item.id} 
        key={index} avatar={item.avatar} 
        name={`${item.first_name} ${item.last_name}`} phone={item.phone} 
        address={item.address} />)}
        <Pagination {...paginationParams} />
        </>}
    </div>

}

export default List;