import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea"

function Todo(){
    const [items, setItems] = useState([]);

    function handleClick(todo){
        setItems((prevItem)=>{
            return [...prevItem, todo];
        });
    }

    function deleteItem(id){
        setItems((prevItem)=>{
            return prevItem.filter((tdos, index) => {
                return index !== id;
            })
        })
    }

    return(
        <div>
            <div className="container">
                    <InputArea 
                        onAdd={handleClick}
                    />
                <div className="list">
                <ul>
                    {items.map((todoItems, index)=>(
                        <TodoItem 
                            key={index}
                            id={index}
                            text={todoItems}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Todo;