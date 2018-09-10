import './style.css'

const Container = (props) => <div className={`blocks-container ${props.className}`}>{props.content}</div>

export default Container