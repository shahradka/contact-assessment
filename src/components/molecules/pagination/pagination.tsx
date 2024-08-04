import React, { HTMLProps } from "react"
import { Button } from "@components/atoms/button"
import { ArrowLeft15, ArrowRight15 } from "@components/atoms/icons/Arrow"
import { TextField } from "@components/atoms/textfield"
import "./styles.scss";

const NavButton = ({icon, ...restProps}:{icon:React.ReactNode} & Parameters<typeof Button>[0]) => {
    return <Button size="small" className="pagination-button" color="gray" {...restProps}>
            {icon}
        </Button>
}

const NextPageButton = (props:Parameters<typeof Button>[0]) => <NavButton icon={<ArrowRight15 />} {...props} />;
const PrevPageButton = (props:Parameters<typeof Button>[0]) => <NavButton icon={<ArrowLeft15 />} {...props} />;

interface IPagination extends HTMLProps<HTMLDivElement>{
    currentPage: number,
    onPrevBtnClick?: () => void
    onNextBtnClick?: () => void
}

const Pagination = ({currentPage, onPrevBtnClick, onNextBtnClick}:IPagination) => {

    const handleNextButtonClick = () => {
        if(typeof onNextBtnClick === "function")
            onNextBtnClick();
    }

    const handlePrevButtonClick = () => {
        if(typeof onPrevBtnClick === "function")
            onPrevBtnClick();
    }

    return <div className="pagination">
        <PrevPageButton onClick={handlePrevButtonClick} />
        <TextField className="pagination-textField" disabled value={currentPage} variant="small" />
        <NextPageButton onClick={handleNextButtonClick} />
    </div>
}

export default Pagination;