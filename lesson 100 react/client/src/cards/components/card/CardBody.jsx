import React from 'react'
import { 
    CardContent,
    Typography,
    Divider,
    Box,
    CardHeader,
    CardActionArea
 } from "@mui/material";
import cardType from '../../models/types/cardType';

const CardBody = ({card}) => {
    const { city, street, houseNumber } = card.address;

  return (
    
<CardActionArea>
    <CardContent>
        <Typography>{card.createdAt}</Typography>
        <CardHeader title={card.title} subheader={card.subtitle} sx={{p: 0, mb: 1}}/>
            <Divider />
        <Box>
            <Typography variant="body2" color="text.secondary">
                <Typography fontWeight={700}>
                    phone: {card.phone}
                </Typography>
                </Typography>
            <Typography variant="body2" color="text.secondary">
                <Typography fontWeight={700}>
                    address: {street} {houseNumber} {city}
                </Typography>
                </Typography>
            <Typography variant="body2" color="text.secondary">
                <Typography fontWeight={700}>
                    card number: {card.bizNumber}
                </Typography>
                </Typography>
        </Box>
       </CardContent>
    </CardActionArea>
  )
}

CardBody.propTypes = {
    card: cardType.isRequired,
};

export default CardBody