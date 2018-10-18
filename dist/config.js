"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeOrmConfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "pharmacy",
    synchronize: true,
    logging: true,
    entities: ["dist/models/entitys/**/*.js"]
};
exports.typeOrmConfig = typeOrmConfig;
//# sourceMappingURL=config.js.map