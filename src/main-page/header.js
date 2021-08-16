import logo from "./GloboLogo.png"

// props can be passed in as "props" and the attribute of that component like "props.subtitle"
// or it can be destructured with object destructuring, with curly brackets in the parameter/argument
const Header = ({subtitle}) => (
    //function components must always return a one parent 
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-md-7 mt-5 subtitle">
            {subtitle}
        </div>
    </header>
);

export default Header;