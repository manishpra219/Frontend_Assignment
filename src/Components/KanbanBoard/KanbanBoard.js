import './KanbanBoard.css';
import TicketCard from '../TicketCard/TicketCard';
import Controls from '../Controls/Controls';
import React, { useState } from 'react';

const KanbanBoard = ({ tickets }) => {
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');

  const groupedTickets = (tickets) => {
    if (!tickets || tickets.length === 0) {
      return {};
    }

    // Group tickets based on the current selected grouping
    return tickets.reduce((groups, ticket) => {
      const groupKey = ticket[grouping] || 'undefined'; // Fix undefined group
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(ticket);
      return groups;
    }, {});
  };

  const sortedAndGroupedTickets = groupedTickets(tickets);

  return (
    <div className="kanban-board">
      <Controls setGrouping={setGrouping} setOrdering={setOrdering} />

      <div className="kanban-columns">
        {Object.keys(sortedAndGroupedTickets).map((group) => (
          <div className="kanban-column" key={group}>
            <h3>{group}</h3>
            {sortedAndGroupedTickets[group].map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
