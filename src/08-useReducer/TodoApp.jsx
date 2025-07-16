import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from './hooks/useTodos';

export const TodoApp = () => {

    const {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        onToggleTodo,
    } = useTodos()

    

  return (
    <>
        <hr />
        <h1>TodoApp ({todosCount}) <small>pendientes: {pendingTodosCount}</small> </h1>

        <div className="row">
            <div className="col-7">
                <TodoList 
                todos = {todos}
                onDeleteTodo = { handleDeleteTodo }
                onToggleTodo = { onToggleTodo }
                 />
            </div>
            <div className="col-5">
                <h4>Agregar ToDo</h4>
                <hr />
                <TodoAdd 
                    handleNewTodo = { handleNewTodo }
                />
            </div>
        </div>
    </>
  )
}
