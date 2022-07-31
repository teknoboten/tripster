import React from 'react';
import ReactDOM from 'react-dom';
import NewTripForm from '../components/trips/NewTripForm';

function NewTripPage() {
  return <section>
    <h1>Add New Trip</h1>
    <NewTripForm />
  </section>;
}

export default NewTripPage;