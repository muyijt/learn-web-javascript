function fun1(a, b) {
    console.log("你好"+a+""+b);
    return a + b;
}

var fun2 = function(a, b) {
    console.log("你好"+a+""+b);
    return a + b;
};

var fun1Result = fun1("张三", "李四");
var fun2Result = fun2("王五", "赵六");

console.log(fun1Result);
console.log(fun2Result);




function fun3(a, b, sum) {
    return sum(a, b);
}
var fun3Result = fun3(1, 2, (a, b)=>{
    return a + b;
});
console.log(fun3Result);


