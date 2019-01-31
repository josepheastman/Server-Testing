const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  describe("POST /greet endpoint", () => {
    it("should greet the character", async () => {
      const body = { firstName: "Shigeo", lastName: "Kageyama" };

      let response = await request(server)
        .post("/greet")
        .send(body);
      expect(response.body).toEqual({ hello: "Shigeo Kageyama" });
      expect(response.status).toBe(201);

      response = await request(server)
        .post("/greet")
        .send({ firstName: "Teruki", lastName: "Hanazawa" });
      expect(response.body).toEqual({ hello: "Teruki Hanazawa" });
      expect(response.status).toBe(201);
    });
  });

  describe("DELETE /characters/:id endpoint", () => {
    it("should remove the character", async () => {
      let response = await request(server).delete("/characters/:1");
      expect(response.status).toBe(201);
    });
  });
});
