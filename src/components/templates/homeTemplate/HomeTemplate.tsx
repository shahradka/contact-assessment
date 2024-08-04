import React from "react";
import { List } from "@components/organisms/list";
import { CONTACT_TYPE } from "types/Contact";
import { Toolbar } from "@components/molecules/toolbar";

interface IHomeTemplate {
    list: Array<CONTACT_TYPE>
    onSearch?: (searchValue: string) => void
    paginationParams: Parameters<typeof List>[0]["paginationParams"]
    loading?: boolean
}

const HomeTemplate = ({list, loading,onSearch, paginationParams}:IHomeTemplate) => {

    return <>
        <Toolbar onSearch={onSearch} />
        <List items={list} paginationParams={paginationParams} loading={loading} />
    </>
}

export default HomeTemplate;