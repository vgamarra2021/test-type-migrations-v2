import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: "reg-aurora-cluster-jumbo.cluster-cqpeqdephwqv.us-east-1.rds.amazonaws.com",
    port: 5432,
    username: "reg_jumbo_user_stg",
    password: "UbuNL6de7nBBEUqvm5pcjhA",
    database: "reg_aurora_cluster_jumbo",
    entities: ["src/**/*.entity{.ts}"],
    migrations: ["src/**/*.entity{.ts,.js}"],
    synchronize: true,
    schema: 'tracking_event_cl'
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource