import { type SQLiteDatabase } from "expo-sqlite";
import { Cotisation } from "@/types/Cotisation"

export async function createTableCotisation(
  db: SQLiteDatabase,
  tablename: string
) {
  return await db.runAsync(`
    CREATE TABLE IF NOT EXISTS ${tablename} (
      _id INTEGER PRIMARY KEY AUTOINCREMENT,
      uid TEXT,
      montant VARCHAR,
      recepteur VARCHAR,
      date VARCHAR,
      description TEXT
    );
  `);
}

export async function dropTable(db: SQLiteDatabase, tablename: string){
  const statement = `DROP TABLE ${tablename}`
  return await db.runAsync(statement)
}

export async function getAllCotisation(
  db: SQLiteDatabase,
  tablename: string,
): Promise<Cotisation[]> {
  const statement = `SELECT * FROM ${tablename}`
  return await db.getAllAsync<Cotisation>(statement)
}

export async function getCotisationByUID(
  db: SQLiteDatabase,
  tablename: string,
  uid: string
): Promise<Cotisation | null>{
  const statement = `SELECT * FROM ${tablename} WHERE uid=(?)`
  return await db.getFirstAsync(statement, uid)
}

export async function addCotisation(
  db: SQLiteDatabase,
  tablename: string,
  {uid, montant, recepteur, date, description}: Cotisation
) {
  const statement = `
    INSERT INTO ${tablename} 
    (uid, montant, recepteur, date, description)
    VALUES
    (?, ?, ?, ?, ?)
    `
    return await db.runAsync(
      statement,
      uid,
      montant,
      recepteur,
      date,
      description
    )
}

export async function deleteCotisationByUUID(
  db: SQLiteDatabase,
  tablename: string,
  uid: string
) {
  const statement = `DELETE FROM ${tablename} WHERE uid=(?)`
  return await db.runAsync(statement, uid)
}
