const Button = ({value, colValue, handleClick}) => {
    return <div className={colValue}>
        <button style={{"margin": "3px 0px 6px", "width": "100%"}} type="button" className={`btn btn-outline-secondary`} onClick={() => handleClick(value)}>{value}</button>
    </div>
    
}

export default Button;