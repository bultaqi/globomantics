import { useState } from "react";
import "./House.css";
import emailIcon from "./Email.png";
import Inquiry from "./Inquiry";


// the House component takes the featured house passed from FeaturedHouse and passes it as a prop here
// and this comp takes all the attributes of the passed prop and displays them here
const House = ({ house }) => {
    // introducing state that is intialized as a false boolean
    const [inquiryShown, setInquiryShown] = useState(false);
    const inquiryClick = () => {
        setInquiryShown(!inquiryShown);
    }

    return (
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12">{house.country}</h5>
            </div>
            <div className="row">
                <h3 className="col-md-12">{house.address}</h3>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={`/images/${house.photo}.jpeg`} alt="House" />
                </div>
                <div className="col-md-5">
                    <p className="price">${house.price}</p>
                    <p>{house.description}</p>
                    <img 
                        src={emailIcon}
                        height="50"
                        alt="email icon"
                        // the onClick event toggles the boolean from false to true
                        // only if its true, will the form stored in the Inquiry component fire and display
                        onClick={inquiryClick}
                    />
                    {inquiryShown && <Inquiry house={house} />}
                </div>
            </div>
        </div>
    )
};

export default House;