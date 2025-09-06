import './Card.css'
function Card(props) {
    return (
            <div class="card">
                <img src="https://via.placeholder.com/280x150" alt="Card Image" />
                <h3>{props.title}</h3>
                <p>This is a simple card with an image, title, description, and a button using HTML and CSS only.</p>
                <button>{props.btn}</button>
            </div>
    )
}

export default Card;