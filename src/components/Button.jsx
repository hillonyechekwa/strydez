import PropTypes from 'prop-types'


const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}


export default Button


Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}