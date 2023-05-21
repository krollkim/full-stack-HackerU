import { Container } from '@mui/system';
import React from 'react'
import PageHeader from '../components/PageHeader';
import Cards from '../cards/components/Cards';

const CardsPage = () => {
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
            url: "assets/images/horse-glasses.png",
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
        title: "second",
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
        title: "thired",
        subtitle: "subtitle",
        description: "testing 123",
        phone: "050-0000000",
        email: "test@test.com",
        web: "http://www.test.co.il",
        image: {
            url: "assets/images/izenberg.png",
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
];

  return (
    <Container>
        <PageHeader title="Cards" subtitle="On this page you can find all business cards from all categories"/>

        <Cards cards={cards}/>
    </Container>
  )
}

export default CardsPage