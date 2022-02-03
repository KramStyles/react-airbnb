import react from 'react'

const card_details = [
    [5.0, 'USA', 136, "Visit our Wonderful Museum", 1],
    [4.5, 'NIG', 250, "A state of Culture", 2],
    [4.8, 'UK', 120, "Welcome to United Kingdoms", 3]
]


function CardInfo(props) {
    return (
        <div className="card">
            <div className={`card-img img-${props.backImg}`}/>
            <a href="#" className="featured_button">sold out</a>
            <i className="fa fa-star"> </i> <span>{props.star} (6) {props.country}</span>
            <p>{props.desc}</p>
            <a href="#"><b>From ${props.price} </b>/ Person</a>
        </div>
    )
}

function CardInfoDesc({backImg, star, country, price, desc}) {
    // This is a redo of the above function. It's built using the props destructuring method
    return (
        <div className="card">
            <div className={`card-img img-${backImg}`}/>
            <a href="#" className="featured_button">sold out</a>
            <i className="fa fa-star"> </i> <span>{star} (6) {country}</span>
            <p>{desc}</p>
            <a href="#"><b>From ${price} </b>/ Person</a>
        </div>
    )
}

export default function Card() {
    const cards = card_details.map(items => {
        return <CardInfoDesc star={items[0]} country={items[1]} price={items[2]} desc={items[3]} backImg={items[4]}/>;
    })
    return (
        <section className="card-holder">
            {cards}
        </section>
    )
}

