import { Grid, Typography } from '@mui/material';
import { arrayOf } from 'prop-types';
import React from 'react'
import cardType from '../models/types/cardType';
import CardComponent from './card/Card';

const Cards = ({cards}) => {

    if(!cards.length){
        return (
            <Typography>
                oops.... there is no such data/value.
            </Typography>
        )
    }
    const onDelete = (cardId) => console.log(`you deleted card no: ${cardId}`);
    const onLike = (cardId) => console.log(`you liked card no: ${cardId}`);
    const onEdit = (cardId) => console.log(`you edited card no: ${cardId}`);

  return (
    <Grid justifyContent={'center'} container spacing={2} pb={2}>
        {cards.map((card) => (
            <Grid item key={card._id} xs={12.5} sm={6.5} md={4.5} lg={3.5}>
                <CardComponent 
                 card={card}
                 onDelete={onDelete}
                 onLike={onLike}
                 onEdit={onEdit}
                 />
            </Grid>
        ))}
    </Grid>
  );
};

Cards.propTypes = {
  cards: arrayOf(cardType).isRequired
}


export default Cards