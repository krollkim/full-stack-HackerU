import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { 
  getCards,
  getCard,
  deleteCard,
  createCard,
  editCard,
  getMyCards,    
  changeLikeStatus, 
} from "../services/cardServices";


const useCards = () => {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  useAxios();

  const requestStatus = (pending, error, cards, card) => {
    setPending(pending);
    setError(error);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = async () => {
    try {
      setPending(true);
      const cards = await getCards();
      requestStatus(false, null, cards, null);
    } catch (error) {
      requestStatus(false, error, null, null);
    }
  };

  const handleGetCard = async (cardId = "") => {
    try {

      // if (!cardId) {
      //   throw new Error("cardId is required");
      // }
  
      setPending(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null,card);
    } catch (error) {
      requestStatus(false, error, null, null);
    }
  };

  const handleGetMyCards = async () => {
    try {
      setPending(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards, null);
    } catch (error) {
      requestStatus(false, error, null, null);
    }
  };

  const handleCreateCard = async (cardFromClient = {}) => {
    try {
      setPending(true);
      const card = await createCard(cardFromClient);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null, null);
    }
  };

  const handleUpdateCard = async (cardFromClient = {}) => {
    try {
      setPending(true);
      const card = await editCard(cardFromClient);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null, null);
    }
  };

  const handleDeleteCard
 = async (cardId = "") => {
    try {
      setPending(true);
      const card = await deleteCard(cardId);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null, null);
    }
  };

  const handleLikeCard
 = async (cardId = "") => {
    try {
      setPending(true);
      const card = await changeLikeStatus(cardId);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null, null);
    }
  };


  return {
    card,
    cards,
    pending,
    error,
    handleGetCards,
    handleGetCard,
    handleGetMyCards,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
    handleLikeCard
  };
};

export default useCards;
