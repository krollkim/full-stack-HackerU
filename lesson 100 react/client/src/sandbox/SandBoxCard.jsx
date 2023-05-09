import React from 'react'
import { 
    // Card, 
    // CardActionArea, 
    // CardMedia, 
    // Typography, 
    // CardHeader, 
    // CardContent, 
    // Divider, 
    // Box, 
    // CardActions, 
    // IconButton, 
    Grid
} from '@mui/material'
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from "@mui/icons-material/Delete";
// import CallIcon from '@mui/icons-material/Call';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Card2 from '../sandbox/Card2';

const SandBoxCard = () => {

    const onDelete = (cardId) => console.log(`you deleted card no: ${cardId}`);
    const onLike = (cardId) => console.log(`you liked card no: ${cardId}`);
    const onEdit = (cardId) => console.log(`you edited card no: ${cardId}`);

    const cards = [
        {
        _id: "63765801e20ed868a69a62c1",
        title: "first",
        subtitle: "subtitle",
        description: "testing 123",
        phone: "050-0000000",
        email: "test@test.com",
        web: "http://www.test.co.il",
        image: {
            url: "assets/images/horse.png",
            alt: "business card image",
        },
        address: {
            state: "",
            country: "country",
            city: "tel-aviv",
            street: "shinkin",
            houseNumber: 3,
            zip: 1234,
        },
        bizNumber: 1_000_000,
        user_id: "63765801e20ed868a69a62c2",
    },
    {
        _id: "63765801e20ed868a69a62c2",
        title: "first",
        subtitle: "subtitle",
        description: "testing 123",
        phone: "050-0000000",
        email: "test@test.com",
        web: "http://www.test.co.il",
        image: {
            url: "assets/images/horse.png",
            alt: "business card image",
        },
        address: {
            state: "",
            country: "country",
            city: "tel-aviv",
            street: "shinkin",
            houseNumber: 3,
            zip: 1234,
        },
        bizNumber: 1_000_000,
        user_id: "63765801e20ed868a69a62c2",
    },
    {
        _id: "63765801e20ed868a69a62c3",
        title: "first",
        subtitle: "subtitle",
        description: "testing 123",
        phone: "050-0000000",
        email: "test@test.com",
        web: "http://www.test.co.il",
        image: {
            url: "assets/images/horse.png",
            alt: "business card image",
        },
        address: {
            state: "",
            country: "country",
            city: "tel-aviv",
            street: "shinkin",
            houseNumber: 3,
            zip: 1234,
        },
        bizNumber: 1_000_000,
        user_id: "63765801e20ed868a69a62c2",
    },
    {
        _id: "63765801e20ed868a69a62c4",
        title: "first",
        subtitle: "subtitle",
        description: "testing 123",
        phone: "050-0000000",
        email: "test@test.com",
        web: "http://www.test.co.il",
        image: {
            url: "assets/images/horse.png",
            alt: "business card image",
        },
        address: {
            state: "",
            country: "country",
            city: "tel-aviv",
            street: "shinkin",
            houseNumber: 3,
            zip: 1234,
        },
        bizNumber: 1_000_000,
        user_id: "63765801e20ed868a69a62c2",
    },
    {
        _id: "63765801e20ed868a69a62c5",
        title: "first",
        subtitle: "subtitle",
        description: "testing 123",
        phone: "050-0000000",
        email: "test@test.com",
        web: "http://www.test.co.il",
        image: {
            url: "assets/images/horse.png",
            alt: "business card image",
        },
        address: {
            state: "",
            country: "country",
            city: "tel-aviv",
            street: "shinkin",
            houseNumber: 3,
            zip: 1234,
        },
        bizNumber: 1_000_000,
        user_id: "63765801e20ed868a69a62c2",
    },
    {
        _id: "63765801e20ed868a69a62c6",
        title: "first",
        subtitle: "subtitle",
        description: "testing 123",
        phone: "050-0000000",
        email: "test@test.com",
        web: "http://www.test.co.il",
        image: {
            url: "assets/images/horse.png",
            alt: "business card image",
        },
        address: {
            state: "",
            country: "country",
            city: "tel-aviv",
            street: "shinkin",
            houseNumber: 3,
            zip: 1234,
        },
        bizNumber: 1_000_000,
        user_id: "63765801e20ed868a69a62c2",
    }
]

  return (

<Grid justifyContent={"center"} container spacing={1} pb={1}>
    {cards.map((card)=> (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <Card2 
            card={card}
            onDelete={onDelete}
            onLike={onLike}
            onEdit={onEdit}/>
        </Grid>
    ))}
</Grid>

//     <Box sx={{display: "flex", justifyContent: "center",  mt: 10, mb: 20}}>
//         <Card sx={{minWidth: 250, maxWidth: 300, minHeight: 400, bgcolor: 'warning.light'}}>
//         {/* head */}
//         <CardActionArea>
//             <CardMedia component="img" image='./assets/images/card-img.png' alt="itzik kobra" height="200" raised/>
//         {/* body */}
//         <CardContent>
//             <CardHeader component="p" title="itzik" subheader="kobra" sx={{color: 'error.main'}}/>
//             <Divider color= "black"></Divider>
//             <Typography variant="body2" >
//                 <Typography fontWeight={700}>
//                     telegram:
//                 </Typography>
//                 <Typography>
//                     nevuhadnetzer
//                 </Typography>
//             </Typography>
//             <Typography variant="body2" >
//                 <Typography fontWeight={700}>
//                     available weed:
//                 </Typography>
//                 <Typography>
//                     roma, alaska, purple kush, og kush, northern lights, ak 47, lemon haze
//                 </Typography>
//                 <Typography fontWeight={700}>
//                     open from 09-20
//                 </Typography>
//             </Typography>
//         </CardContent>
//         </CardActionArea>
//         {/* footer */}
//         <CardActions sx={{justifyContent: 'space-between'}}>
//             <Box>
//                 <IconButton aria-label="delete">
//                     <DeleteIcon/>
//                 </IconButton>
//                 <IconButton aria-label="edit">
//                     <EditIcon/>
//                 </IconButton>
//             </Box>
//             <Box>
//                 <IconButton aria-label="call">
//                     <CallIcon/>
//                 </IconButton>
//                 <IconButton aria-label="Favorite">
//                     <FavoriteIcon/>
//                 </IconButton>
//             </Box>
//         </CardActions>
//     </Card>
//     </Box>
    

    )
 }

export default SandBoxCard