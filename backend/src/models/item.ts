import { db, loadQuery } from "../database.ts";

type LookupResultRow = [number, string, string];

export class Item {
    id: number
    uuid: string
    name: string

    constructor(l: LookupResultRow) {
        this.id = l[0],
        this.uuid = l[1],
        this.name = l[2]
    }

    static getAllItems() {
        const data = db.query<LookupResultRow>(loadQuery("getItems")).map(row => {
            return new Item(row);
        });
    
        const count = db.query<[number]>("select count(*) from items");

        return {
            data,
            count: count.pop()?.[0]
        }
    }

    static lookupItemById(id: number) {
        return db.query<[number, string, string]>(loadQuery("getItemById"), { id }).map(row => {
            return new Item(row);
        }).pop();
    }

    static lookupItemByUuid(uuid: string) {
        return db.query<[number, string, string]>(loadQuery("getItemByUuid"), { uuid }).map(row => {
            return new Item(row);
        }).pop();
    }
}