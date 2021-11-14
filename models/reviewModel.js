
module.exports = (sequelize,DataTypes) => {

    //here use table in singular form
    const Review =  sequelize.define('review',{
        rating:{
            type: DataTypes.INTEGER,
        },
        description:{
            type: DataTypes.TEXT,
        },
        
    })

    return Review
}