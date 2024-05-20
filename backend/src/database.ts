import { bcrypt } from "../deps.ts";
import { DB } from "../deps.ts";

export const db = new DB("test.db");

export function lookupUser(username: string, password: string) {
    const data = db.query<[number, string, string]>("select id, username, password from users WHERE username = ?", [username]);
    if (data.length == 1) {
        const d = data.pop() as any;
        console.log("data", d);

        if (bcrypt.compareSync(password, d[2])) {
            return {
                id: d[0],
                username: d[1]
            }
        }
    } else {
        throw new Error("User not found")
    }
}

export function registerUser(username: string, password: string) {
    const pw = bcrypt.hashSync(password);
    db.queryEntries('INSERT INTO users("username", "password") VALUES(?, ?)', [username, pw])

    return db.lastInsertRowId;
}

export async function setupDatabase() {
    const query_raw = await Deno.readTextFile("./src/sql/init.sql");
    db.execute(query_raw);
}

export function loadQuery(queryname: string) {
    const data = Deno.readTextFileSync("./src/sql/" + queryname + ".sql");
    return data;
}