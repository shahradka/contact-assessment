import { useAppDispatch } from "@redux/hooks";
import { searchContact } from "../../api/contacts";

const useSearch = () => {
    const dispatch = useAppDispatch();

    const handleSearch = (searchValue:string) => {
        dispatch(searchContact({searchQuery: searchValue,limit:30}));
    }

    return {
        handleSearch
    }
}

export {useSearch};