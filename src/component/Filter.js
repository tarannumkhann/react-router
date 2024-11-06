
import React,{useSearchParams} from 'react-router-dom'
import NavBar from "./Navbar";
function FilterPage(){
    const [searchParams, setSearchParams]=useSearchParams();
    const age=searchParams.get('age');
    const city=searchParams.get('city');
    return(
<>
<NavBar/>
<h1>Filter Page</h1>
<h3>Age is : {age}</h3>
<h3>City is : {city}</h3>
<input type="text" onChange={(e)=>setSearchParams({text:e.target.value})} />

</>
    );
}
export default FilterPage;