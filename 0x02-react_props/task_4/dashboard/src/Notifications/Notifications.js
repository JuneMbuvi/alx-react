import React from 'react';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';
import './Notifications.css';
import NotificationItem from './NotificationItem';

export default function Notifications(props) {
	return (
		<div className="Notifications">
		<button style={{
			color: 'red',
			fontweight: 'bold',
			cursor: 'pointer',
			position: 'absolute',
			top: '3px',
			right: '3px',
		}}
		aria-label="Close"
		onClick={(e) => {
			console.log('Close button has been clicked');
		}}
		<img src={closeIcon} alt="closeicon" />
		</button>
		 <p>Here is the list of notifications</p>
		<ul>
		<NotificationItem type="default" value="New course available" />
		<NotificationItem type="urgent" value="New resume available" />
		<NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
		</ul>
		</div>
	);
};
Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};
