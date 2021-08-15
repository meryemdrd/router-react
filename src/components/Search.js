import React from "react";
import {Navbar, Container, Nav, FormControl, Button} from 'react-bootstrap'
import {Rating} from "@material-ui/lab"


function Search  ({ setSearchName, setSearchRating, searchRating }) {
  return (
    <>
  
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Description">Description&trailer</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={(e)=>setSearchName(e.target.value)}
      />
    <Rating
          name="read_only"
          value={searchRating}
          onChange={(event, newValue) => {
            setSearchRating(newValue);
          }}
        />
      <Button variant="outline-success">Search</Button>
    
    </Container>
  </Navbar>
  
 </>
  );
};

export default Search;