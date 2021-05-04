const {User} = require('../../models');

//비동기니깐 async await 쓰기 
let main = async (req,res)=>{
    let user = await User.findAll({})
    console.log(user)
    res.render('index.html');
}

exports.main=main; 
//   보낼 명 , 보낼 함수 