import React from "react";


export default function Article(props){
    return(
        <div className="journey">
            <div className={`img ${props.item.place.toLowerCase()}`} />
            <div className="content">
                <article>
                    <h3><i className="fa fa-map-marker-alt"/> {props.item.country}</h3>
                    <h1>{props.item.place}</h1>
                    <b>{props.item.time_period}</b>
                    <p>{props.item.description}</p>
                </article>
            </div>
        </div>
    )
}