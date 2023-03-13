import { useEffect, useState } from "react";

const Cards = () => {
    const [state, setState] = useState([])
    const cards = () => {
        fetch('https://random-data-api.com/api/users/random_user?size=10')
            .then((resp) => resp.json())
            .then((data) => { setState(data) })
    }
    useEffect(cards, [])
    return <div className="container">
        <button onClick={cards} className="random">Fetch Random</button>
        <div className="flip">
            {state.length !== 0 && state.map(card => {
                return <div div className="flip__card" key={card.id} >
                    <div className="flip__card--inner">
                        <div className="flip__card--front">
                            <img src={card.avatar} alt="Avatar" className="flip__card--img" />
                            <h1>{card.first_name} {card.last_name}</h1>
                            <p>{card.username}</p>
                        </div>
                        <div className="flip__card--back">
                            <p>{card.email}</p>
                            <p>{card.phone_number}</p>
                            <p>{card.date_of_birth}</p>
                            <p>Employment: {card.employment.key_skill} , {card.employment.title}</p>
                        </div>
                    </div>
                </div>

            })}
        </div>
    </div>

};

export default Cards;
