import { executeQuery } from "../../../../lib/db";

const getFrequencies = async (req, res) => {
    try {
        const data = await executeQuery({query:'SELECT * FROM test1.frequency;'});
        
        return await JSON.parse(JSON.stringify(data));        
        // return res.json(data);
    } catch (error) {
        console.log(error);
    }  
};

export default getFrequencies;