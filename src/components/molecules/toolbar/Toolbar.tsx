import React from "react";
import "./styles.scss";
import { Button } from "@components/atoms/button";
import { ArrowLeft15 } from "@components/atoms/icons/Arrow";
import { SearchBox } from "../searchBox";

interface IToolbar{
    showBackButton?:boolean
    showSearchBox?:boolean
    onBack?: () => void
    onSearch?: (searchValue:string) => void
}

const Toolbar = ({showBackButton=false, showSearchBox=true, onBack, onSearch}:IToolbar) => {

    const handleBack = () => {
        if(typeof onBack === "function")
            onBack();
    }

    return <div className="toolbar">
        {showBackButton && 
            <Button color="gray" onClick={handleBack}>
                <ArrowLeft15 />
            </Button>
        }
        <div className="space" />
        {showSearchBox  && <SearchBox onSearch={onSearch} />}
    </div>

}

export default Toolbar;