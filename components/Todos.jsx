import Todo from "./Todo";

const Todos = ({ todos, date, tags, completeTodo, removeTodo }) => {
        return (
          <div>
            {todos.map((todo, index) => (
              <Todo
                key={index} 
                index={index}
                todo={todo}
                date={date}
                tags={tags}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
          </div>
    );
}

 
export default Todos;