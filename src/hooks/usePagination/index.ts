import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectSkip } from "@redux/selectors/contacts";
import {goToNextPage, goToPervPage} from "@redux/slices/contactSlice";

const usePagination = () => {
    
    const dispatch = useAppDispatch();
    const skip = useAppSelector(selectSkip);

    const handlePrevButtonClick = () => {
        dispatch(goToPervPage());
    }

    const handleNextButtonClick = () => {
        dispatch(goToNextPage());
    }

    return {
        handlePrevButtonClick,
        handleNextButtonClick,
        skip
    }
}

export {usePagination};