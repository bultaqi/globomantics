import House from "../house/index"

// featuredHouse is called when the the path "./" is rendered and the useMemo() passes its determind house
// gets passed here as prop an if it is "truthy" House comp is rendered and the featured house is passed to it
const FeaturedHouse = ({ house }) => {
    if (house)
        return ( 
            <div>
                <div className="row featuredHouse">
                    <h3 className="col-md-12 text-center">Featured house</h3>
                </div>
                <House house={house} />
            </div>
        );
    return <div>No featured house at this time!</div>
};
 
export default FeaturedHouse;
