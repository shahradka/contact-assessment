import { useNavigate } from "react-router-dom";

const useBack = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    }

    return {
        handleBack
    }
}

export {useBack};