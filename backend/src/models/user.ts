import { db, loadQuery } from "../database.ts";
import { bcrypt } from "../../deps.ts";

type UserLookupResult = [number, string, string?];
export class User {
    id: number
    username: string

    constructor(ulr: UserLookupResult) {
        this.id = ulr[0];
        this.username = ulr[1]
    }

    static getAllUsers() {
        const users = db.query<UserLookupResult>(loadQuery("getUsers")).map((row) => {
            return new User(row)
        });
    
        return users
    }

    static lookupUser(username: string, password: string) {
        const data = db.query<UserLookupResult>("select id, username, password from users WHERE username = :username", {username});
        if (data.length == 1) {
            const d = data.pop() as [number, string, string];
            console.log("data", d);

            if (bcrypt.compareSync(password, d[2])) {
                return new User(d)
            }
        } else {
            throw new Error("User not found")
        }
    }

    static lookupId(id: number) {
        const data = db.query("select id, username from users where id = :id", {id});
        if (data) {
            const d = data.pop() as UserLookupResult;
            return new User(d);
        } else {
            throw new Error("User not found");
        }
    }

    static registerUser(username: string, password: string) {
        const pw = bcrypt.hashSync(password);
        db.queryEntries('INSERT INTO users("username", "password") VALUES(?, ?)', [username, pw])
    
        return db.lastInsertRowId;
    }
}