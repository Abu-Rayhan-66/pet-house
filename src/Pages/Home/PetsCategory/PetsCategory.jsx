import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
import SpecificPetCategory from "./SpecificPetCategory/SpecificPetCategory";
import { useParams } from "react-router-dom";


const PetsCategory = () => {

    const [card, setCard] = useState({})
    const [cards, setCards] = useState([])
    const { _id } = useParams()
    // const cards = useLoaderData()
    console.log(cards)
    console.log(card)

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            setCards(data)
           

        })
    }, [])

    useEffect(() => {
        const findCards = cards.find(item => item.id == _id)
        setCard(findCards)
    }, [_id, cards])

    console.log(card)

    return (
        <div>
            <SpecificPetCategory card={card}></SpecificPetCategory>
        </div>
    );
};

export default PetsCategory;