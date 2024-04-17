import logo from './logo.svg';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import { css, StyleSheet } from "aphrodite";
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";


const styles = StyleSheet.create({
	body: {
		display: flex,
		textAlign: 'center'
	},
	footer: {
		display: flex,
		bottom: 0,
		width: 100%
	}
})

class App extends React.Component() {
	constructor(props) {
		super(props);
		this.handlePress = this.handlePress.bind(this);
		this.state = {
			displayDrawer: false,
		};
		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
	}
	handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}
	handleHideDrawer() {
		this.setState({ displayDrawer: false });
	}
	componentDidMount() {
		document.addEventListener('keydown', this.handlePress);
	}
	componentWillUnmount() {
                document.removeEventListener('keydown', this.handlePress);
        }
	handlePress(event) {
		if (event.ctrlkey && event.key === 'h') {
			event.preventDefault();
			alert('Logging you out');
			this.props.logOut();
		}
	}
	render() {
		return (
			<>
			<Notifications displayDrawer={displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} />
			<div className="App">
			<Header />
			</div>
			<div className={css(styles.body)}>{!isLoggedIn ? 
				<BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom> :
				<BodySectionWithMarginBottom title="Course list"><CourseList /></BodySectionWithMarginBottom>}
			<BodySection title="News from the School">
			<p>No news</p>
			</BodySection>
			</div>
			<div className={css(styles.footer)}>
			<Footer />
			</div>
			</>
		);
	}
}

const listCourses = [
{
		id: 1,
		name: 'ES6',
		credit: '60'
	},
	{
		id: 2,
		name: 'Webpack',
		credit: '20'
	},
	{
		id: 3,
		name: 'React',
		credit: '40'
	}
]

const listNotifications = [
	{
		id: 1,
		type: "default",
		value: "New course available"
	},
	{
		id: 2,
		type: "urgent",
		value: "New resume available"
	},
	{
		id: 3,
		html: {
			__html: getLatestNotification()
		},
		type: "urgent",
	}
]

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => undefined
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};

export default App;
