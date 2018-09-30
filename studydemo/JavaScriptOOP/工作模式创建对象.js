function CreateObject(name,age){

    //调用系统构造函数创建对象
    var obj=new Object();

    //添加属性
    obj.name=name;
    obj.age=age;

    //添加方法
    obj.sayHi=function(){
        console.log('ohiyou,我叫：'+this.name+'我今年：'+this.age);
    };

    return obj;
}

// 创建一个人的对象
var person1=CreateObject('小方',20);
person1.sayHi();

// 创建另一个人的对象
var  person2=CreateObject('小红',30);
person2.sayHi();