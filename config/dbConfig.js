module.exports = {
    HOST : 'localhost',
    USER : 'root',
    PASSWORD : '',
    DB : 'node_sequelize_api_db',

    dialect : 'mysql',  //which sql to use

    //Sequelize will set up a connection pool on initialization
    pool : { 
        max:5,   //Maximum number of connection in pool
        min:0,    //Minimum number of connection in pool
        acquire : 30000,      //The maximum time, in milliseconds, that pool will try to get connection before throwing error
        idle : 10000         ///The maximum time, in milliseconds, that a connection can be idle before being released
    }
}