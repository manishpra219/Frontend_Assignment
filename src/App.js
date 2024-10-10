import React, { useState, useEffect } from 'react';
import KanbanBoard from './Components/KanbanBoard/KanbanBoard';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'priority');

  // Fetch data from API
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => setTickets(data.tickets))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Save view state in localStorage
  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  return (
    <div className="App">
      <KanbanBoard tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
