import React from "react";
import Header from "./Header";
import Todo from "./Todo";
import Footer from "./Footer";

function App(){
    return(
        <div className="todo">
            <Header />
            <Todo />
            <Footer />
        </div>
    )
}

export default App;