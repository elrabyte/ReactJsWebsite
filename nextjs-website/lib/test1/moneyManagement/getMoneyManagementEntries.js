import { executeQuery } from "../../db";

export default async function getMoneyManagementEntries (idMoneyManagement) {
  try {    
    const data = await executeQuery({
      query: "call test1.getMoneyManagementEntries(?);",
      values: [idMoneyManagement]
    });
    console.log("getMoneyManagementEntries() call: ");
    console.log(data[1]);
    return data[0];
  } catch (error) {
    console.log(error);
  }
};
