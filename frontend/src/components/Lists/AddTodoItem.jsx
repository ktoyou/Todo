import AddButton from "../buttons/AddButton";
import {useState} from "react";

const AddTodoItem = ({addTodo}) => {
    const [todo, setTodo] = useState({isCompleted: false, title: ''})
    return (
        <div className="flex items-center justify-center flex-col">
            <input onChange={(e) => setTodo({...todo, title: e.target.value, id: Date.now()})} className="w-72 mb-5 h-10 text-white outline-none bg-transparent border-2 rounded text-center" type="text" placeholder="Task name"/>
            <AddButton onClick={() => addTodo(todo)} text="Add" className="w-72 bg-pink-700 h-8 rounded flex items-center p-5"/>
        </div>
    )
}

export default AddTodoItem