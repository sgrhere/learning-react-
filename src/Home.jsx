import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <>

            {/* use of inline & external css in React Project
        <h1 style={{color: 'red', backgroundColor: 'navy'}}>Inline CSS</h1>
        <h2>External CSS</h2>
         */}

            {/* Now let's transform html css project into a react project */}
            <nav>
                <div className="logo">My Website</div>
                <ul>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>


            <div className="content">
                Something in between 😄
            </div>

        </>
    )
}
export default Home;