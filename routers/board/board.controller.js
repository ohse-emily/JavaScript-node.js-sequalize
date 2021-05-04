const {User} = require('../../models')
//요걸 가져오면 



let list = async (req,res)=>{
    //select 
    let UserList = await User.findAll({})
    res.render('list.html')
}

let view = (req,res)=>{
    //select
    let UserList = await User.findAll({})
    res.render('view.html')
}

//board/write POST 
let write = (req,res)=>{
    //insert
    let rst = await User.create({
        //....req 요청값에 나왔던 부분을 넣어주면 됨
    })
    res.render('write.html')
}

let modify = (req,res)=>{
    //update
    let rst = await User.update({
        //필드 : '바뀔내용'..
    },{
        where: { //필드:값}                   이런 nunjucks의 결과를 떤져주면됨
    })
    res.render('modify.html')
}

module.exports={
    list:list,
    view:view,
    modify:modify,  //modify 라는 속성값을 modify 라는 method로 
    write:write
}
