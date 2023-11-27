"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: "postgres",
    host: "reg-aurora-cluster-jumbo.cluster-cqpeqdephwqv.us-east-1.rds.amazonaws.com",
    port: 5432,
    username: "reg_jumbo_user_stg",
    password: "UbuNL6de7nBBEUqvm5pcjhA",
    database: "reg_aurora_cluster_jumbo",
    entities: ["apps/test-typeorm-migrations-v2/src/**/*.entity{.ts,.js}"],
    migrations: ["src/**/*.entity{.ts,.js}"],
    synchronize: true,
    schema: 'tracking_event_cl'
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map