import TodoItem from "../ItemLists/TodoItem";
import {useState} from "react";
import AddButton from "../buttons/AddButton";
import Modal from "../modals/Modal";
import AddTodoItem from "./AddTodoItem";

const Todo = ({items}) => {
    const [todos, setTodos] = useState(items)
    const [modal, setModal] = useState(false)

    const onTodoCheckboxClick = (todo) => {
        const copyTodos = [...todos]
        todo.isCompleted = !todo.isCompleted
        setTodos(copyTodos)
    }

    const addButton = (todo) => {
        console.log(todo)
        setTodos([todo, ...todos])
        setModal(false)
    }

    const onDeleteClick = todo => setTodos([...todos].filter(e => e.id !== todo.id))

    return (
        <div className="z-0">
            <div className="z-0">
                {todos.map(todo => <TodoItem onDeleteClick={onDeleteClick} onCheckBoxClick={onTodoCheckboxClick} item={todo} key={todo.id}/>)}
                <AddButton className="bg-pink-700 h-8 mt-10 rounded flex items-center p-5" onClick={() => setModal(true)} text={'Add task'}/>
            </div>
            <Modal title="Add task" active={modal} setActive={setModal}>
                <AddTodoItem addTodo={addButton}/>
            </Modal>
        </div>
    )
}

export default Todo