module.exports = {
  async up(db, client) {
    await db.createCollection("exercises");
    await db.createCollection("templates");
    await db.createCollection("workouts");
  },

  async down(db, client) {
    await db.dropCollection("exercises");
    await db.dropCollection("templates");
    await db.dropCollection("workouts");
  }
};
