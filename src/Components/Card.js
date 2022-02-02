import react from 'react'
//
// const card_details = [
//     [5.0, 'USA', 136],
//     [4.5, 'NIG', 250],
//     [4.8, 'UK', 120]
// ]
// let cards;
//
// for (let i = 0; i < card_details.length; i++) {
//     cards += `<`
// }

function CardInfo(props) {
    return (
        <div className="card">
            <div className= {props.backImg}/>
            <a href="#" className="featured_button">sold out</a>
            <i className="fa fa-star"> </i> <span>{props.star} (6) {props.country}</span>
            <p>{props.desc}</p>
            <a href="#"><b>From ${props.price} </b>/ Person</a>
        </div>
    )
}

export default function Card() {
    return (
        <section className="card-holder">
            <CardInfo star="5.0" country="USA" price="136" desc="Visit our Wonderful Museum" backImg="card-img img-1"/>
            <CardInfo star="4.5" country="NIG" price="212" desc="A state of Culture" backImg="card-img img-2"/>
            <CardInfo star="4.8" country="UK" price="188" desc="Welcome to United Kingdoms" backImg="card-img img-3"/>
        </section>
    )
}