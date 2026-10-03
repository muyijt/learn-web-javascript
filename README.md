# learn-web-javascript
学习javascript

## 入门与环境
> 参见basic/getting-started/
- 书写位置
  - 一般都写外部js文件中，通过script标签引入页面
- 注释
  - 单行注释
  ```
    // 注释内容
  ```
  - 多行注释
  ```
    /**
     * 多行注释
     * 多行注释
     */
  ``` 
- 字面量
  - 不可改变的、直接写出来的值
- 变量
  - 保存字面量的，相当于一个「容器」，值可以随意改变。开发中一般都是通过变量来保存和使用数据
- 标识符
  - 所有可以自主命名的都叫标识符，比如变量名、函数名、属性名等
  - 命名规则
    - 可以含有字母、数字、下划线 _、美元符号 $
    - 不能以数字开头
    - 不能是 ES 中的关键字或保留字（比如 var、function、if 等）
    - 一般采用驼峰命名法——首字母小写，后面每个单词的首字母大写，其余小写

## 数据类型
> 参见basic/data-type/
- 种类
  - String、Number、Boolean、Null、Undefined、Object
- typeof
  - 检查一个变量是什么数据类型
- 字符串
  - 一串文字/文本，需要用引号引起来
  - 使用规则
    - 可以使用双引号 " 或单引号 ' 引起来
    - 引号不能混用、不能嵌套（双引号里不能放双引号，但可以放单引号）
    - 转义字符：用 \ 加特定字母表示特殊内容，比如 \n 换行、\" 表示双引号、\\ 表示斜杠等
- 数值
  - Number 类型的特点：JS 中所有数字不区分整数和小数，统一都是 Number 类型
  - 可以表示的数字范围：
    - 最大值：Number.MAX_VALUE，比它还大的正数会返回 Infinity（无穷大）
    - 最小值（接近 0 的正数）：Number.MIN_VALUE
    - typeof Infinity 的结果也是 "number"
  - NaN（Not a Number）：一个特殊的数字，表示「不是数字的数字」，比如进行不合法运算时会得到 NaN，但 typeof NaN 也是 "number"
  - 科学计数法：可以用 e 表示指数，如 1.23e3
  - 进制表示：十六进制以 0x 开头、八进制以 0 开头、二进制以 0b 开头
  - 浮点数精度问题：JS 的浮点运算不精确，比如 0.1 + 0.2 不等于 0.3，对精度要求高的运算不能用 JS 直接算
  - 各种进制的写法：
    - 十六进制：以 0x 开头，比如 0xb 表示十进制的 11，0xff 表示 255
    - 八进制：以 0 开头，比如 012 表示十进制的 10
    - 二进制：以 0b 开头，比如 0b1000 表示十进制的 8（但不是所有浏览器都支持）
- 布尔值
  - true（表示真/对）和 false（表示假/错）
  - 布尔值的用途：主要用来做逻辑判断，比如一个条件成立就是 true，不成立就是 false，是后面 if 语句、循环等流程控制的基础
  - 注意事项：
    - true 和 false 不是字符串，写的时候不能加引号（"true" 是字符串，true 才是布尔值）
    - 用 typeof 检查布尔值时，返回的结果是 "boolean"
- Null与Undefined
  - Null（空值）类型：
    - Null 类型的值只有一个：null
    - null 专门用来表示一个为空的对象（比如一个对象变量里没有指向任何东西）
    - 注意：用 typeof 检查 null 时，返回的结果是 "object"，而不是 "null"——这是 JS 语言的一个历史遗留"bug"，也是个常考的知识点
  - Undefined（未定义）类型：
    - Undefined 类型的值也只有一个：undefined
    - 当声明一个变量但没有赋值时，它的值就是 undefined
    - 用 typeof 检查 undefined，返回 "undefined"
  - Null与Undefined两者的区别：null 是「主动设为空」，undefined 是「声明了但没赋值」
- 强制类型转换
  - 把一种数据类型人为地转换成另一种类型。类型转换主要就三个方向——转 String、转 Number、转 Boolean
  - 转String
    - 方式一：调用 toString() 方法：比如 a.toString()。注意两点：
      - 该方法不影响原变量，只是把转换结果返回
      - null 和 undefined 没有这个方法，调用会直接报错
    - 方式二：调用 String() 函数：把被转换的数据作为参数传进去。它对 null 和 undefined 也能处理——会分别转成 "null" 和 "undefined" 字符串
    - 方式三：隐式转换：任何值和字符串相加都会转成字符串并拼起来，所以给任意值加个空字符串 + ""，就能偷偷把它变成 String——这种写法开发中很常见
  - 转Number
    - 方式一：Number() 函数，转换规则要逐类记住：
      - 字符串：纯数字的字符串（如 "123"）转成对应数字；字符串里只要有非数字内容（如 "1a2b"）就转成 NaN；空串 "" 或全是空格的串转成 0
      - 布尔值：true 转 1，false 转 0
      - null 转 0
      - undefined 转 NaN
    - 方式二：parseInt() 函数：专门用来把字符串解析成整数，从左往右取有效的整数部分，比如 "1.2" 取成 1，"120px" 能取出 120，遇到第一个非数字就截断
    - 方式三：parseFloat() 函数：和 parseInt() 类似，但可以解析出小数部分，比如 "1.2" 得到 1.2
  - 转Boolean
    - Boolean() 函数进行转换。0、NaN、""（空串）、null、undefined会转成false，其余一切值转布尔都是 true 

## 运算符
> 参见basic/operator/
- 算数运算符
  - 加、减、乘、除、取模（取余数）
  - 重要规则——隐式类型转换：
    - 当对非 Number 类型的值进行运算时，会先用前面学过的 Number() 规则把它转成数字再运算，比如 true + false = 1、null * 2 = 0
    - 任何值和 NaN 运算，结果都是 NaN
  - 加 运算符的特例（重点）：如果 + 两边有一个是字符串，就不再是加法，而是把两边都转成字符串拼接起来，比如 123 + "1" = "1231"、true + "1" = "true1"。所以给任意值加空串 + ""，就能隐式转成字符串
  - 减、乘、除 没有拼接问题：任何值和字符串做减、乘、除，都会把字符串转成数字再运算，比如 "123" - 1 = 122。利用这个特性，"- 0"、"* 1" 也可以用来隐式转 Number
- 一元运算符
  - 正号 + 和负号 -：
    - 正号：对数字本身没有任何影响（正正为正、负正为负）
    - 负号：对数字进行符号取反（正变负、负变正）
  - 真正的作用（重点）：对非 Number 类型的值使用正负号时，会先把它们转换成 Number 再运算——原理和前面学的 Number() 函数一模一样
    - 比如 a = true; a = +a; 结果 a 就变成数字 1
    - 实际开发中常用 + 来隐式地把其他类型转成 Number
  - 一个经典例子：1 + "2" + 3 结果是字符串 "123"；改成 1 + +"2" + 3 后，+"2" 先把 "2" 转成数字 2，结果就是数字 6——一个符号之差，结果完全不同
- 自增与自减
  - 自增（++）：可以让变量在自身的基础上 +1；自减（--）：在自身基础上 -1。每执行一次 a++，a 的值就加 1
  - 重点难点——前置和后置的区别，两者都会让变量立即变化，但作为「表达式」的值不同：
    - a++（后自增）：表达式的值是自增前的原值，比如 a = 1; var b = a++; 此时 b 是 1，a 变成 2
    - ++a（前自增）：表达式的值是自增后的新值，比如 a = 1; var b = ++a; 此时 b 是 2，a 也是 2
  - 自减同理：a-- 取自减前的值，--a 取自减后的值
- 逻辑运算符
  - 逻辑非 !：对值取反，true 变 false，false 变 true。对非布尔值使用时会先隐式转成布尔值再取反，所以连用两次 !! 可以把任意值转成 Boolean（相当于 Boolean() 函数的隐式写法）
  - 逻辑与 &&：同真才为真，一假即为假——两个都是 true 结果才是 true，否则为 false
    - 短路与：如果第一个值是 false，整个结果已经确定为 false，第二个值不会再去判断/执行
  - 逻辑或 ||：一真即为真，全假才为假——只要有一个是 true 结果就是 true
    - 短路或：如果第一个值是 true，第二个值同样不再判断/执行
- 非布尔值的与或运算
  - 核心规则：非布尔值做与、或运算时，会先隐式转换为布尔值进行判断，但返回的不是 true/false，而是原来两个值中的某一个
  - 与 && 的规则：
    - 第一个值转成布尔是 true，返回第二个值
    - 第一个值转成布尔是 false，返回第一个值
    - 比如 1 && 2 返回 2；0 && 2 返回 0
  - 或 || 的规则：
    - 第一个值转成布尔是 true，返回第一个值
    - 第一个值转成布尔是 false，返回第二个值
    - 比如 1 || 2 返回 1；0 || 2 返回 2
- 赋值运算符
  - 基本赋值运算符 =：把右边的值赋给左边的变量，比如 a = 123;
  - 扩展（复合）赋值运算符：把运算和赋值合并成一步，主要有：
    - +=：a += 5 等价于 a = a + 5
    - -=：a -= 5 等价于 a = a - 5
    - *=：a *= 5 等价于 a = a * 5
    - /=：a /= 5 等价于 a = a / 5
    - %=：a %= 5 等价于 a = a % 5
  - 注意点：左边必须是变量，右边可以是字面量、变量或表达式；运算顺序是从右往左
- 关系运算符
  - 四个关系运算符：> 大于、< 小于、>= 大于等于、<= 小于等于
  - 返回值是布尔值：关系成立返回 true，不成立返回 false，比如 5 > 3 返回 true
  - 非数值比较的隐式转换规则（重点）：
    - 比较时如果不是数值，会先转成数字再比较，比如 10 > "9" 会把 "9" 转成 9，结果 true；"1" > false 转成 1 > 0，也是 true
  - 字符串与字符串比较（易错点）：两个字符串之间比较，比较的不是长度，而是逐位比较字符的 Unicode 编码——比出结果立即结束，比如 "11" < "5" 结果竟然是 true（因为 "1" 的编码比 "5" 小），"a" < "b" 是 true，"abc" < "b" 也是 true
  - 实际提示：如果要按数值比较，一定要先把两边转成数字（比如用 Number()），别让两个数字字符串直接比大小
- 相等运算符
  - ==（相等）：比较时会做隐式类型转换，如果两边类型不同，先转成相同类型再比，比如 "1" == 1 结果是 true
  - !=（不相等）：同样会做隐式类型转换
  - ===（全等 / 严格相等）：不做类型转换，类型不同直接返回 false，比如 "1" === 1 结果是 false
  - !==（不全等）：也不做类型转换，类型不同直接返回 true
- 条件运算符
  - 语法：条件表达式 ? 语句1 : 语句2——它是 JS 中唯一需要三个操作数的运算符
  - 执行流程：先对条件表达式求值——
    - 结果为 true，执行语句1，并返回语句1的结果
    - 结果为 false，执行语句2，并返回语句2的结果
    - 如果条件表达式的结果是非布尔值，会先隐式转成布尔值再判断

## 流程控制
> 参见basic/control-flow/
- if语句
  - 单个 if：
    ```javascript
    if (条件) { 
      语句 
    }
    ```
    - 条件为 true 就执行代码块里的语句，为 false 就跳过
  - if-else：
    ```javascript
    if (条件) { 
      语句1 
    } else { 
      语句2 
    }
    ```
    - 条件成立执行语句1，否则执行语句2，二选一
  - if-else if-else 多分支：
    ```javascript
    if (条件1) { 
      语句1 
    } else if (条件2) { 
      语句2 
    } else { 
      语句3 
    }
    ```
    - 从上往下依次判断，哪个条件先为 true 就执行对应的代码块，执行完立即结束，后面不再判断；全都不成立才执行最后的 else
- switch语句
  - switch 的语法结构：
  ```javascript
    switch (条件表达式) {
        case 表达式1:
            语句1;
            break;
        case 表达式2:
            语句2;
            break;
        default:
            语句;
    }
    ```
    - 执行流程：先对 switch 后面的表达式求值，然后从上到下依次和每个 case 后的表达式比较，比较时使用全等（===）——类型不同直接不匹配，比如字符串 "1" 不会匹配数字 1
    - break 的作用（重点）：匹配到 case 后执行对应语句，遇到 break 才退出；如果不写 break，会从匹配的 case 开始往下"穿透"，把后面所有 case 的语句都执行一遍
    - default 分支：所有 case 都不匹配时执行，相当于 if 里的 else
    - if 和 switch 的取舍：条件多且是固定值的等值判断用 switch 更清晰；范围判断（大于小于）还是得用 if
- 循环
  - 为什么需要循环：让程序自动完成重复的工作，比如输出 1~100、计算 1+2+...+100
  - 循环三要素：初始化语句（变量从几开始）、循环条件（什么时候继续）、迭代语句（变量怎么变）
  - while循环
    ```javascript
    while (条件) {
        语句;
    }
    ````
  - do-while循环
    ```javascript
    do {
        语句;
    } while (条件);
    ```
  - while 先判后做、do-while 先做后判（至少做一次），实际开发中 while/for 用得更多
  - for循环
    ```javascript
    for (初始化; 条件; 迭代) {
        循环体;
    }
    ```
    - 执行顺序（重点）：初始化只执行一次 → 判断条件 → 为 true 执行循环体 → 执行迭代语句 → 再判断条件……直到条件为 false 退出
    - for 的灵活写法：初始化、条件、迭代三个部分都可以省略（写成 for(;;) 就是死循环），初始化也可以提到循环外面写；死循环的注意事项和 while 一样
  - for 和 while 的对比：功能等价——凡是 while 能做的 for 都能做；for 更常用，因为变量声明在括号里、结构紧凑
  - break和continue
    - break 关键字：用来立即终止循环（或 switch），终止的是离它最近的那个循环语句
    - continue 关键字：用来跳过当次循环，直接进入下一次迭代，同样只对离它最近的循环起作用

## 对象基础
> 参见basic/object/
- 分类
  - 内建对象：由 ES 标准定义、任何 JS 实现都有的对象，如 String、Math、Object、Function 等
  - 宿主对象：由 JS 的运行环境（浏览器）提供的对象，主要是 BOM 和 DOM，如 console、document
  - 自定义对象：由开发人员自己创建的对象
- 创建对象
  - var obj = new Object();
- 对象的属性和方法
  - 向对象中添加属性 obj.name = "孙悟空"，属性值如果是一个函数就称为对象的方法——对象的属性可以是任意数据类型，甚至可以是另一个对象
- 对象的基本操作
  - 读取属性：用 对象.属性名 读取，如 obj.name；如果读取对象中不存在的属性，不会报错，而是返回 undefined
  - 修改属性：对已存在的属性重新赋值即可，如 obj.name = "猪八戒"
  - 添加属性：直接给一个不存在的属性赋值就会自动添加，如 obj.age = 28
  - 删除属性：使用 delete 关键字——delete obj.name;
  - in 运算符（重点）：用来检查对象中是否含有指定的属性，有则返回 true，没有返回 false，语法："name" in obj（注意属性名要加引号）
  - 属性值可以是任意类型：包括另一个对象（对象嵌套）、函数等
- 属性名和属性值
  - 属性名的规则：
    - 对象的属性名不强制要求遵守标识符规范（obj.var = "hello" 这样用关键字做属性名也能运行），但实际开发中建议还是遵守
    - 如果要使用特殊属性名（比如纯数字 123），不能用 . 的方式操作，必须用方括号 obj["123"]
  - 对象["属性名"] 方括号语法（重点）：
    - 用 [] 操作属性更加灵活——[] 里可以直接传一个变量，变量值是多少就操作哪个属性，比如 var n = "nihao"; obj[n] 等价于 obj["nihao"]；.属性名 则做不到这一点
  - 属性值可以是任意类型：包括布尔值、null，甚至另一个对象（对象嵌套：obj.test.name 链式访问）
  - in 运算符：检查对象是否含有指定属性——"name" in obj，有则 true，没有则 false
- 基本数据类型与引用数据类型
  - JS 的变量保存在哪里：
    - 基本数据类型（String、Number、Boolean、Null、Undefined）：值直接保存在栈内存中，值与值之间互相独立，修改一个变量不影响其他变量
    - 引用数据类型（Object）：对象保存在堆内存中，每创建一个新对象就在堆中开辟一个新空间；变量保存的是对象的引用（内存地址）
  - 两个关键推论（面试高频）：
    - 赋值/比较的区别：基本类型赋值是复制值本身；对象赋值是复制引用——两个变量指向同一个对象，通过其中一个修改属性，另一个也会"跟着变"
    - == 比较的区别：比较两个基本类型时比的是值；比较两个对象时比的是内存地址——两个内容完全相同的对象 {} == {} 结果是 false，因为它们的地址不同
- 对象字面量
  - 前面用 new Object() 创建对象后要一个个 obj.name = ... 加属性，比较繁琐；用对象字面量可以在创建的同时直接指定属性，一步完成
  - 语法:
    ```javascript
    var obj = {
        name: "孙悟空",
        age: 1000,
        gender: "男"
    };
    ```
    - 用 {} 花括号创建对象，里面写「属性名: 属性值」
    - 多个属性之间用逗号 , 分隔
    - 属性名可以写引号也可以不写（特殊属性名必须写）
  - 字面量方式 vs new Object()：功能完全一样，但字面量方式代码更简洁清晰，是开发中最常用的创建对象方式

## 函数
> 参见basic/function/
- 创建方式
  - 函数声明
    ```javascript
    function fun1(a, b) {
        console.log("你好"+a+""+b);
        return a+b;
    }
    ```
  - 函数表达式
    ```javascript
    var fun2 = function(a, b) {
        console.log("你好"+a+""+b);
        return a+b;
    };
    ```
- 参数
  - 为什么需要参数：函数可以封装一段代码，但如果代码里用到的数据每次都是固定的，函数就不灵活。参数让函数可以接收外部传入的数据
  - 形参（形式参数）：定义函数时在括号里声明的参数，相当于在函数内部声明了变量但不赋值，例如 function sum(a, b) 中的 a、b。可以定义多个，用逗号分隔
  - 实参（实际参数）：调用函数时传入的值，会赋值给对应的形参，例如 sum(1, 2)。实参可以是任何数据类型，甚至可以是对象或函数
  - 注意事项：
    - 调用函数时不会检查实参的类型，传错了可能导致意料外的结果（比如字符串拼接问题），所以在函数开头经常需要校验参数类型
    - 多余的实参不会被赋值（直接忽略）；实参少于形参时，没有对应实参的形参值为 undefined（比如 sum(1) 中 b 是 undefined，参与运算会得到 NaN）
- 返回值
  - return 设置返回值：在函数内部用 return 值; 把结果返回给调用者，调用处可以用变量接收——var result = add(10, 20, 30);
  - 默认返回 undefined：如果 return 后面不跟任何内容，或者函数里压根没写 return，函数就默认返回 undefined（相当于 return undefined）
  - return 会立即结束函数：一旦执行到 return，函数后面的代码就不会再执行了——所以 return 也常被用来"中途退出"函数
  - 返回值可以是任意类型：数字、字符串、null、对象，甚至返回一个函数——函数作为返回值是 JS 的重要特性，也是后面闭包的基础
- 立即执行函数
  - 函数定义完毕后立即被调用
  - 语法
    ```javascript
    (function() {
        console.log("hello");
    })();
    ```
    - 把匿名函数用括号包起来变成函数表达式，后面紧跟一对括号立即调用
  - 特点：
    - 只会执行一次，执行完就被释放
    - 本质上就是一个没用变量接收的匿名函数，定义后立即调用
  - 用途：立即执行函数可以创建一个独立的作用域，里面声明的变量不会污染全局——早期 JS（没有 let/const 的时代）常靠它来实现代码隔离
- 方法
  - 当一个函数作为对象的属性保存时，我们称这个函数是对象的方法
  - 示例:
    ```javascript
    var obj = {
        name: "孙悟空",
        sayName: function() {
            console.log(this.name);  // 输出：孙悟空
        }
    };
    obj.sayName();  // 调用方法
    ```
  - 函数和方法的区别：本质上都是函数，只是名字叫法不同——独立调用的叫函数（fun()），挂在对象上、通过对象调用的叫方法（obj.fun()）
  - this 关键字（铺垫）：在方法中可以使用 this，this 指向调用方法的那个对象——通过 obj.sayName() 调用时，this 就是 obj，所以能访问到 obj.name。这里先简单引入，第 61、62 集会专门深入讲 this
  - 意义：方法和属性结合，对象就既有"数据"又有"行为"——这就是面向对象思想的雏形
- 作用域
  - 变量起作用的范围
  - 变量的声明提前（重点）：使用 var 声明的变量，会在所有代码执行之前被声明（但不会赋值）——所以声明语句之前使用变量不会报错，而是得到 undefined
  - 函数的声明提前（重点）：使用函数声明形式创建的函数 function fun(){}，会在所有代码执行前被创建——所以函数声明可以在声明之前调用；但函数表达式 var fun = function(){} 不会被提前创建（只有变量提前），提前调用会报错
  - 全局作用域
    - 直接写在 <script> 标签里的代码都在全局作用域中
    - 全局作用域在页面打开时创建、页面关闭时销毁
    - 全局作用域中有一个全局对象 window，由浏览器创建，代表浏览器窗口；全局中声明的变量、创建的函数都会作为 window 的属性/方法保存（var a = 10; 等价于 window.a = 10;）
  - 函数作用域
    - 每调用一次函数，就会创建一个新的函数作用域，函数执行完毕后作用域销毁；每次调用都是独立的新作用域
    - 局部变量：在函数作用域中声明的变量，只能在函数内部访问，外部无法访问——这实现了变量的隔离，不同函数里可以有同名变量互不干扰
    - 不写 var 的坑：函数中不使用 var 声明的变量会自动成为全局变量（挂载到 window 上），这是初学常见的 bug 来源
    - 变量的声明提前同样适用于函数内部：函数内用 var 声明的变量会提升到函数的开头
    - 作用域链（重点）：函数里使用一个变量时，先在自身作用域查找；找不到就去上一级作用域找；一直找到全局作用域，全局也没有就报错。这个「从内向外逐层查找」的规则就是作用域链
    - 全局变量在函数内可访问：函数内部可以直接使用全局作用域中的变量；局部变量优先级高于同名全局变量
- this
  - 以函数的形式调用（fun()）：this 永远都是 window（全局对象）
  - 以方法的形式调用（obj.fun()）：this 就是调用方法的那个对象——谁调用，this 就指向谁

## 面向对象与原型
> 参见basic/oop-prototype/
- 工厂方法创建对象
  - 示例:
    ```javascript
    function createPerson(name, age) {
        var obj = new Object();
        obj.name = name;
        obj.age = age;
        obj.sayName = function() {
            alert(this.name);
        };
        return obj;
    }
    var p1 = createPerson("孙悟空", 18);
    ```
  - 缺陷: 用工厂方法创建的对象，构造器都是 Object——创建出来的对象无法区分具体类型（是 Person 还是 Dog？），说白了就是"都是 Object，没有区别"
- 构造函数
  - 定义: 构造函数就是一个普通函数，但创建方式和普通函数不同——使用 new 关键字调用就是构造函数（如 new Person()），普通函数直接调用（如 fun()）
  - 习惯：构造函数的首字母大写（Person、Dog），普通函数首字母小写
  - new 的执行流程（核心，必记）：
    - 立刻创建一个新的对象
    - 将新建的对象设置为函数中的 this（this 就是新创建的对象）
    - 逐行执行函数中的代码
    - 将新建的对象作为返回值返回
    ```javascript
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.sayName = function() {
            alert(this.name);
        };
    }
    var per = new Person("孙悟空", 18);
    ```
  - instanceof 运算符：用来检查一个对象是否是某个构造函数的实例——per instanceof Person 返回 true。解决了工厂方法"无法区分类型"的问题
  - 构造函数 vs 工厂方法：功能类似，但构造函数创建的对象有明确的"类型"（instanceof 可识别），是 JS 中创建对象的标准方式
- 原型对象
  - 定义: 我们创建的每一个函数，解析器都会向函数中添加一个属性 prototype，这个属性对应着一个对象——就是原型对象
  - 特点: 原型对象相当于一个公共区域，所有同一个类的实例都可以访问到它
  - 示例:
    ```javascript
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     * 将sayName属性放入原型对象中
     */
    Person.prototype.sayName = function() {
      alert(this.name)
    }
    var per = new Person("孙悟空", 18);
    per.sayName();
    ```
  - 使用对象的属性/方法时的查找顺序：先在对象自身查找，自身没有就去原型对象中查找，找到直接使用——原型的原型再找，就引出了原型链的概念
  - constructor 属性：原型对象中有一个 constructor 属性，它指向构造函数本身。Person.prototype.constructor === Person
  - in："name" in obj 检查对象中是否含有属性——但包括原型链上的属性，对象自身没有、原型里有也会返回 true
  - hasOwnProperty()：检查对象自身是否含有属性（不包括原型链）——obj.hasOwnProperty("name")
- toString
  - 来自原型链顶端 Object.prototype——所有对象都能调用它
  - 默认行为：直接打印对象（如 console.log(per)）时会自动调用它的 toString()，默认返回 "[object Object]"，没什么用
  - 重写 toString() 的用途：可以在构造函数的原型中重写 toString()，让打印对象时输出有意义的信息，比如返回 "Person[name=孙悟空, age=18]"——方便调试时查看对象内容
    ```javascript
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     * 重写toString方法
     */
    Person.prototype.toString = function() {
        return "Person[name=" + this.name + ", age=" + this.age + "]";
    };
    var person = new Person("张三", 33);
    console.log(person.toString());
    ```
- 垃圾回收
  - 什么是垃圾：程序中没有任何引用的对象就是垃圾——比如一个对象创建后，所有指向它的变量都被改掉了，这个对象就再也访问不到，成为内存垃圾
  - 为什么要回收：如果对象只创建不释放，垃圾越积越多会导致内存溢出，程序运行变慢
  - JS 的自动回收机制：JS 拥有自动的垃圾回收机制，会将这些"垃圾"对象从内存中销毁，我们不需要也不能进行垃圾回收的操作
  - 我们能做的：把不再使用的对象的引用设置为 null（obj = null;），让对象失去引用变成垃圾，等待 GC 自动回收

## 数组
> 参见basic/array/
- 简介
  - 什么是数组：数组也是一个对象，但和普通对象功能不同——普通对象用来保存多个有名字的数据，数组用来保存一系列有序的数据（比如一个班级的所有学生）
  - 创建数组：var arr = new Array();
  - 向数组中添加元素：使用索引（下标）来操作——arr[0] = 10; arr[1] = 33;，索引从 0 开始（0、1、2……）
  - 读取数组中的元素：arr[0] 按索引读取；如果读取不存在的索引，不会报错，返回 undefined
  - length 属性（重点）：
    - arr.length 获取数组的长度（元素个数）
    - 对于连续的数组，length 就是元素个数；对于非连续数组，length 是「最大索引 + 1」
    - 修改 length 可以截断或扩展数组；arr[arr.length] = 值; 是向数组末尾追加元素的常用写法
  - 数组元素可以是任意类型：数字、字符串、对象、函数，甚至另一个数组（二维数组）
- 字面量
  - 字面量方式创建数组：var arr = [1, 2, 3, 4, 5];——用 [] 中括号直接创建，可以在创建的同时指定元素，元素间用逗号分隔。和对象字面量一样，这种方式比 new Array() 更简洁，是开发中最常用的创建方式
  - 构造函数方式也可以传元素：new Array(10, 20, 30) 创建时指定元素
  - 一个易错点——new Array() 传单个数字：如果只传一个数字参数，如 new Array(5)，不会创建 [5]，而是创建一个长度为 5、元素全是 undefined 的数组；而字面量 [5] 就是只有一个元素 5。这个差异是初学易错点
  - 数组元素类型任意：字符串、数字、对象、函数、null，甚至另一个数组——数组套数组就是二维数组，arr[0][1] 这种双重索引访问
- 常用四个方法
  - push()：向数组末尾添加一个或多个元素，返回新的长度
  - pop()：删除并返回数组的最后一个元素
  - unshift()：向数组开头添加一个或多个元素，其他元素的索引自动后移，返回新长度
  - shift()：删除并返回数组的第一个元素，其他元素索引自动前移
- 遍历
  - for循环
    ```javascript
    var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧"];
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    ```
  - foreach()
    ```javascript
    var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧"];
    arr.forEach(function(value, index, array) {
        console.log(value);   // 当前元素
        console.log(index);   // 当前索引
        console.log(array);   // 数组本身
    });
    ```
- slice和splice
  - slice: 截取（不改原数组）
    ```javascript
    var arr = [1, 2, 3, 4, 5];
    var result = arr.slice(0, 2);  // result = [1, 2]，arr 不变
    ```
    - 从数组中截取指定范围的元素，返回新数组，原数组不受影响
    - 第一个参数：截取开始的索引；第二个参数：结束的索引（不包含结束位置本身）
    - 可以传负数：-1 表示倒数第一个；省略第二个参数就截取到数组末尾
  - splice: 删除/插入/替换（会改原数组）
    ```javascript
    var result = arr.splice(2, 1);  // 从索引2开始删除1个，result=[3]，arr=[1,2,4,5]
    arr.splice(2, 0, "孙悟空");     // 在索引2位置插入，不删除
    arr.splice(2, 1, "猪八戒");     // 替换：删1个插1个
    ```
    - 第一个参数：开始的位置；第二个参数：删除的数量；第三个及以后：要插入的新元素
    - 返回值是被删除的元素组成的数组
- 其他方法
  - concat()：连接两个或多个数组，返回新数组，不改原数组
    ```javascript
    var result = [1,2,3].concat([4,5]);  // [1,2,3,4,5]
    ```
  - join()：把数组的元素连接成一个字符串，可以指定连接符，不改原数组
    ```javascript
    [1,2,3].join("-");  // "1-2-3"，默认用逗号连接
    ```
  - reverse()：反转数组（前边的去后边），直接修改原数组
  - sort()——排序
    - 默认按 Unicode 编码排序——数字数组可能得到意想不到的结果：[2, 11, 4].sort() 得到 [11, 2, 4]（按字符串排）
    - 正确的数字排序需要传一个回调函数自己定义规则：
      ```javascript
      arr.sort(function(a, b) {
          return a - b;  // 升序；b - a 是降序
      });
      ```

## 内置对象
> 参见basic/built-in-object
- call和apply
  - call() 和 apply() 是函数对象的方法：需要通过函数对象来调用——fun.call()、fun.apply()；调用它们和直接调用 fun() 效果一样，都会让函数执行
  - 核心作用——指定 this（重点）：调用 call/apply 时可以把一个对象指定为第一个参数，这个对象就会成为函数执行时的 this——想让它是谁就是谁，换句话说 call/apply 可以修改函数执行时的上下文对象
  - call 和 apply 的区别——传实参的方式不同：
    - call：实参在第一个参数（this 对象）之后依次传递——fun.call(obj, 2, 3)
    - apply：实参需要封装到一个数组中统一传递——fun.apply(obj, [2, 3])
  - 顺带总结 this 的四种情况：
    - 直接以函数形式调用，this 是 window；
    - 以方法形式调用，this 是调用者对象；
    - 以构造函数形式调用，this 是新创建的对象；
    - 用 call/apply 调用，this 是指定的那个对象
- arguments
  - 函数的隐含参数：调用函数时，浏览器每次都会传递两个隐含的参数——一个是 this（第61集讲过），另一个就是封装实参的对象 arguments
  - arguments 是什么：
    - 是一个类数组对象——可以通过索引操作数据（arguments[0] 是第一个实参、arguments[1] 是第二个实参），也有 length 属性，但它不是数组（arguments instanceof Array 是 false，用不了数组的方法）
    - 调用函数时传递的所有实参都会保存在 arguments 中，arguments.length 就是实参个数
  - 作用：即使不定义形参，也可以通过 arguments 来使用实参——可以实现「不定参数」的函数，比如写一个能接收任意多个数字并求和的函数
  - callee 属性：arguments 里有一个 callee 属性，对应一个函数对象——就是当前正在执行的函数本身，可用于匿名函数递归调用
- Date
  - 创建 Date 对象：var d = new Date();——创建一个表示当前时间的日期对象；typeof d 返回 "object"
  - 指定时间创建：new Date("12/03/2016 11:10:30")——传入日期格式的字符串，创建指定时间的日期对象
  - 获取日期的各部分：
    - getFullYear()：获取年份
    - getMonth()：获取月份——注意！月份是 0~11，返回 0 表示 1 月，输出时要 +1
    - getDate()：获取日（几号）
    - getDay()：获取星期几——0 表示周日，1 表示周一……
  - getTime()——时间戳（重点）：获取当前日期对象距离 1970 年 1 月 1 日 0 点（世界标准时间）的毫秒数。计算机底层保存时间用的就是时间戳，获取当前时间戳也可以直接写 Date.now()
- Math
  - Math 是什么：Math 不是一个构造函数，而是一个工具对象（直接使用，不用 new）——它里面封装了数学运算相关的属性和方法
  - 常用属性和方法：
    - Math.PI：圆周率
    - Math.abs()：绝对值
    - Math.ceil()：向上取整
    - Math.floor()：向下取整
    - Math.round()：四舍五入取整
    - Math.max() / Math.min()：从多个数中找最大/最小值
    - Math.pow(x, y)：x 的 y 次幂；Math.sqrt()：开方
  - Math.random()（重点）：生成一个 0~1 之间的随机数（包含 0、不包含 1）
    ```javascript
    // 生成 1~10 的随机整数
    Math.round(Math.random() * 9 + 1);
    // 或通用公式：生成 x~y 的随机整数
    Math.round(Math.random() * (y - x) + x);
    ```
- 包装类
  - 包装类是什么：JS 中为我们提供了三个包装类——Number、String、Boolean，通过它们可以把基本数据类型包装成对象：var num = new Number(3);
  - 但注意：实际开发中不要用包装类创建对象——比如 new Boolean(false) 转成布尔值是 true（因为对象转布尔全是 true），容易造成错误
  - 包装类的真正作用（重点）：解答了"基本类型怎么能调用方法"的疑问——
    - 基本类型本身没有方法，但当我们对基本类型的值调用属性/方法时（如 str.length、str.toString()），浏览器会临时把基本类型包装成对象，调用完属性/方法后再转回基本类型
    - 所以虽然基本类型能"临时调用"方法，但不能给它添加属性和方法（添加时创建的临时对象用完即弃，加不上去）
- 字符串的方法
  - 底层原理：字符串在底层是以字符数组的形式保存的——"hello" 可以看成 ["h","e","l","l","o"]，所以字符串也有 length 属性，也可以用索引访问 str[0]
  - 重要前提：以下所有方法都不会影响原字符串，而是返回新字符串（字符串是不可变的）
  - 常用方法：
    - charAt()：返回指定位置的字符；charCodeAt()：返回指定位置字符的 Unicode 编码
    - indexOf() / lastIndexOf()：查找子串第一次/最后一次出现的位置，找不到返回 -1——常用来判断字符串中是否含有某个内容
    - slice()：截取子串（和数组的 slice 用法一样，支持负数）
    - substring()：截取子串（不支持负数，参数可自动交换顺序）
    - substr()：截取（第二个参数是截取的数量）
    - split()：把字符串按指定分隔符拆成数组（"a,b,c".split(",") → ["a","b","c"]）
    - toUpperCase() / toLowerCase()：转大写/转小写

## 正则表达式
> 参见basic/regex/
- 创建正则对象:
  - var reg1 = new RegExp("正则表达式");        // ✓ 构造函数方式
  - var reg2 = /正则表达式/;                    // ✓ 字面量方式（更常用）
  - var reg3 = new RegExp("abc", "i");          // 第二个参数传修饰符
  - var reg4 = /abc/i;                          // 字面量的修饰符写法
- 各种用法
  | 操作     | 写法                        | 返回值                       |
  | ------ | ------------------------- | ------------------------- |
  | 检查是否符合 | `reg.test(str)`           | true / false              |
  | 按规则拆分  | `str.split(reg)`          | 数组                        |
  | 查找位置   | `str.search(reg)`         | 下标，没找到返回 -1               |
  | 提取内容   | `str.match(reg)`          | 数组（带 g 全取），没找到返回 **null** |
  | 替换内容   | `str.replace(reg, "新内容")` | 新字符串（不带 g 只换第一个）          |

## dom
> 参见basic/dom/
- dom简介
  - DOM 是什么：Document Object Model，文档对象模型——浏览器把整个 HTML 文档（document）转换成一棵树状结构的对象模型，网页上的每个标签、属性、文本都是树上的一个节点（Node）。JS 通过操作这些节点，就能改变网页的内容、结构、样式
  - 文档树的组成：
    - 文档节点（document）：整个文档的根
    - 元素节点：HTML 标签，如 <body>、<div>
    - 属性节点：标签里的属性，如 id="box"
    - 文本节点：标签里的文字内容
  - document 对象：代表整个网页文档，是 DOM 操作的入口——通过它才能获取页面中的元素
  - JS 操作网页的整体流程预告：获取节点 → 修改节点的属性/内容/样式 → 绑定事件响应用户操作
  - dom加载完再执行js的三种方式
    - 引入外部js加defer: 
      ```html
      <script src="main.js" defer></script>  <!-- 等文档解析完再执行 -->
      ```
    - js写在onload事件中
      ```javascript
      window.onload=function(){
          // 要等图片、样式表等所有资源都加载完
      }
      ```
    - js写在DOMContentLoaded中
      ```javascript
      document.addEventListener("DOMContentLoaded", function() {
          // DOM 就绪即可执行，不用等图片
      });
      ```
- dom查询
  | 方法（属性）                   | 从哪儿调          | 按什么找            | 返回值                  |
  | ------------------------ | ------------- | --------------- | -------------------- |
  | `getElementById`         | document      | id              | **单个元素**             |
  | `getElementsByClassName` | document / 元素 | class           | 集合，要用 `[0]` 取        |
  | `getElementsByTagName`   | document / 元素 | 标签名             | 集合，要用 `[0]` 取        |
  | `getElementsByName`      | document      | name 属性         | 集合，要用 `[0]` 取        |
  | `querySelector`          | document / 元素 | CSS 选择器         | **单个**（第一个匹配的）       |
  | `querySelectorAll`       | document / 元素 | CSS 选择器         | 集合（类数组，用 `[0]` 取或遍历） |
  | `body`                   | document      | 直接取 body        | **单个元素**             |
  | `documentElement`        | document      | 直接取 html 根元素    | **单个元素**             |
  | `all`                    | document      | 页面所有元素（过时，了解即可） | 集合                   |
  | `forms`                  | document      | 页面所有表单          | 集合                   |
  | `parentNode`             | 元素            | 父节点             | **单个节点**             |
  | `childNodes`             | 元素            | 所有子节点           | 集合（空白/换行也算文本节点，有坑）   |
  | `children`               | 元素            | 子元素             | 集合（只含元素节点，更常用）       |
  | `firstChild`             | 元素            | 第一个子节点          | 单个节点（可能是空白文本）        |
  | `lastChild`              | 元素            | 最后一个子节点         | 单个节点（可能是空白文本）        |
  | `firstElementChild`      | 元素            | 第一个元素子节点        | **单个元素**（避开文本节点）     |
  | `nextSibling`            | 元素            | 下一个兄弟节点         | 单个节点（可能是空白文本）        |
  | `previousSibling`        | 元素            | 上一个兄弟节点         | 单个节点（可能是空白文本）        |
- dom增删改
  - document.createElement("标签名")：创建一个新的元素节点，比如 var li = document.createElement("li")——创建出来的元素还没有放进页面
  - document.createTextNode("文本")：创建文本节点，用来给新元素加内容
  - 父元素.appendChild(子元素)：把一个元素添加到父元素的最后
  - 父元素.insertBefore(新元素, 参照元素)：把新元素插入到参照元素之前
  - 父元素.replaceChild(新元素, 旧元素)：用新元素替换旧元素
  - 父元素.removeChild(子元素)：删除指定的子元素
- 获取元素的样式
  - 现代浏览器: getComputedStyle(元素, 伪元素)[name]
  - ie8及以下: 元素.currentStyle[name]
  - 兼容所有浏览器的方式:
    ```javascript
    function getStyle(obj, name) {
        if (window.getComputedStyle) {
            // 正常浏览器：有 getComputedStyle 方法
            return getComputedStyle(obj, null)[name];
        } else {
            // IE8 及以下
            return obj.currentStyle[name];
        }
    }
    ```
- 获取元素尺寸和位置
  - offsetWidth / offsetHeight：获取元素的完整尺寸（内容 + 内边距 + 边框都算上），返回数字（不带 px）
  - clientWidth / clientHeight：获取元素的可视区尺寸（内容 + 内边距，不含边框）
  - offsetParent：获取当前元素的定位父元素——离它最近的开启了定位（position 不是 static）的祖先元素
  - offsetLeft / offsetTop：当前元素相对于其定位父元素的偏移量（位置坐标）
  - scrollHeight / scrollWidth：元素内容的完整高度/宽度（包括被滚动隐藏的部分）
  - scrollTop / scrollLeft（重点）：元素滚动条滚动的距离——可以读也可以写（比如写代码让滚动条回到顶部)
- 修改元素的样式
  - 样式写在 CSS 里，JS 只负责"开关类名"，样式和逻辑分离：
    ```css
    /* index.css */
    .box {
      width: 100px;
      height: 100px;
      background-color: skyblue;
    }
    .highlight {
      border: 2px solid red;
    }
    ```
    ```JavaScript
    div.classList.add("box");         // 添加类
    div.classList.remove("box");      // 移除类
    div.classList.toggle("highlight"); // 切换：有就删、没有就加
    div.classList.contains("box");    // 判断有没有这个类 → true/false
    ```
    改样式只动 CSS 文件，JS 干干净净，这是实际项目里的主流做法。

## 事件
> 参见basic/event/
- 事件简介
  - 什么是事件：事件就是用户和浏览器之间的交互行为——点击按钮、移动鼠标、页面加载完成……都是事件
  - 事件处理的核心思想：在事件发生时，让程序自动执行某段代码（响应用户操作）
  - 事件的两种绑定方式：
    - HTML 属性方式：直接在标签里写 onclick="alert('点我')"——结构和行为耦合，不推荐
    - JS 中为事件绑定函数（推荐）：
      ```javascript
      var btn = document.getElementById("btn");
      btn.onclick = function() {
          alert("点我了");
      };
      ```
- 事件对象
  - 事件对象是什么：当事件触发时，浏览器会将一个事件对象（event）作为实参传递给事件处理函数——里面封装了和当前事件相关的一切信息
  - 获取事件对象：事件处理函数的第一个参数就是事件对象——
    ```javascript
    box.onclick = function(event) {
        // event 就是事件对象
    };
    ```
  - 常用属性：
    - event.clientX / clientY：鼠标指针相对于浏览器可视窗口的坐标
    - event.pageX / pageY：鼠标相对于整个网页的坐标（IE8 不支持）
    - event.target：触发事件的那个元素（谁被点了）
    - 键盘事件里 event.keyCode：按下的键的编码
  - 浏览器兼容（重点）：IE8 中事件对象不会作为参数传入，而是保存在 window.event 里——兼容写法：
    ```javascript
    box.onclick = function(event) {
        event = event || window.event;
        // ……
    };
    ```
- 事件的冒泡
  - 什么是冒泡：事件的传导——当元素上的事件被触发时，其祖先元素上的相同事件也会被触发，一层一层向上传，就像水里的气泡往上冒
    - 例子：span 在 div 里，div 在 body 里——给它们都绑定 onclick，点击 span 时，span、div、body 的点击事件会依次全部触发（从内向外）
  - 冒泡的用途：大部分情况下冒泡是有用的——比如给父元素绑定一个事件，就能响应所有子元素的操作（这是下一集「事件委派」的基础）
  - 取消冒泡（重点）：如果不希望冒泡，可以通过事件对象取消——
    ```javascript
    event.cancelBubble = true;
    ```
- 事件的委派
  - 把事件统一绑定到祖先元素上，利用冒泡，子元素的事件触发后会冒泡到祖先，祖先的事件函数就响应了；再通过 event.target 判断实际触发事件的是哪个元素
    ```javascript
    ul.onclick = function(event) {
        event = event || window.event;
        if (event.target.className == "link") {
            alert("点击了链接：" + event.target.innerHTML);
        }
    };
    ```
  - 委派的优势（重点）：
    - 只绑定一次，性能好——不管子元素有多少个
    - 后添加的元素自动生效——因为事件绑在祖先上，新增的子元素触发后也会冒泡上来

## bom
> 参见basic/bom/

## 定时器与动画
> 参见basic/timer-animation/

## 数据·变量·内存
> 参见advanced/data-and-memory/

## 对象与函数深入
> 参见advanced/object-function/

## 原型与原型链
> 参见advanced/prototype-chain/

## 执行上下文
> 参见advanced/execution-context/

## 作用域与闭包
> 参见advanced/scope-closure/

## 创建模式与继承
> 参见advanced/inheritance/

## 线程与事件循环
> 参见advanced/thread-event-loop/
