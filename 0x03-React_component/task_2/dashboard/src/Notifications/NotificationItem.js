import React from 'react';
import PropTypes from "prop-types";

class NotificationItem extends React.Component {
	render() {
		const { id, type, html, value, markAsRead } = this.props;
		const handleClick = () => {
			markAsRead(id);
		};
		if (value) {
			return(<li data-notification-type={type} onClick={handleClick}>{value}</li>)
		} else if (html && html.__html) {
			return(<li data-notification-type={type} onClick={handleClick} dangerouslySetInnerHTML={html}></li>)
		} else {	
		return (<li data-notification-type={type} onClick={handleClick}></li>)
		}
	}
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {},
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
}),
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

export default NotificationItem
