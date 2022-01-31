import react from 'react'
function Header(){
    return(
        <header>
            <nav>
                <img src="./favicon.ico" alt="Airbnb Logo"/>
                <h2>airbnb</h2>
            </nav>
            <div className="hero">
                <img src="./Imgs/hero.png" alt="Hero Image" width="50%" />
                <div className="hero_content">
                    <h2>Online Experience</h2>
                    <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
                </div>
            </div>
        </header>
    )
}

export default Header;