import { executeQuery } from "../../db";

export default async function getMoneyManagement (id) {
  try {
    const data = await executeQuery({
      query: "call test1.getMoneyManagement(?);",
      values: [id]
    });
    console.log("getMoneyManagement() call: ");
    console.log(data[1]);
    return data[0];
  } catch (error) {
    console.log(error);
  }
};