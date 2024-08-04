import React from "react";
import {ContactRecords as MContactRecords} from "@components/molecules/contactRecords";
import { useContactRecords } from "@hooks/useContactRecords";

const ContactRecords = () => {

    const {contactRecordsList} = useContactRecords();

    return <MContactRecords items={contactRecordsList} />
}

export default ContactRecords;