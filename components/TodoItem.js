import React, { useState } from "react";
import {
  BsThreeDots,
  BsTrash,
  BsPinAngle,
} from "react-icons/bs";
import { AiFillFileAdd } from "react-icons/ai";
import { GiPin } from "react-icons/gi";
import Popup from "./Popup";

const TodoItem = (props) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup(!popup);
  };

  const { todo, removeTodo, updateTodo } = props;
  return (
    <div>
      <div className="flex w-[100%] pt-5 ">
        <div className="items-center justify-center">
          {todo.pinned ? (
            <GiPin className="text-lightPink h-5 -rotate-90" />
          ) : (
            ""
          )}
        </div>
        <input
        onChange={(e) => 
          updateTodo(todo.id, {
            ...todo,
            checked: e.target.checked,
          })}
          type="checkbox"
          className="mt-1 ml-2"
          style={{ height: "16px", width: "16px" }}
          checked={todo.checked}
        />
        <div className="flex items-center w-[100%] justify-between">
          <span className={todo.pinned ? "ml-2 text-white" : "ml-2 text-white"}>
            {todo.title}
          </span>
          <BsThreeDots
            onClick={handleNav}
            className="text-memoColor cursor-pointer "
          />
        </div>
      </div>
      {todo.memo &&
      <span className="ml-6 text-sm text-memoColor ">{todo.memo}</span> 
}
      <div className={nav ? "absolute ml-[290px] " : "hidden"}>
        <div className=" border-2 border-bottomBorderColor bg-popupColor rounded-md text-memoColor">
          <ul className="py-1 text-sm ">
            <li className="flex items-center">
              <BsPinAngle className="ml-2" />
              <button
                onClick={() => {
                  updateTodo(todo.id, {
                    ...todo,
                    pinned: !todo.pinned,
                  });
                  setNav(false);
                }}
                className="block py-2 px-4"
              >
                {!todo.pinned ? "Pin on the top" : "Remove the pin"}
              </button>
            </li>
            <li className="flex items-center">
              <AiFillFileAdd className="ml-2" />
              <button
                onClick={() => handlePopup()}
                className="block py-2 px-4 "
              >
                Add a memo
              </button>
            </li>
            <li className="flex items-center ">
              <BsTrash className="ml-2" />
              <button
                onClick={() => removeTodo(todo.id)}
                className="block py-2 px-4 "
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={popup ? "z-20" : "hidden"}>
        <Popup todo={todo} updateTodo={updateTodo} />
      </div>
    </div>
  );
};

export default TodoItem;
