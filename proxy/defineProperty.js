var a = {};//被代理或被劫持

// Object.defineProperty的作用，让大家精细化地操作对象的属性访问
// Object.defineProperty有三个参数：①目标对象、②需要定义的属性或方法的名字、
                                // ③目标属性所拥有的特性descriptor
// var a = {b:123};
// Object.defineProperty(a,"b",{
//     value:123,
//     writable:true,
//     configurable:false
// });
// console.log(a.b);
// console.log(a.b = 234 , a.b);

// Object.defineProperty(a,"b",{
//     value:3345,
//     enumerable:false
// });
// for(key in a){
//     console.log(key);
// }
// console.log(Object.keys(a));

Object.defineProperty(a,"b",{
    set:function(newValue){
        console.log('你要赋值给我，我的新值是 ： ' + newValue);
    },
    get:function(){
        console.log('你取我的值');
        return 1;
    }
});
console.log(a.b);
console.log(a.b = 2);
