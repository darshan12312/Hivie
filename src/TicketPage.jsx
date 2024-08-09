import React, { useState } from 'react';

function App() {
  const [numGuests, setNumGuests] = useState(0);
  const [guests, setGuests] = useState([]);
  const [tickets, setTickets] = useState([]);

  const handleGuestChange = (index, field, value) => {
    const updatedGuests = guests.map((guest, i) =>
      i === index ? { ...guest, [field]: value } : guest
    );
    setGuests(updatedGuests);
  };

  const handleAddGuests = () => {
    const total = guests.reduce((acc, guest) => {
      const age = parseInt(guest.age);
      if (age <= 2) return acc;
      if (age > 2 && age < 18) return acc + 100;
      if (age >= 18 && age < 60) return acc + 500;
      if (age >= 60) return acc + 300;
      return acc;
    }, 0);

    const newTicket = {
      id: tickets.length + 1,
      guests,
      total,
    };

    setTickets([...tickets, newTicket]);
    localStorage.setItem('tickets', JSON.stringify([...tickets, newTicket]));
    setGuests([]);
    setNumGuests(0);
  };

  return (
    <div className="p-6 min-h-screen bg-custom-gradient ">
      <div id='TicketPage' className='backdrop-blur-xl p-5 rounded-md border' >
      <h1 className="text-2xl font-bold mb-4">Ticket Booking System</h1>

      <div className="mb-4">
        <label className="block mb-2">Number of Guests:</label>
        <input
          type="number"
          value={numGuests}
          onChange={(e) => {
            setNumGuests(parseInt(e.target.value, 10));
            setGuests(Array(parseInt(e.target.value, 10)).fill({ name: '', age: '' }));
          }}
          className="border p-2 rounded w-full"
        />
      </div>

      {guests.map((guest, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">Guest {index + 1} Name:</label>
          <input
            type="text"
            value={guest.name}
            onChange={(e) => handleGuestChange(index, 'name', e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />

          <label className="block mb-2">Guest {index + 1} Age:</label>
          <input
            type="number"
            value={guest.age}
            onChange={(e) => handleGuestChange(index, 'age', e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      ))}

      <button
        onClick={handleAddGuests}
        disabled={guests.length === 0 || guests.some(guest => guest.name === '' || guest.age === '')}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Guests
      </button>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Tickets</h2>
        {tickets.map(ticket => (
          <div key={ticket.id} className="border backdrop-blur-3xl p-4 rounded mb-4">
            <h3 className="text-lg font-bold">Ticket ID: {ticket.id}</h3>
            <p>Total Guests: {ticket.guests.length}</p>
            <p>Total Price: INR {ticket.total}</p>
            <details>
              <summary >View Guests</summary>
              {ticket.guests.map((guest, index) => (
                <p key={index}>Guest {index + 1}: {guest.name}, Age: {guest.age}</p>
              ))}
            </details>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
