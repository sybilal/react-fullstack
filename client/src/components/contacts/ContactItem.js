import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  const badgeType = type === 'professional' ? 'success' : 'primary';

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        <span style={{ float: 'right' }} className={'badge badge-' + badgeType}>
          {type[0].toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p className="btn btn-dark btn-sm">Edit</p>
      <p className="btn btn-danger btn-sm">Delete</p>
    </div>
  );
};

ContactItem.PropTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
