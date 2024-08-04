import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectContactList } from "@redux/selectors/contacts";
import { fetchAllContacts } from "@api/contacts";
import { useEffect } from "react";
import { PAGE_LIMIT } from "../../constants/environments";

const useAllContactList = () => {

    const dispatch = useAppDispatch();

    const {list, total, skip, loading} = useAppSelector(selectContactList);
    
    useEffect(() => {
        dispatch(fetchAllContacts({limit:Number(PAGE_LIMIT), skip}));
    }, [dispatch, skip])
    

    return {
        contactList: list,
        total,
        loading
    }

}

export {useAllContactList};