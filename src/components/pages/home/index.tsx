import React from "react";
import { HomeTemplate } from "@components/templates/homeTemplate";
import { useSearch } from "@hooks/useSearch";
import { useAllContactList } from "@hooks/useAllContactList";
import { usePagination } from "@hooks/usePagination";

const Home = () => {

    const {handleSearch} = useSearch();

    const {contactList, loading} = useAllContactList();

    const {handleNextButtonClick, handlePrevButtonClick, skip} = usePagination();
    

    return <HomeTemplate loading={loading} paginationParams={{currentPage:skip,
        onNextBtnClick:handleNextButtonClick, onPrevBtnClick:handlePrevButtonClick}} 
    onSearch={handleSearch} list={contactList || []} />
}

export {Home};