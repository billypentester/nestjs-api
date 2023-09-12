import { DataSource, DataSourceOptions } from 'typeorm'
import { User } from 'src/user/entities/user.entity'

export const dataSourceOptions : DataSourceOptions = {
    type: 'mysql',
    host: 'bt4ptuz2crsjgks0ql04-mysql.services.clever-cloud.com',
    port: 3306,
    username: 'uysaxbwk6ot3geph',
    password: 'FNxeh6zqVJMKZzRRC5g5',
    database: 'bt4ptuz2crsjgks0ql04',
    synchronize: true,
    entities: [User]
}

export const dataSource = new DataSource(dataSourceOptions)


