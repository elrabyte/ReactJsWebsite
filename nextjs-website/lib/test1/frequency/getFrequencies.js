import { executeQuery } from "../../db";

export default async function getFrequencies () {
  try {    
    const data = await executeQuery({
      query: "call test1.getFrequencies();",
    });
    console.log("getFrequencies() call: ");
    console.log(data[1]);
    return data[0];
  } catch (error) {
    console.log(error);
  }
};
