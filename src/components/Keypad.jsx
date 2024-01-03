import Button from "./Button";

const Keypad = ({buttonClick}) => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    return <>
        <div className="row">
            {numbers.map((number) => (
                <Button key={number} value={number} colValue='col-4' handleClick={buttonClick}/>
            ))}
        </div>
        <div className="row">
            <Button key="0" value="0" colValue='offset-4 col-4' handleClick={buttonClick}/>
        </div>
        <div className="row">
            <Button key="+" value="+" colValue='col-4' handleClick={buttonClick}/>
            <Button key="-" value="-" colValue='col-4' handleClick={buttonClick}/>
            <Button key="/" value="/" colValue='col-4' handleClick={buttonClick}/>
            <Button key="*" value="*" colValue='col-4' handleClick={buttonClick}/>
            <Button key="=" value="=" colValue='col-4' handleClick={buttonClick}/>
            <Button key="C" value="C" colValue='col-4' handleClick={buttonClick}/>
        </div>
    </>
}

export default Keypad;