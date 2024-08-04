import { DetailsTemplate } from "@components/templates/detailsTemplate";
import { useBack } from "@hooks/useBack";
import { useContactDetails } from "@hooks/useContactDetails";
import React from "react";

const Details = () => {

    const {contactDetails} = useContactDetails();
    const {handleBack} = useBack();
    
    return <DetailsTemplate onBack={handleBack} data={contactDetails} />
}

export {Details};
