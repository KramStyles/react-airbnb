import React from "react";


export default function Article(props){
    return(
        <div className="journey">
            <div className="img beijing"/>
            <div className="content">
                <article>
                    <h3><i className="fa fa-map-marker-alt"/> {props.country}</h3>
                    <h1>{props.place}</h1>
                    <b>{props.time_period}</b>
                    <p>{props.description}</p>
                </article>
            </div>
        </div>
    )
}