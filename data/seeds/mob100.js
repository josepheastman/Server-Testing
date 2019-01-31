exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("characters")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("characters").insert([
        { firstName: "Shigeo", lastName: "Kageyama" },
        { firstName: "Teruki", lastName: "Hanazawa" },
        { firstName: "Musahi", lastName: "Goda" },
        { firstName: "Arataka", lastName: "Reigen" },
        { firstName: "Tome", lastName: "Kurata" }
      ]);
    });
};
