class test{
    constructor(){
        this.name="a"
    }
    
    init(){
        console.log('29')
    }

    static init(){
        this.age='20'
        console.log('30')
    }
}

console.log(test);
console.log(new test);
test.init();

let a = new test();

a.init();


