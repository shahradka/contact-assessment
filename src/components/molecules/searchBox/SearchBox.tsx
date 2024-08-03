import { Button } from "@components/atoms/button";
import { Search15 } from "@components/atoms/icons/Search";
import { TextField } from "@components/atoms/textfield";
import React, { useRef } from "react";
import "./styles.scss";

interface ISearchBox {
    onSearch? : (searchValue:string) => void
}

const SearchBox = ({onSearch}:ISearchBox) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        if(typeof onSearch === "function")
            onSearch(inputRef.current?.value || "");
    }
    
    return <div className="search-box">
        <TextField ref={inputRef} className="search-text-field" />
        <Button variant="icon" color="transparent" className="search-button" onClick={handleSearch}>
            <Search15 />
        </Button>
    </div>
}

export default SearchBox;