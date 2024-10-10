import React from 'react';
import './KanbanColumn.css';
import TicketCard from '../TicketCard/TicketCard';

const KanbanColumn = ({ title, tickets }) => {
  return (
    <div className="kanban-column">
      <h3>{title}</h3>
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;
