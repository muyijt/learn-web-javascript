function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function() {
    alert(this.name)
}
var per = new Person("孙悟空", 18);
per.sayName();






function People(name, age) {
    this.name = name;
    this.age = age;
}
/**
 * 重写toString方法
 */
People.prototype.toString = function() {
    return "People[name=" + this.name + ", age=" + this.age + "]";
};
var people = new People("张三", 33);
console.log(people.toString());