import Check from "../checkboxes/Check";
import {BsTrash} from "react-icons/bs"

const TodoItem = ({item, onCheckBoxClick, onDeleteClick}) => {
    return (
        <div className="bg-slate-800 h-10 rounded-md flex items-center p-6 mb-3 justify-between">
            <div className="flex">
                <Check checked={item.isCompleted} onClick={() => onCheckBoxClick(item)}/>
                <p className={`text-white ${item.isCompleted && 'line-through'}`}>{item.title}</p>
            </div>
            <BsTrash onClick={() => onDeleteClick(item)} className="text-white hover:text-red-600 transition 1s active:outline-none" size={20}/>
        </div>
    )
}

export default TodoItem