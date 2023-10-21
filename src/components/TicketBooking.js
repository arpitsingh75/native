
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ticketBookingStyles from './styles/ticketBookingStyles';

const TicketBookingPage = () => {
  const [ticketCount, setTicketCount] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleTicketCountChange = (event) => {
    setTicketCount(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { ticketCount, name, email });
    // You can implement the logic to book tickets here
  };

  return (
      <View style={ticketBookingStyles.container}>
        <Text style={ticketBookingStyles.titleText}>Book Tickets</Text>
        <TextInput
          style={ticketBookingStyles.input}
          placeholder="Number of Tickets"
          value={ticketCount}
          onChangeText={handleTicketCountChange}
        />
        <TextInput
          style={ticketBookingStyles.input}
          placeholder="Name"
          value={name}
          onChangeText={handleNameChange}
        />
        <TextInput
          style={ticketBookingStyles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={ticketBookingStyles.button}>Book Now</Text>
        </TouchableOpacity>
      </View>
  );
};

export default TicketBookingPage;
