import { executeQuery } from "../../db";

export default async function getMoneyManagements () {
  try {    
    const data = await executeQuery({
      query: "call test1.getMoneyManagements();",
    });
    console.log("getMoneyManagements() call: ");
    console.log(data[1]);
    return data[0];
  } catch (error) {
    console.log(error);
  }
};
