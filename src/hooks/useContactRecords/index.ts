import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectRecentContactRecords } from "@redux/selectors/contacts";
import { addToRecentList } from "@redux/slices/contactSlice";
import { CONTACT_TYPE } from "types/Contact";


const useContactRecords = () => {

    const dispatch = useAppDispatch();

    const contactRecordsList = useAppSelector(selectRecentContactRecords);

    return {
        contactRecordsList,
        addToContactRecords: (payload: CONTACT_TYPE) => dispatch(addToRecentList(payload))
    }

}

export {useContactRecords};