import request from "supertest";

// group test using describe
describe("POST /register", () => {
  it("Create customer should return 200", async () => {
    const res = await request("http://localhost:5000")
      .post("/api/customer/register")
      .send({
        name: "khalid",
        email: "khalid+test@example.com",
        birthday: "1997-04-25",
      });

    // toEqual recursively checks every field of an object or array.
    expect(res.statusCode).toEqual(200);
  });

  it("Create customer should return 400 inside response body and statuscode should be 200 with bad data:", async () => {
    const res = await request("http://localhost:5000")
      .post("/api/customer/register")
      .send();
    expect(res.statusCode).toEqual(200);
    expect(res?.body?.statusCode).toEqual(400);
  });
});
