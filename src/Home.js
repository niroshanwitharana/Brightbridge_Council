import {zephyrs, colors} from './utils';

const Home = () => {  
    
    return ( 
        <div className="home">
           {zephyrs
           .sort(({ type: Standard }, { type: Enhanced }) => Enhanced.localeCompare(Standard))
           .map((zephyr)=>(
            <div className="zephyr" key={zephyr.id}>
                <article>
                <h2>{zephyr.name}</h2>
                <p>Type : {zephyr.type}</p>
                <p>Battery Percentage : {zephyr.batteryPercentage}</p>
                <p>NO₂ : {zephyr.NO2}</p>
                <p>PM₂.₅: {zephyr.PM25}</p>
                </article>
            </div>

           )

           )}
        </div>
     );
}
 
export default Home;