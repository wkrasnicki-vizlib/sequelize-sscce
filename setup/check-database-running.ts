#!/usr/bin/env bash

import { createSequelize6Instance } from "./create-sequelize-instance";

const sequelize = createSequelize6Instance({ database: "sequelize test" });

(async () => {
  await sequelize.authenticate();
  await sequelize.close();
})();
