import {Link} from 'react-router-dom';

function CountriesList({countries}) {
    const mystyle = {
        maxHeight: "90vh",
        overflow: "scroll"
    }
    const styleimg = {
        width: "7vw",
        margin: "auto"
    }

    const stylebox = {
        padding: "10px"
    }

    return(
        <div className="col-5" style={mystyle}>
        {countries.map((country)=>{
            return (
                <div style={stylebox} className="list-group" key={country.alpha3Code}>
                <Link className="list-group-item list-group-item-action" to={"/countriesList/"+country.alpha3Code}>
                    <img style={styleimg} src={"https://flagpedia.net/data/flags/icon/72x54/"+country.alpha2Code.toLowerCase()+".png"} alt={country.alpha3Code}/>
                </Link>
                <Link className="list-group-item list-group-item-action" to={"/countriesList/"+country.alpha3Code}> {country.name.common} </Link>
                </div>
            )
        })}
            
        </div>
    );
}

export default CountriesList;