import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
    Box,
    CardActions,
    IconButton
} from "@mui/material";
import {func, string} from "prop-types";
import { useUser } from '../../../users/providers/UserProvider';

const CardActionBar = ({cardId, onDelete, onLike, onEdit }) => {
  const { user } = useUser();
  return (
   
<CardActions sx={{pt:0, justifyContent: "space-between"}}>
<Box>
    { user && cardId && user.isAdmin && (
    <IconButton aria-label='delete' onClick={()=>onDelete(cardId)}>
      <DeleteIcon/>
   </IconButton>
    )}
    { user && cardId && (
    <IconButton aria-label='edit' onClick={()=>onEdit(cardId)}>
      <CreateIcon/>
    </IconButton>
    )}
</Box>
<Box>
    <IconButton aria-label='call'>
      <CallIcon/>
    </IconButton>
    { user && (
   <IconButton aria-label='like' onClick={()=>onLike(cardId)}>
    <FavoriteIcon/>
    </IconButton>
    )}
</Box>
</CardActions>

  )
}

CardActionBar.propTypes = {
  cardId: string.isRequired,
  onDelete: func.isRequired,
  onEdit: func.isRequired,
  onLike: func.isRequired,
}

export default CardActionBar