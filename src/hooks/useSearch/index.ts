import { useAppDispatch } from "@redux/hooks";
import { searchContact } from "../../api/contacts";
import { PAGE_LIMIT } from "../../constants/environments";

const useSearch = () => {
    const dispatch = useAppDispatch();

    const handleSearch = (searchValue:string) => {
        dispatch(searchContact({searchQuery: searchValue,limit:Number(PAGE_LIMIT)}));
    }

    return {
        handleSearch
    }
}

export {useSearch};