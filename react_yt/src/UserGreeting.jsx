import PropTypes from 'prop-types'
const UserGreeting = (props) => {

    const welcome = <h2 className="welcome"> Welcome: {props.username}</h2>
    const notLog = <h1 className="notLog"> Please log in...</h1>
    return (props.isLoggedIn ? welcome : notLog);

}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting