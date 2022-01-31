import react from 'react'
export default function Card() {
    return (
        <section className="card-holder">
            <div className="card">
                <div className="card-img img-1"></div>
                <a href="#" className="featured_button">sold out</a>
                <i className="fa fa-star"> </i> <span>5.0 (6) USA</span>
                <p>Visit our Wonderful Museum</p>
                <a href="#"><b>From $136 </b>/ Person</a>
            </div>
        </section>
    )
}