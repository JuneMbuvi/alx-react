import React from 'react';
import { css, StyleSheet } from "aphrodite";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
	urgent: {
		color: 'red',
	},
	default: {
		color: 'blue',
	},
	notificationItemSize: {
		'@media {max-width: 900px}': {
			borderBottom: '1px solid black',
			fontSize: '20px',
			padding: '10px 8px',
		}
	}
})

class NotificationItem extends React.PureComponent {
	render() {
		const { id, type, html, value, markAsRead } = this.props;
		const handleClick = () => {
			markAsRead(id);
		};
		if (value) {
			return(<li data-notification-type={type} onClick={handleClick} className={css(this.props.type === 'urgent' ? styles.urgent : styles.default,  styles.notificationItemSize)}>{value}</li>)
		} else if (html && html.__html) {
			return(<li data-notification-type={type} onClick={handleClick} dangerouslySetInnerHTML={html} className={css(this.props.type === 'urgent' ? styles.urgent : styles.default,  styles.notificationItemSize)}></li>)
		} else {	
		return (<li data-notification-type={type} onClick={handleClick} className={css(this.props.type === 'urgent' ? styles.urgent : styles.default, styles.notificationItemSize)}></li>)
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
