import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("auth test", async () => {
    const data = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({
            username: "rillo",
            password: "aaaa"
        })
    });

    const json = await data.json();

    assertEquals(json.username, "rillo");
})