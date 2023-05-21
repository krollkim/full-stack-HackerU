import { Container } from '@mui/material';
import React from 'react'
import { Navigate } from "react-router-dom";
import PageHeader from '../../components/PageHeader';
import ROUTES from "../../routes/routesModel";

const LoginPage = () => {
    const user = null;
    // const user = true;

    if(user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container maxWidth="lg">
        <PageHeader
        title="Login Page"
        subtitle="In order to login, fill out the info and click the login button"
        />
    </Container>
  );
};

export default LoginPage