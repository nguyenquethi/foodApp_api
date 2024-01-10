import sequelize from "../models/connect";
import initModels from "../models/init-models";
import users from "../models/users";

const conn = initModels(sequelize);

const addOrder = async (req, res) => {
    try {
        let {user_id, food_id, amount, code, arr_sub_id} = req.body;
        let newData = {
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id
        }
        await conn.users.create(newData);
        res.send("create successfully");
    }catch(err) {
        console.log(err);
    }
};

export {addOrder};