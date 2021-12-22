import { executeQuery } from "../../db";

export default async function getFrequency (id) {
  try {
    const data = await executeQuery({
      query: "call test1.getFrequency(?);",
      values: [id]
    });
    console.log("getFrequency() call: ");
    console.log(data[1]);
    return data[0];
    // return res.json(data);
  } catch (error) {
    console.log(error);
  }
};