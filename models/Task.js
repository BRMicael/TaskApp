const {DataTypes} = require("sequelize")

const db = require("../db/conn")

const Task = db.define('Task', {
    title: {
    type: DataTypes.STRING,
    require: true,
    },
    description: {
        type: DataTypes.STRING,
        require: true,
    },
    done: { // não vem pelo form
        type: DataTypes.BOOLEAN,
        require: true,
    },
})

module.exports = Task