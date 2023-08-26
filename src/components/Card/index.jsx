import { useState } from "react";
import { Container } from "./style";
import { Counter } from '../Counter';
import { ButtonText } from '../ButtonText';
import { VscChevronRight } from 'react-icons/vsc';
import { VscHeart } from 'react-icons/vsc';

export function Card({ image, name, description, price, data, ...rest }) {
    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('');
    // const [price, setPrice] = useState('');

    return(
        <Container>
            <button className="heart"><VscHeart/></button>
            <img src={image} alt={image} />
            <h3>
                {name}
                <VscChevronRight />
            </h3>
            <p>{price}</p>
            <Counter />
            <ButtonText title="incluir" />
        </Container>
    )
}