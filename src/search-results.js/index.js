import { useParams } from "react-router-dom"
import SearchResultsRow from "./search-results-row";

const SearchResults = ({ allHouses }) => {
    // value in the URL path from house-filter.js is pulled and used as the parmameter 
    const { country } = useParams();
    // 
    const filteredHouses = allHouses.filter((h) => h.country === country)

    return (
        <div className="mt-2">
            <h4>Results for { country }:</h4>
            <table className="table table-hover">
                <tbody>
                    {filteredHouses.map((h) => (
                        // new arrays were created using their countries as the separation point in the .filter
                        // this .map takes those lists and returns another array of displaying all the houses in the selected country
                        <SearchResultsRow key={h.id} house={h} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchResults;