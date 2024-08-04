import React from "react";
import { CONTACT_TYPE } from "types/Contact";
import { Toolbar } from "@components/molecules/toolbar";
import { DetailView } from "@components/organisms/detailView";

interface IDetailsTemplate {
    data: CONTACT_TYPE
    onBack?: () => void
}

const DetailsTemplate = ({data, onBack}:IDetailsTemplate) => {

    return <>
        <Toolbar showBackButton showSearchBox={false} onBack={onBack}/>
        <DetailView {...data} />
    </>
}

export default DetailsTemplate;