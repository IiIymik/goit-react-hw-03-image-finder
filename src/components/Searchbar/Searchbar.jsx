import React from 'react';
import {Header, Form, Button, Title, Input} from './Searchbar.styled.js'

function Searchbar({ onSubmit }) {
  const handleSearch = e => {
    e.preventDefault();
    onSubmit(e.target.elements.searchingImages.value)
  };

  return (
  <Header>
  <Form onSubmit={handleSearch}>
    <Button type="submit">
      <Title>Search</Title>
    </Button>

    <Input
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="searchingImages"
    />
  </Form>
</Header>
  )
}

export default Searchbar
