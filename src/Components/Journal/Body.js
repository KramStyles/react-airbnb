import React from "react";

import Components from './Components'
import Data from "./Data";

function Body(){
    const articles = Data.map(item =>{
        return (
            <Components key={item.id} item={item}/>
        )
    })
    return(
        <section>
            {articles}
        </section>
    )
}

export default Body;