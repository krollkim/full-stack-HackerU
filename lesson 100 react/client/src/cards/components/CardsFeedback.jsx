import React from "react";
import { arrayOf, bool, object, func, string } from "prop-types";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Cards from "./Cards";
import { Typography } from "@mui/material";

const CardsFeedback = ({ pending, error, cards, onDelete }) => {
  if (pending) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && !cards.length)
    return <Typography>Oops.. there are no cards at all!</Typography>;
  if (cards && !!cards.length)
    return <Cards cards={cards} onDelete={onDelete} />;
  return null;
};

CardsFeedback.propTypes = {
  pending: bool.isRequired,
  error: string,
  cards: arrayOf(object),
  onDelete: func.isRequired,
};

export default CardsFeedback;