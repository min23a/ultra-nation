import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CountryBox.css';

const CountryBox = (props) => {
    const country = props.countryDetail;
    const { name,  flag,  alpha3Code, capital} = country ;
    return (
        <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img className="img-height" variant="top" src={flag} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {alpha3Code}
                </Card.Text>
                <Card.Text>
                    {capital}
                </Card.Text>
                <Link className="text_decoration" to={`/details/${name}`}>
                    <Button variant="primary">Details</Button>
                </Link>
                
            </Card.Body>
        </Card>
    );
};

export default CountryBox;