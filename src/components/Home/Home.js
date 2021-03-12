import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { countryContext } from '../../App';
import CountryBox from '../CountryBox/CountryBox';
import './Home.css';

const Home = () => {
    const Countries = useContext(countryContext);
    return (
        <Container fluid>
            <h1>Total Countries : {Countries[0].length}</h1>
            <Container fluid>
                <Row className="justify-content-center">
                    {
                        Countries[0].map(country => <CountryBox countryDetail={country} key={country.name}></CountryBox>)
                    }    
                </Row>
            </Container>
        </Container>
    );
};

export default Home;