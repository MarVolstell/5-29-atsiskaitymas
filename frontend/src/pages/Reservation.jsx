import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import '../styles/user/user.scss';
import { createReservation } from '../services/reservationServices';

function Reservation() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [bookName, setBookName] = useState('');
    const [reservedUntil, setReservedUntil] = useState('');
    const [error, setError] = useState(null);

  useEffect(() => {
    document.title = 'Registracija';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Minimali klientinė validacija
    if (!userName.trim() || !bookName.trim() || !reservedUntil.trim()) {
      setError('Prašome užpildyti visus laukus.');
      return;
    }

    const userData = { userName, bookName, reservedUntil };
      console.log(userData)
    try {
      await createReservation(userData);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div classuserName="form-container">
      <h2>Registracija</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="useruserName">Vartotojo vardas</label>
        <input
          type="text"
          id="useruserName"
          userName="useruserName"
          classuserName="input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label htmlFor="bookName">Slaptažodis</label>
        <input
          type="bookName"
          id="bookName"
          userName="bookName"
          classuserName="input"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          required
        />
          <label htmlFor="bookName">Pakartok Slaptažodį</label>
          <input
              type="bookName"
              id="reservedUntil"
              userName="reservedUntil"
              classuserName="input"
              value={reservedUntil}
              onChange={(e) => setReservedUntil(e.target.value)}
              required
          />
        <button type="submit" classuserName='btn-submit'>
          Rezervuoti
        </button>
        {error && <p classuserName="error">{error}</p>}
      </form>
    </div>
  );
}

export default Reservation;