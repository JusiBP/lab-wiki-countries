import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

function CountryDetails({countries}) {

    const mystyle2 = {
        width: "30%",
    }

    const {countryId} = useParams()
    const countrySelected = countries.find(country => country.alpha3Code === countryId)
    
            return (
            <div className="col-7">
                <h1>{countrySelected.name.common}</h1>
                <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={mystyle2}>Capital</td>
                    <td>{countrySelected.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {countrySelected.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        {countrySelected.borders.map((border)=>{
                            return(
                                <li key={border}><Link to={"/countriesList/"+border}>{border}</Link></li>
                            )  
                        })}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            )
       
            
        
    
}

export default CountryDetails;





