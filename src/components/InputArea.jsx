import React,{useState} from "react";

function InputArea(props){

    const [todo, setTodo] = useState("")

    function addTodo (event){
        const item = event.target.value;
        setTodo(item);
    }


    return(
        <div>
        <input placeholder="Type Something" onChange={addTodo} value={todo}></input>
        <button onClick={()=>{
            props.onAdd(todo);
            setTodo("");
        }}>Add</button>
        </div>
    )
}

export default InputArea;