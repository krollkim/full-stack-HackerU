import { Container } from '@mui/system';
import React, {useEffect} from 'react'
import PageHeader from '../components/PageHeader';
import CardsFeedback from '../cards/components/CardsFeedback';
import useCards from '../cards/hooks/useCards';


const CardsPage = () => {

const {
  pending, 
  error, 
  cards, 
  card, 
  handleGetCards,
  handleGetCard,
  handleGetMyCards,
  handleCreateCard,
  handleUpdateCard,
  handleDeleteCard,
  handleLikeCard
} = useCards();

useEffect(()=> {
    handleGetCards();
    handleGetCard();
    handleGetMyCards();
    handleCreateCard();
    handleUpdateCard();
    handleDeleteCard();
    handleLikeCard();
}, [
  handleGetCards,
  handleGetCard,
  handleGetMyCards,
  handleCreateCard,
  handleUpdateCard,
  handleDeleteCard,
  handleLikeCard
]);

const onDeleteCard = () => {};

  return (
    <Container>
        <PageHeader title="Cards" subtitle="On this page you can find all business cards from all categories"/>

        <CardsFeedback
        pending={pending}
        error={error}
        cards={cards}
        card={card}
        onDelete={onDeleteCard}
        />
    </Container>
  )
}

export default CardsPage