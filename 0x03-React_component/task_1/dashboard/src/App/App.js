import logo from './logo.svg';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";

class App extends React.Component() {
	constructor(props) {
		super(props);
		this.handlePress = this.handlePress.bind(this);
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
			<Notifications />
			<div className="App">
			<Header />
			</div>
			<div className="App-body">{!isLoggedIn ? <Login /> : <CourseList />}
			</div>
			<div className="App-footer>
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
