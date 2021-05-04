const Sequelize=require('sequelize');  //sequelize가져오기 

module.exports=class User extends Sequelize.Model{  //class 던져주기 
    static init(sequelize){
        //User라는 class에서 정적으로 사용하는 , 쉽게 말하면constructor 
        //처음 생성할 때 요기가 실행된다~ 
        //User라는class가 객체 생성없이 바로 사용 가능하다~ 라는 뜻 / 모르겠다. 
        return super.init({
            name:{ //name varchar(20) NOT NULL UNIQUE
                type:Sequelize.STRING(20), //부모로부터  받아 Sequelize.STRING 이라고 적기 
                                            //== varchar(20) 
                allowNull:false,  // == not null 무적권 이름은 null값이 있으면 안된다. 
                unique:true,    // unique 사용하겠다 ~ 
            },
            age:{ // age라는 field를 만들거고  sql 구문 = age INT UNSIGNED NOT NULL 
                type:Sequelize.INTEGER.UNSIGNED, // 숫자만 사용할건데 양수만 사용할거야 + 값만 
                allowNull:false, // NOT NULL 
            },
            married:{  // married TINYINT(1) NOT NULL 
                type:Sequelize.BOOLEAN, // tinyint 한자리수 정수 숫자 받는 뜻
                allowNull:false, //not null
            },
            comment:{ /// comment TEXT NOT NULL 
                type:Sequelize.TEXT,
                allowNull:true,
            },
            created_at:{ // created_at DATETIME NOT NULL default NOW()
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            },
        },{
            sequelize,// 사용할 때 인자값 내용 넣는거 // 결국 config의 접속 정보를 받기위함 
            timestamps:false,
            underscored:false,
            modelName:'User', // express에서 JS 사용하기위한 이름 설정
            tableName:'users', // 실제 table 이름 요걸로 사용하겠다. 
            paranoid:false,
            charset:'utf8',  //
            collate:'utf8_general_ci', //or utf8mb4쓰기 
        });
    }
    static associate(db){} // 아직은 사용안함 
};