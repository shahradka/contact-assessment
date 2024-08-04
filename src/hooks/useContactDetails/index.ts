import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectContactDetails } from "@redux/selectors/contacts";
import { findContactByContactId } from "../../api/contacts";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CONTACT_TYPE } from "types/Contact";

const useContactDetails = () => {

    const dispatch = useAppDispatch();

    const {contactId} = useParams();
    
    useEffect(() => {
        dispatch(findContactByContactId({contactId:contactId || ""}));
    }, [dispatch])
    
    const contactDetails = useAppSelector(selectContactDetails);

    return {
        contactDetails: contactDetails || {} as CONTACT_TYPE
    }

}

export {useContactDetails};