import './TicketCard.css';
import React from 'react';

// Import priority icons
import UrgentIcon from '../../assets/icons_FEtask/SVG - Urgent Priority colour.svg';
import HighIcon from '../../assets/icons_FEtask/Img - High Priority.svg';
import MediumIcon from '../../assets/icons_FEtask/Img - Medium Priority.svg';
import LowIcon from '../../assets/icons_FEtask/Img - Low Priority.svg';
import NoPriorityIcon from '../../assets/icons_FEtask/No-priority.svg';

const renderPriorityIcon = (priority) => {
  switch (priority) {
    case 4:
      return <img src={UrgentIcon} alt="Urgent" className="priority-icon" />;
    case 3:
      return <img src={HighIcon} alt="High" className="priority-icon" />;
    case 2:
      return <img src={MediumIcon} alt="Medium" className="priority-icon" />;
    case 1:
      return <img src={LowIcon} alt="Low" className="priority-icon" />;
    default:
      return <img src={NoPriorityIcon} alt="No priority" className="priority-icon" />;
  }
};

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span>{ticket.id}</span>
        <img
          src={`https://avatars.dicebear.com/api/human/${ticket.userId}.svg`}
          alt="User Avatar"
          className="ticket-avatar"
        />
      </div>
      <h4 className="ticket-title">{ticket.title}</h4>
      <div className="ticket-footer">
        <span>{renderPriorityIcon(ticket.priority)}</span>
        <span className="ticket-tag">{ticket.tag}</span>
      </div>
    </div>
  );
};

export default TicketCard;
