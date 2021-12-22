import mysql from 'serverless-mysql'


export const db = mysql({
  config: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1324",
  }
});

export async function executeQuery({query, values = []}) {
  try {    
    const results = await db.query(query, values);    
    await db.end();
    return results;
  } catch (error) {
    console.log(error);
    return { error };    
  }
}