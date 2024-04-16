import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import closeButton from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape";

const styles = StyleSheet.create({
	menuItem: {
		textAlign: 'right',
		marginRight: '30px',
	},
	menuItemSize: {
		'@media {max-width: 900px}': {
			fontSize: '20px',
		}
	},
	ulSize: {
		'@media {max-width: 900px}': {
			padding: '0',
			listStyle: 'none',
		}
	},
	Notifications: {
		padding: '6px 12px';
		border: '4px solid grey';
	},
	notificationsSize: {
		'@media {max-width: 900px}': {
			fonstSize: '20px',
		}
	},
	closeButton: {
		width: '144px',
	},
})


class Notifications extends React.Component {
  constructor (props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this)
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
      )
  }
  
  render () { 
    return (
      <>
        <div className={css(styles.menuItem, styles.menuItemSize)}>Your notifications</div>

        { this.props.displayDrawer ? 
          (<div className={css(styles.Notifications, styles.notificationsSize)}>
            <button
              style={{
                right: 45,
                border: "none",
                position: "absolute",
                background: "transparent",
              }}
              aria-label="close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={closeButton} className={css(styles.closeButton)} alt="close button icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ulSize)}>
              {this.props.listNotifications.length === 0 ? (<NotificationItem value='No new notification for now' type='no-new' />) : <></>}
              {this.props.listNotifications.map((not) => (<NotificationItem key={not.id} type={not.type} value={not.value} html={not.html} markAsRead={() => {this.markAsRead(not.id)}} />))}
            </ul>
          </div>) 
          : <></>
        }
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;
