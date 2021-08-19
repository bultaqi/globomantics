
import { useHistory } from "react-router-dom";
import "./SearchResultsRow.css"

const SearchResultsRow = ({ house }) => {
    const history = useHistory();
    const setActive = () => {
        history.push(`/house/${house.id}`);
    };

    console.log(house);
    return (
        <tr onClick={setActive}>
            <td>{house.address}</td>
            <td>{house.price}</td>
            <td>{house.likes}</td>
        </tr>
    );
};

export default SearchResultsRow;