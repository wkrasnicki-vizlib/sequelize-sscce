import { DataTypes, Model } from "sequelize";
import { createSequelize6Instance } from "../setup/create-sequelize-instance";
import { expect } from "chai";
import sinon from "sinon";

// if your issue is dialect specific, remove the dialects you don't need to test on.
export const testingOnDialects = new Set(["postgres"]);

// You can delete this file if you don't want your SSCCE to be tested against Sequelize 6

// Your SSCCE goes inside this function.
export async function run() {
  // This function should be used instead of `new Sequelize()`.
  // It applies the config for your SSCCE to work on CI.
  const sequelizeObject = createSequelize6Instance({
    database: "sequelize test",
    logQueryParameters: true,
    benchmark: true,
    define: {
      // For less clutter in the SSCCE
      timestamps: false,
    },
  });

  // ? I modified this method to accept connection strings
  const sequelizeConnString = createSequelize6Instance(
    "postgres://sequelize_test:sequelize_test@localhost:5432/sequelize test",
  );

  // You can use sinon and chai assertions directly in your SSCCE.
  expect(sequelizeObject.authenticate()).to.eventually.fulfilled;
  expect(sequelizeConnString.authenticate()).to.eventually.fulfilled;
}
