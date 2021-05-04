'use strict';  //없어도 상관 없다.

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');  //Sequelize
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; //test할 때 development를 test로 바꿔 
const config = require(__dirname + '/../config/config.json')[env]; // env 위에 정의되어 있음. 우리는env 설정안했음. 지금 env = development 값 / config는 요걸 가져옴 
// config = config파일 안 development 의 객체 값이 된다. 
const User=require('./user');  //models/index.js에서 user.js를 사용하기 위해 가져옴 result= class 
//USer의 결과물은 CLASS 

const db = {};  //빈 객체로 선언 

let sequelize;  //sequelize
if (config.use_env_variable) { // config에 use_env_variable이라는 정보가 있으면 ~
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else { //요게 우리가 실행될 것 
  sequelize = new Sequelize(config.database, config.username, config.password, config);//접속정보를 담은 객체
} // new = 함수가 객체로 변한다 / 결과적으로 요 값이 객체로 변하겠구나~ 알 수 있음.  config 어디서 가져왓냐면 위에 8번줄
// development 객체 안의 내용을 내 db 내용과 같도록 정보 바꾸기 

/* 여기는 일단 주석처리!
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
*/



db.User=User;  //db라는 객체에 user라는 property를 만들어서 User를 넣음 / app.js에서 User라는 calss를 가져올 수 있도록 
User.init(sequelize); // User라
//class User에서 바로 init 사용 (static으로 선언했기때문)
//sequelize = 접속 정보를 담은 객체 init의 첫번째 인자값으로 넣음 
//user.js에가서 확인해봐 

db.sequelize = sequelize;   //sequelize, Sequelize 두가지 속성 값을 db에 넣었다. 
db.Sequelize = Sequelize;

// db.associate(db);

module.exports = db; // db라는 변수를 결과적으로 넘기는구나 
//db라는 파일을 불러왔을 때 객체로 받는구나 알 수 있음.
//팁 : 얘는 결국 무엇을 넘기나 아랫줄에 module을 쳌! 그거에 대한 결과값이 무엇인가 무언가를 담아서 보냈는가 를 쳌 

