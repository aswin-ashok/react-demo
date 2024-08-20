import React, { useState } from "react";

const Hooks = () => {

//   const [counter, setCounter] = useState(0);

//   const handleUpdate = (operator) => {
//     setCounter(operator == "+" ? counter + 1 : counter - 1);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       {counter}
//       <div
//         style={{
//           marginTop: "10px",
//           display: "flex",
//           gap: "10px",
//           justifyContent: "center",
//         }}
//       >
//         <button style={{ padding: "7px" }} onClick={() => handleUpdate("+")}>Increment</button>
//         <button style={{ padding: "7px" }} onClick={() => handleUpdate("-")}>Decrement</button>
//       </div>

//       <div className="mt-5">
//         <h3 className="text-red-700">Tailwind Styles</h3>
//         <p>Hi</p>
//       </div>
//     </div>
//   );

const [todoList, setTodoList] = useState([])
const [todo, setTodo] = useState("")

const handleTodo = () => {
    setTodoList([todo, ...todoList])
}

return (
    <div>
        <div className="mt-5 text-center">
            <input type="text" name="todo" placeholder="Enter Task"
            value={todo}
            onChange={ (e) => setTodo(e.target.value)} />
            <button onClick={handleTodo}>Add Task</button>
        </div>
        <div className="text-center mt-3">
            {
                todoList.map((item, index) => {
                    return (
                        <div key={index}>{item}</div>
                    )
                })
            }
        </div>
    </div>

)




};

export default Hooks;
