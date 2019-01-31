const request = require("supertest");

const db = require("../data/dbConfig");
const charactersModel = require("./charactersModel.js");

afterEach(async () => {
  await db("characters").truncate();
});

describe("characters model", () => {
  it("should insert provided character", async () => {
    const character = await charactersModel.insert({ firstName: "Rei" });

    const characters = await db("characters");
    expect(characters).toHaveLength(1);
    expect(character.firstName).toEqual("Rei");
  });

  it("should insert provided character", async () => {
    const character = await charactersModel.insert({ firstName: "Rei" });

    let characters = await db("characters");
    expect(characters).toHaveLength(1);
    expect(character.firstName).toEqual("Rei");

    await charactersModel.insert({ firstName: "Mukai" });
    characters = await db("characters");
    expect(characters).toHaveLength(2);
  });

  //   it("should remove provided character", async () => {
  //     const character = await charactersModel.remove({ firstName: "Rei" });

  //     const characters = await db("characters");
  //     expect(characters).toHaveLength(1);
  //     expect(character.firstName).toEqual("Rei");
  //   });
});
