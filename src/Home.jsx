import { Link } from 'react-router-dom';
import './Home.css'
import Card from './Card';

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
                    <li><Link to="/test">Test</Link></li>
                </ul>
            </nav>

                <Card title="Home Page" btn="Padhna Parxa" bgc="'red'"/>  {/* // using card components in multiple pages.*/}

            <div className="content">
                Yesh bhitra kei xa hai, bichha bichhama 😄
            </div>

        </>
    )
}
export default Home;