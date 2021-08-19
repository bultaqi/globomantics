import { useHistory } from "react-router-dom";

const HouseFilter = ({ allHouses }) => {
    const history = useHistory();
    // store state into a variable
    const countries = allHouses
    // .from returns an array object from any object with a length property or returns an iterable object
    ? Array.from(new Set(allHouses.map((h) => h.country)))
    : [];
    // .unshift adds one or more elements to the beginning of an array, but why does he set it to null here?
    countries.unshift(null);

    // this function extracts which option was selected from the drop down
    const onSearchChange = (e) => {
        const country = e.target.value;
        history.push(`/searchresults/${country}`);
    }

    return ( 
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Look for your dream house by country:
            </div>
            <div className="col-md-4 mb-3">
                <select className="form-select" onChange={onSearchChange}>
                    {countries.map((c) => (
                        // the .map array method iterates over all the elements in an array and creates a new one
                        // value, is the name of the country, which is just each ind. element or index of the array
                        // key, creates the association between the array index and the rendered item(watching4changes)
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
 
export default HouseFilter;