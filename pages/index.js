import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import axios from "axios";
export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/tasks")
      .then((response) => {
        console.log(response.data)
      setTodos(response.data);
    });
  }, []);
  

  const removeTodo = (id) => {
    axios.delete
    (`${"http://localhost:3000/api/tasks"}/${id}`, {
    })
    .then((response) => {

      console.log(response)

      const filterTodos = todos.filter((todo)=>todo.id !== id);
      setTodos(filterTodos)
    });
  };

   const addTodo = (text) => {
    axios
    .post("http://localhost:3000/api/tasks", {
      title:text,
     
    })
    .then((response) => {
      console.log(response)
      setTodos([...todos,response.data])
    });
  };

   

  const updateTodo = (id,data,e) => {
    axios
      .patch(`${"http://localhost:3000/api/tasks"}/${id}`, data)
      .then((response) => {

        const updatedTodos = todos.map((item) => {
          
          if(item.id === response.data.id){
            return response.data
          }else{
            return item
          }
          
        })

        setTodos(updatedTodos)        
      });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col bg-todoColor w-max-[405] min-h-[600px] max-h-[full] rounded-[5px]">
        <div className="flex justify-center border-b border-bottomBorderColor">
          <h2 className="text-center text-white pt-2 border-b-2 border-lightPink">
            To Do List
          </h2>
        </div>

        <div style={{ margin: "30px 25px" }} className="">
          <TodoForm addTodo={addTodo} />
          <div className="border-b border-borderColor pb-2 pt-2">
            {todos
              .filter((item) => item.pinned)
              .map((todo, id) => {
                return (
                  <TodoItem
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                    key={id}
                    todo={todo}

                  />
                );
              })}
          </div>
          {todos
            .filter((item) => !item.pinned )
            .map((todo, id) => {
              return (
                <TodoItem
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  key={id}
                  todo={todo}
                  id={id}
                  
                />
              );
            })}
           
        </div>
      </div>
    </div>
  );
}
