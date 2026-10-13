/**
 * 冒泡
 */
document.querySelector('.outer').addEventListener('click', (event) => {
    var target = event.currentTarget;
    var targetClassName = target.className;
    console.log(targetClassName+'被触发');
}, false);
document.querySelector('.middle').addEventListener('click', (event) => {
    var target = event.currentTarget;
    var targetClassName = target.className;
    console.log(targetClassName+'被触发');
}, false);
document.querySelector('.inner').addEventListener('click', (event) => {
    var target = event.currentTarget;
    var targetClassName = target.className;
    console.log(targetClassName+'被触发');
    event.stopPropagation();
}, false);

/**
 * 委托
 */
document.querySelector('ul').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {       // e.target 是实际被点的元素
        console.log('你点了：' + event.target.textContent);
    }
}, false);