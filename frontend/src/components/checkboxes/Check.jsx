import {BsCheck} from "react-icons/bs";

const Check = ({checked, children, ...props}) => {
    return (
        <button {...props} className="w-5 h-5 bg-pink-600 rounded mr-2 active:outline-none">
            {checked && <BsCheck size={20} className="text-white"/>}
        </button>
    )
}

export default Check