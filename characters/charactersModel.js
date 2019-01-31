const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(character) {
  const [id] = await db("characters").insert(character);

  return db("characters")
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(character) {
  const [id] = db("characters").del(character);

  return db("characters")
    .where({ id })
    .del();
}

function getAll() {
  return db("characters");
}

function findById(id) {
  return null;
}
