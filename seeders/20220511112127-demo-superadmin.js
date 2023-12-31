const bcrypt = require("bcrypt");
const { ROLES } = require("../lib/const");
const SALT_ROUND = 10;

("use strict");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("laras123", SALT_ROUND);

    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "afinaprabalarasati",
          email: "afinaprabalarasati@gmail.com",
          password: hashedPassword,
          role: ROLES.SUPERADMIN,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "rooms",
      [
        {
          number: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rooms", null, {});
  },
};
