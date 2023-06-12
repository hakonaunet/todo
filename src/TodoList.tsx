interface TodoListProps {
    list: string[]
    remove: (entry:string) => void
}

const TodoList:React.FC<TodoListProps> = ({ list, remove }) => {
    return (
        <>
            {list?.length > 0 ?
          (<ul> 
            {list.map((entry, index) => (
              <div key={index} className="todo">
                <li key={index}>{entry}</li>
                <button 
                  className="delete-button"
                  onClick={() => remove (entry)}
                >
                  Delete
                </button>
              </div>
            ))}
            </ul>
          ) : (
            <div className="empty">
              <p>No todos found</p>
            </div>
          )}
        </>
    )
}

export default TodoList;