import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mysql_food", "root", "1234", {
    host: "localhost",
    port: 3307,
    dialect: "mysql"
});



// dùng để test connect to db is good or not
// try{
//     await sequelize.authenticate();
//     console.log("connect successful");
// }catch(err){
//     console.log("unsuccessful connect");
// }

export default sequelize;
