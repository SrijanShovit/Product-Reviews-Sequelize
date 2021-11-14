const dbConfig = require('../config/dbConfig.js')

const {Sequelize,DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases:false,

        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
) 

sequelize.authenticate()
.then(()=> {
    console.log('Connected...')
})
.catch(err => {
    console.log('Error : ' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// db.tablename
//tablename should here be plural
db.products = require('./productModel.js')(sequelize,DataTypes)
db.reviews = require('./reviewModel.js')(sequelize,DataTypes)

//force:true will rewrite data everytime server is run and old data is lost
db.sequelize.sync({force:false})
.then(()=>{
    console.log('Resync done')
})

module.exports = db






// Sequelize is a Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication, and more.

// ORM (Object-Relational Mapping) is a programming technique that links databases to the concepts of object-oriented programming languages, creating a “virtual object database”. 
