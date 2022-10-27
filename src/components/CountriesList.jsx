import {Link} from 'react-router-dom';

function CountriesList({countries}) {
    const myStyle = {
        maxHeight: "90vh",
        overflow: "scroll"
    }

    return(
        <div className="col-5" style={myStyle}>
        {countries.map((country)=>{
            return (
                <div className="list-group">
                    <Link className="list-group-item list-group-item-action" to={"/countriesList/"+country.alpha3Code}> {country.name.common} </Link>
                </div>
            )
        })}
            
        </div>
    );
}

export default CountriesList;