import React from 'react';

const NotificationItem = ({ type, html, value }) => {
	if (value) return(<li data-notification-type={type}>{value}</li>)
	if (html) return(<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>)
	return (<li data-notification-type={type}></li>)
}

export default NotificationItem
