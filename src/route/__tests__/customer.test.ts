import server from "../..";
import request from "supertest";

// group test using describe
describe("POST /register", () => {
    it("returns status code 201 if first name is passed", async () => {
        const res = await request(server._application)
            .post("/api/customer/register")
            .send({
                name: "khalid",
                email: "test@example.com",
                birthday: "1997-04-25",
            });

        // toEqual recursively checks every field of an object or array.
        expect(res.statusCode).toEqual(200);
    });

    it("returns bad request if firstname is missing", async () => {
        const res = await request(server._application)
            .post("/api/customer/register")
            .send();
        expect(res.statusCode).toEqual(400);
    });
});
