import {useState} from 'react';
import Card from './Card';

const CardStack = ({cards}) => {


  return (
    <div>
        {cardData.map(card => (
            <Card key={card.id} data={card} />
        ))}
    </div>
  )
}

export default CardStack