import Button from "./Button";

function Card() {
    const name = "Devin";
    return (
        <div className="container">
        <h1 className="title">Welcome</h1>
            <div className="body">Hello I'm <span className="highlight">{name}</span>. 
                <br/> I'm a work in progress <span className="highlight"> <br/>full stack developer</span>.
                <br/> This is my first <span className="highlight">React.js</span> page.
                <br/> Using this to test components like this button
            </div>
            <div className="footer">
                <Button />
            </div>
        </div>
    )
}

export default Card;