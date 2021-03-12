import React, {  useEffect, useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
const CountryDetails = () => {
    const { nameKey } = useParams();
    const [Country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${nameKey}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [nameKey])
    // console.log(Country)
    const { flag, capital, alpha3Code, area, region } = Country;
    return (
        <div>
            <div className=" mt-3 d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={flag} />
                    <Card.Body>
                        <Card.Title>{nameKey}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Capital : {capital}</ListGroupItem>
                        <ListGroupItem>Short Name : {alpha3Code}</ListGroupItem>
                        <ListGroupItem>Area : {area}</ListGroupItem>
                        <ListGroupItem>Region : {region} </ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
            <Link  to="/home" >
                <Button className="mt-3">Back </Button>
            </Link>
        </div>
    );
};

export default CountryDetails;