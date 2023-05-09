import React from 'react';
import cardType from '../../models/types/cardType';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';
import {func} from 'prop-types'

import {
    Box,
    Card,
    CardActionArea,
} from "@mui/material";


const CardComponent = ({ card, onDelete, onLike, onEdit }) => {

  return (
 <>

 {/* fourth card, with props injaction and loop */}
  <Box sx={{display: "flex", justifyContent: "center", mt: 10, mb: 20}}>
    <Card sx={{minWidth: 300, maxWidth: 350}} raised>
        <CardActionArea>
            <CardHead image={card.image}/>
            <CardBody card={card}/>
        </CardActionArea>
            <CardActionBar 
            cardId={card._id}
            onDelete={onDelete}
            onLike={onLike}
            onEdit={onEdit}
            />
    </Card>
  </Box>
 </>
 )
}

CardComponent.propTypes = {
  card: cardType.isRequired,
  onLike: func.isRequired,
  onDelete: func.isRequired,
  onEdit: func.isRequired,
};

export default CardComponent