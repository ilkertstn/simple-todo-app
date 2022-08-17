import React, { useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <span className="absolute pt-3 pl-3 text-memoColor">
          <AiOutlineAlignLeft />
        </span>
        <input
          value={input}
          type="text"
          placeholder="Add a task..."
          className="w-[440px] h-8 p-5 pl-9 border border-borderColor rounded-md text-white bg-inputColor outline-none"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit"></button>
      </div>
    </form>
  );
};

export default TodoForm;
