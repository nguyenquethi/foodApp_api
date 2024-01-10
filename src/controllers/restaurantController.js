import sequelize from "../models/connect.js";
import initModels from './../models/init-models.js';

const conn = initModels(sequelize);
const getLike = async (req, res) => {
    try {
        let data = await conn.restaurant.findAll({
            include: ["like_res"]
        });
        res.send(data);
    }catch(err) {
        console.log(err);
    }
};

const getRate = async (req, res) => {
    try {
        let data = await conn.restaurant.findAll({
            include: ["rate_res"]
        })
    }catch(err) {
        console.log(err);
    }
}

const createRate = async (req, res) => {
    try {
        let {user_id, res_id, amount, date_rate} = req.body;
        let newData = {
            user_id,
            res_id,
            amount,
            date_rate
        }
        await conn.restaurant.create(newData);
        res.send("create sucessfully");
    }catch(err) {
        console.log(err)
    }
}

export {getLike, getRate, createRate};
