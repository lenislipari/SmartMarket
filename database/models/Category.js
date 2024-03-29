module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        categories_id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false 
        }
    };
    let config = {
        tableName: 'categories',
        timestamps: false
    };
    
    const Category = sequelize.define(alias, cols, config)

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as:"products",
            foreignKey: "categories_id"
        })
    }

    return Category
}