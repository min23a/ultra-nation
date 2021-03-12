import React from 'react';
import { Container,Form,Button,FormControl } from 'react-bootstrap';
import "./Search.css";

const Search = () => {
    return (
        <Container className="mt-2">
            <Form inline>
                <FormControl type="text" placeholder="Search" className="w-75 m-auto radius-none" />
                <Button className="w-25 m-auto radius-none">Search</Button>
            </Form>
        </Container>
    );
};

export default Search;