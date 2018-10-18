import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const typeOrmConfig: PostgresConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "pharmacy",
    synchronize: true,
    logging: true,
    //entities: ["src/models/entitys/**/*.ts"]
    entities: ["dist/models/entitys/**/*.js"]
};

export { typeOrmConfig };