import React, { useState } from "react";
import {AiOutlineClose} from "react-icons/ai"
const Popup = ({updateTodo,todo}) => {
   const [memoInput, setMemoInput] = useState("")


  return (
    <form onSubmit={(e) =>  updateTodo(todo.id,{
      ...todo,
      memo:memoInput,
      })}>
      <div className="fixed flex left-0 top-0 w-full h-screen bg-black/50 justify-center items-center">
        <div className="flex absolute w-[30%] h-[50%] bg-todoColor rounded-xl justify-center">
          
           
      
         
          <div className="flex flex-col justify-center items-center">
            <input
              placeholder="Add a memo"
              className="xl:w-[270px] h-8 p-5  border border-borderColor rounded-md text-white bg-inputColor outline-none"
              type="text"
              onChange={(e) => {
                setMemoInput(e.target.value);
              }}
            ></input>
            <div className="p-3">
            <button  type="submit" className="bg-lightPink px-6 py-2 rounded-md ml-2 text-white font-medium">
              Add
            </button>
            <button className=" bg-lightPink px-4 py-2 rounded-md ml-2 text-white font-medium">
              Delete
          </button>
          </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Popup;
