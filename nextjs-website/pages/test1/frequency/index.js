import Overview from "../../../comps/Overview";
import { executeQuery } from "../../../lib/db";
// import getFrequencies from "../api/test1/getFrequencies"

function Frequency ({frequencies}) {
    return (
        <Overview 
            title = "Frequency" 
            subTitle="Overview" 
            items = {frequencies.map(freq => { return { 
                        id: freq.idFrequency, 
                        title: freq.description, 
                        subTitle: freq.expression 
                    }})}  
        />            
    )
}


export async function getStaticProps() {
    
    const res = await executeQuery({query:'SELECT * FROM test1.frequency;'});
    const data = await JSON.parse(JSON.stringify(res));
    return {
        props: {
            frequencies: data,
        },
    }
}

export default Frequency