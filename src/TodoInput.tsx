
interface TodoInputProps {
    todo: string
    setTodo: (todo:string) => void
    addTodo: () => void
}
const TodoInput: React.FC<TodoInputProps> = ({todo, setTodo, addTodo}) => {

    return(
        <div className="input-wrapper">
            <input
                type="text"
                name="todo"
                value={todo}
                placeholder="Create a new todo"
                onChange={(e) => setTodo (e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addTodo();
                    }
                }}
            />
            <button
                className="add-button"
                onClick={addTodo}
                >
                    Add
            </button>
        </div>
    )
};

export default TodoInput;