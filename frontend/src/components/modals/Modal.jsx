import AddButton from "../buttons/AddButton";
import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({children, title, active, setActive}) => {
    return (
        <div className={`flex items-center justify-center z-10 absolute h-screen w-screen left-0 top-0 absolute backdrop-blur-sm ${!active ? 'hidden' : ''}`}>
            <div className="relative">
                <AiOutlineClose onClick={() => setActive(false)} size={25} className="absolute right-2 top-2 text-white text-md"/>
                <div className="bg-slate-800 p-6 w-96 items-center justify-center rounded-xl">
                    <h1 className="text-white text-center font-bold mb-6 text-2xl">{title}</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal