import { DB } from "../deps.ts";
import { User } from "./models/user.ts";

export const db = new DB("test.db");

export function lookupUser(username: string, password: string) {
    return User.lookupUser(username, password);
}

export function registerUser(username: string, password: string) {
    return User.registerUser(username, password);
}

export async function setupDatabase() {
    const query_raw = await Deno.readTextFile("./src/sql/init.sql");
    db.execute(query_raw);
}

export function loadQuery(queryname: string) {
    const data = Deno.readTextFileSync("./src/sql/" + queryname + ".sql");
    return data;
}