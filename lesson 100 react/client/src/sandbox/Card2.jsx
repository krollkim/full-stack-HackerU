import React from 'react';
// import CreateIcon from '@mui/icons-material/Create';
// import DeleteIcon from "@mui/icons-material/Delete";
// import CallIcon from '@mui/icons-material/Call';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import {
    //  Button,
     Box,
     Card,
    //  CardMedia,
    //  CardContent,
    //  CardActions,
     CardActionArea,
    //  Typography,
    //  Divider,
    //  List,
    //  ListItem,
    //  CardHeader,
    //  IconButton
} from "@mui/material";
import CardHead from '../cards/components/card/CardHead'
import CardBody from '../cards/components/card/CardBody'
import CardActionBar from '../cards/components/card/CardActionBar'

const Card2Component = ({card, onDelete, onLike, onEdit}) => {

  return (
 <>

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
             onEdit={onEdit}/>
     </Card>
   </Box>

 {/* third card, with props injaction */}

   {/* <Box sx={{display: "flex", justifyContent: "center", mt: 10, mb: 20}}>
    <Card sx={{minWidth: 300, maxWidth: 350}} raised>
        <CardActionArea>
            <CardHead image={parentCard.image}/>
            <CardBody card={parentCard}/>
        </CardActionArea>
            <CardActionBar cardId={parentCard._id}/>
    </Card>
  </Box>  */}


 {/* fourth card, with props injaction and loop */}

{/* //   <Box sx={{display: "flex", justifyContent: "center", mt: 10, mb: 20}}>
//     <Card sx={{minWidth: 300, maxWidth: 350}} raised>
//         <CardActionArea>
//             <CardHead image={card.image}/>
//             <CardBody card={card}/>
//         </CardActionArea>
//             <CardActionBar cardId={card._id} handleCardDelete={card._id}/>
//     </Card>
//   </Box> */}

{/* first card */}

    {/* <Box sx={{display: "flex", justifyContent: "center"}}>
    <Card sx={{ width: 270, height: 470, m: 2, background: "pink"}} raised>
            <CardMedia sx={{height: 250 , p: 1}} 
            component="img" image="assets/images/card-img.png" />
            <CardContent>
                <Typography component="h1" sx={{color: "black", textAlign: "left", p:0.5}}>Kroll Kim</Typography>
                <Typography fontSize="small" component="h2" sx={{color: "black", textAlign: "left", marginBottom: 2, p:0.5}}>Fullstack-Dev</Typography>
                <Divider/>
                <List>
                    <ListItem sx={{p:0}} disablePadding>Phone: 052-5890252</ListItem>
                    <ListItem sx={{p:0}} disablePadding>Address: Tlv-Center</ListItem>
                    <ListItem sx={{p:0}} disablePadding>Email: kimkroll2000@gmail.com</ListItem>
                </List>
            </CardContent>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Box>
                    <Button startIcon={<DeleteIcon />}></Button> 
                    <Button startIcon={<CreateIcon />}></Button>
                </Box>
                <Box>
                    <Button endIcon={<CallIcon />}></Button> 
                    <Button endIcon={<FavoriteIcon />}></Button>
                </Box>
            </Box>
        </Card>
    </Box> */}


{/* second card */}

{/* <Box sx={{display: "flex", justifyContent: "center", mt: 10, mb: 20}}>
<Card sx={{minWidth: 300, maxWidth: 350}} raised>
        <CardActionArea>
            {/* header */}
            {/* <CardMedia component="img" height="200" image="assets/images/horse.png" alt="Card Image" />
            {/* body - content */}
            {/* <CardContent> */}
                {/* <CardHeader title="Title" subheader="subtitle" sx={{p: 0, mb: 1}}/> */}
                {/* <Divider />
                <Box> */}
                  {/* <Typography variant="body2" color="text.secondary"> */}
                    {/* <Typography fontWeight={700}>
                        phone:
                    </Typography> */}
                    {/* <Typography component="span">
                        052-5890252
                    </Typography>
                    </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Typography fontWeight={700}>
                        address:
                    </Typography>
                    <Typography component="span">
                        Central-Distric-TLV
                    </Typography>
                    </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Typography fontWeight={700}>
                        email:
                    </Typography>
                    <Typography component="span">
                        kimkroll2000@gmail.com
                    </Typography>
                  </Typography> */}
        {/* //         </Box> */}
        {/* //     </CardContent> */}
        {/* // </CardActionArea> */}
         {/* action bar - footer */}
        {/* // <CardActions sx={{pt:0, justifyContent: "space-between"}}> */}
            {/* /* <Box> */}
                {/* <IconButton aria-label='delete'>
                  <DeleteIcon/> */}
                {/* </IconButton>
                <IconButton aria-label='edit'>
                  <CreateIcon/> */}
                {/* </IconButton> */}
            {/* </Box> */}
            {/* <Box> */}
                {/* <IconButton aria-label='call'>
                  <CallIcon/>
                </IconButton> */}
                {/* <IconButton aria-label='like'>
                <FavoriteIcon/>
                </IconButton> */}
            {/* </Box> */}
        {/* </CardActions> */}
    {/* // </Card> */}
{/* // </Box> */}


   </>
 )
 } 

export default Card2Component