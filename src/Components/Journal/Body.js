import React from "react";

import Components from './Components'
import Data from "./Data";

function Body(){
    const articles = Data.map(item =>{
        return (
            // <Components key={item.id} item={item}/>
            <Components country={item['country']}
                        place={item['place']}
                        description={item['description']}
                        time_period={item['time_period']}
            />
        )
    })
    return(
        <section>
            {articles}
        </section>
    )
}

export default Body;