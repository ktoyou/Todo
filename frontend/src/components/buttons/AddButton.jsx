import {IoMdAddCircle} from "react-icons/io";


const AddButton = ({text, ...props}) => {
    return (
        <button {...props}>
            <IoMdAddCircle size={25} className="text-white mr-2"/>
            <h1 className="text-white text-center">{text}</h1>
        </button>
    )
}

export default AddButton