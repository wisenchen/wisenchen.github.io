# JavaScript 正则表达式(Regular Expression)
感觉自己对正则的理解和使用都不咋的，一些东西也有点忘了，每次写个正则都得查下文挡，所以现在想着从头开始重新学一遍，并总结下，文末会附上过程中所查看的一些资料
## 创建

1. 使用构造函数创建

```JavaScript
const reg = new RegExp('^hello world$','i');// 第一个参数为规则，第二个为修饰符
reg.test('hello world');// true
```
2. 使用字面量方式创建
```js
const reg = /^hello world$/i; // /pattern/flags  
reg.test('hello world');// true
```
两种方法的使用场景

通常使用以字面量方式创建，这种方法性能更好，不过有时候会遇到规则中有变量的存在，此时可以用第一种方式创建
```js
const str = 'world'
const reg = new RegExp(`^hello ${str}$`,'i');
reg.test('hello world');// true
```



## RegExp 静态属性

| 属性                | 值                             |
| ------------------- | ------------------------------ |
| `$1-$9`             | 获取对应实例捕获组匹配到的内容 |
| `lastMatch` \| `$&`    | 实例中最后一次匹配到的字符串   |
| `rightContext` \| `$'` | 最新匹配到的右侧子串           |
| `lastParen` \| `$+`    | 匹配到的最后一个子串           |
| `input` \| `$_`        | 匹配的字符串                   |
| `leftContext` \| `$` `   | 最新匹配到的左侧子串           |

示例：
```js
const reg = /(a)b(c)/g;
reg.test("ABCabcCBA");
console.log(RegExp.$1); // a
console.log(RegExp.$2); // c
console.log(RegExp.lastMatch); // abc
console.log(RegExp["$&"]); // abc
console.log(RegExp["$'"]); // CBA
console.log(RegExp.rightContext); // CBA
console.log(RegExp.lastParen); // c
console.log(RegExp["$+"]); // C
console.log(RegExp.input); // ABCabcCBA
console.log(RegExp["$_"]); // ABCabcCBA
console.log(RegExp.leftContext); // ABC
console.log(RegExp["$`"]); // ABC
```

## 使用方法

### 正则方法
#### RegExp.test()  
测试一个字符串是否能被该正则所匹配

```js
/\w+/.test('hello'); // true
```

#### RegExp.exec()  
在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null

```js
// 无g修饰符 只会从头开始匹配
const reg = /\w+/;
reg.exec("a,b,c"); // [a]
reg.exec("a,b,c"); // [a]

// 有g修饰符 会从lastIndex位置开始匹配
const reg1 = /\w+/g;
reg1.exec("a,b,c"); // [a]
reg1.exec("a,b,c"); // [b]
reg1.exec("a,b,c"); // [c]
reg1.exec("a,b,c"); // null
```

### 字符串方法
> ES6中 在语言内部全部调用RegExp的实例方法，从而做到所有与正则相关的方法，全都定义在RegExp对象上。
#### str.match()

match()方法检索一个字符串，返回一个匹配正则表达式的结果数组。

```js
// 无g修饰符 只会从头开始匹配
const reg = /\w+/;
const str = "a,b,c";
str.match(reg); // [a]
str.match(reg); // [a]

// 有g修饰符 会匹配所有符合的字符
const reg1 = /\w+/g;
str.match(reg1); // [a,b,c]
str.match(reg1); // [a,b,c]
```

如果正则表达式不包含 g 标志，str.match() 将返回与 RegExp.exec(). 相同的结果。
#### str.matchAll()
matchAll() 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。
```js

const reg = /t(e)(st(\d?))/g;
const str = "test1test2";
const arr = [...str.matchAll(reg)]; 
console.log(arr); // [["test1", "e", "st1", "1"],["test2", "e", "st2", "2"]] 
```
> 注意使用matchAll()方法 正则表达式需要加上 ”g“ 修饰符
#### str.replace()
替换所匹配的字符并返回一个新的字符串
```js
const reg = /(_[a-z])/g;
let str = "test_case1 test_case2";
str = str.replace(reg,s => s.substr(1).toLocaleUpperCase());
console.log(str); // testCase1 testCase2
```
#### str.search()
根据参数检索字符串，返回第一个匹配的位置 如果为匹配成功则返回-1
```js
const reg = /\d+/g;
const str = "abc1sdw2gg3e45";
str.search(reg); // 3
```
#### str.split()
按指定字符切割一个字符串并转为数组
```js
const reg = /[^a-z]+/;
const str = "a$b!c@d#e-&f";
const arr = str.split(reg); 
console.log(arr);//  ["a", "b", "c", "d", "e", "f"]
```

## 正则对象的属性 

|    属性    | 类型    | 说明                                           |
| :--------: | :------ | ---------------------------------------------- |
|   dotAll   | Boolean | 是否为“dotAll”模式，即是否存在 “s” 修饰符      |
|   flags    | String  | 包含添加的所有修饰符                           |
|   global   | Boolean | 是否为全局匹配 ，即是否存在 “g”修饰符          |
| ignoreCase | Boolean | 是否忽略大小写，即是否存在 “i”修饰符           |
| lastIndex  | Number  | 最后一次匹配的位置                             |
| multiline  | Boolean | 是否为多行匹配，即是否存在 “m”修饰符           |
|   source   | String  | 正则的原字符                                   |
|   sticky   | Boolean | 是否为粘性匹配，即是否存在“y”修饰符            |
|  unicode   | Boolean | 是否使用“Unicode 模式” , 即是否存在 “u” 修饰符 |

```js
var reg = /\w+/igmsyu;
console.log(reg.dotAll);  // true
console.log(reg.flags);   // gimsuy
console.log(reg.global);  // true
console.log(reg.ignoreCase); // true
console.log(reg.lastIndex); // 0
console.log(reg.multiline); // true
console.log(reg.source);    // \w+
console.log(reg.sticky);    // true
console.log(reg.unicode);   // true
```


## 修饰符
- `g` 全局搜索
```js
const str = 'Hello World';
const reg = /l/;
const reg1 = /l/g;
str.match(reg);//  ["l", index: 2, input: "Hello World", groups: undefined]
str.match(reg1);// ["l", "l", "l"]
```
- `i` 不区分大小写
```js
const reg = /^hello world$/;
const reg1 = /^hello world$/i;
reg.test('Hello World');// false
reg1.test('Hello World');// true
```
- `m` 多行匹配
```js
const str = 'Hello \nWorld';
const reg = /^world$/i;
const reg1 = /^world$/im;
reg.test(str);//  false
reg1.test(str);// true
// 注意！ 需要多行匹配的字符串中要有^（开始）或$（结束） 并且需要存在\n（换行符）使用m修饰符才有意义
```
- `s` 允许 **.** 匹配换行符
```js
const str = 'a\nb';
const reg = /.+/;
const reg1 = /.+/s;
str.match(reg);//  ["a", index: 0, input: "a↵b", groups: undefined]
str.match(reg1);// ["a↵b", index: 0, input: "a↵b", groups: undefined]
```
- `u` 使用unicode码匹配
```js
/^\uD83D/u.test("\uD83D\uDC2A"); // false
/^\uD83D/.test("\uD83D\uDC2A"); // true
```
`\uD83D\uDC2A`是一个四个字节的 UTF-16 编码，代表字符 "🐪" 由于ES5 不支持四个字节的 UTF-16 编码，会将其识别为两个字符，所以第二行代码结果为true

- `y` “粘连”（sticky）修饰符，匹配从目标字符串的当前位置开始。

y修饰符的作用与g修饰符类似,下面用修饰符 “y” 与 “g” 之间的区别作为例子来理解
```js
const str = "abc-def-ghi";
const reg = /[a-z]+-/g;
reg.exec(str); // [abc-]
reg.exec(str); // [def-]
reg.exec(str); // null

const reg1 = /[a-z]+-/y;
reg1.exec(str); // [abc-]
reg1.exec(str); // [def-]
reg1.exec(str); // null
```
这样看起来与 修饰符 “g” 没区别

下面把正则改一下 
```js
const str = "abc-def-ghi";
const reg = /[a-z]+/g;
reg.exec(str); // [abc]
reg.exec(str); // [def]
reg.exec(str); // null

const reg1 = /[a-z]+/y;
reg1.exec(str); // [abc] 未匹配前 reg1.lastindex = 0
reg1.exec(str); // null  未匹配前 reg1.lastindex = 3
reg1.exec(str); // [abc] 未匹配前 reg1.lastindex = 0
```
现在能看出来，y修饰符与g修饰符的不同之处就在于y修饰符每一次匹配必须为lastindex的起始位置开始


## 元字符

| 字符 | 描述                                                   |
| ---- | ------------------------------------------------------ |
| `\f` | 匹配一个换页符                                         |
| `\n` | 匹配一个换行符                                         |
| `\r` | 匹配一个回车符                                         |
| `\t` | 匹配一个水平制表符 (U+0009)                            |
| `[\b]` | 匹配一个退格(U+0008)                            |



## 量词

| 字符     | 解释                   |
| :------- | :--------------------- |
| `x+`     | 匹配`x`一次或多次      |
| `x*`     | 匹配`x`零次或多次      |
| `x?`     | 匹配`x`零次或一次      |
| `x{n}`   | 匹配`x` 出现的次数为n  |
| `x{n,}`  | 匹配`x` 出现次数至少为n |
| `x{n,m}` | 匹配`x` 出现n 至 m 次  |

### 量词嵌套

- `x*?`
- `x+?`
- `x??`
- `x{n}?`
- `x{n,}?`
- `x{n,m}?`

注意量词的存在会默认以贪婪模式匹配，即尝试尽可能多的匹配，这样就会产生回溯（匹配失败后，返回上一级重新匹配）进而影响性能。在量词后加上 "?" 可以不使用贪婪匹配
> 有关回溯的问题可看这篇文章[正则-回溯](https://www.jianshu.com/p/ad61e6fe88b4)

例子：
```js
var text = "a,b,c,d,e";
var reg = /[\w,]+/;
text.match(reg)[0]; // a,b,c,d,e

var reg1 = /[\w,]+?/;
text.match(reg1)[0]; // a
```

## 范围
| 字符     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| `.`  | 默认匹配除换行符之外的任何单个字符。                   |
| `\w` | 匹配（字母、数字或者下划线）。等价于 `[A-Za-z0-9_]`    |
| `\W` | 匹配（非字母、数字或者下划线）。等价于 `[^A-Za-z0-9_]` |
| `\s` | 匹配一个空白字符，包括空格、制表符、换页符和换行符     |
| `\S` | 匹配一个非空白字符                                     |
| `\d` | 匹配一个数字 `等价于[0-9]`。                           |
| `\D` | 匹配一个非数字字符  `等价于[^0-9]`                     |
## 组
| 字符     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| `x | y`  | x或者y                                                       |
| `[abc]`  | 匹配abc中的字符                                              |
| `[^abc]` | 匹配除了abc之外的字符                                        |
| `[a-z]`  | 匹配a,b,c,d...z之间的字符                                    |
| `[0-9]`  | 匹配数字0，1，2...9之间的数字                                |
| `(x)`    | ()用来分组 可以使用 RegExp.$1..RegExp.$9来获取对应分组匹配到的内容   |
| `\n`     | `n `表示为数字 用于替代第n个捕获组 例：` /(abc)(def),\1\2/.test("abcdef,abcdef")// true` |
| `(?:x)`  | 匹配x但是不记住捕获组  例：`/(?:abc)(def),\1/.test("abcdef,def")// true` |



## 边界
| 字符 | 说明                                                   |
| ---- | ------------------------------------------------------ |
| `^`  | 匹配输入的开始（当用在集合中时含义为排除集合中的字符） |
| `$`  | 匹配输入的结束                                         |
| `\b` | 匹配一个词的边界                                       |
| `\B` | 匹配一个非单词边界                                     |



## 断言
| 字符       | 说明                                                 |
| ---------- | ---------------------------------------------------- |
| `x(?=y)`   | 先行断言，匹配 “x”  且仅当“x”后面为 “y”  时才匹配    |
| `(?<=y)x`  | 后行断言，匹配 “x” 且仅当 “x”前面为 “y” 时才匹配     |
| `x(?!y)`   | 正向否定查找，匹配 "x" 且仅当 “x”后面不是“y”时才匹配 |
| `(?<!y>)x` | 反向否定查找，匹配 "x" 且仅当 “x”前面不是“y”时才匹配 |


## 练习

### 1. 请把类似 “100000000” 这样的一串字符串数字 转成 “100.000.000” 这种格式

<details>
<summary>答案</summary>

```js
var str = "100000000";
var reg = /\B(?=(\d{3})+$)/g;
str = str.replace(reg,'.');
// str: 100.000.000
```
解释： 
- `(\d{3})+` 为多次匹配3个数字的组合 加上`$`后 从末尾位置开始匹配
- 接着使用先行断言 `x(?=y)` 只匹配3个数字组合的前面字符 
- 前面加上 `\B` 是因为有可能str的长度刚好是3的倍数 所以会匹配到第一字符前的单词边界，所以这里只匹配非单词边界
</details>

### 2.实现一个能够解析url的 函数 parseUrl();


例：执行parseUrl(“`https://www.example.com/query/list?type=string&size=1024#123`”)

返回一个对象:
```js
{
    protocol:"https",
    host:"www.example.com",
    path:"/query/list",
    query:{
        type:"string",
        size:"1024"
    },
    hash:"123"
}
```
<details>
<summary>答案</summary>

```js
function parseUrl(url) {
    const reg = /^(https?):\/\/([\w\.]+)((?:\/\w{0,}){0,})\??([\w=&\.]{0,})#?(.{0,})/;
    const flag = reg.test(url);
    if(!flag) return null;
    return {
        protocol: RegExp.$1,
        host: RegExp.$2,
        path: RegExp.$3,
        query: formatQuery(RegExp.$4),
        hash: RegExp.$5,
    };
    // 格式化query参数
    function formatQuery(query) {
        if (!query) return {};
        let obj = {};
        query.split("&").forEach((item) => {
            const [key, val] = item.split("=");
            obj[key] = val;
        });
        return obj;
    }
}
const parse = parseUrl("https://www.example.com/query/list?type=string&size=1024#123");
```
</details>


### 3.提取图片链接
<details>
<summary>答案</summary>

```js
function getImgUrl(html){
    const reg = /https?:\/\/[\w.\/]+\.(png|jpg|gif|jpeg)/g;
    return html.match(reg);
}
console.log(getImgUrl(`<img src="https://www.wisen.top/imgs/u/abc.jpg">`));
```
</details>


## 参考资源
[MDN正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

[JavaScript 正则入门到掌握](https://juejin.im/post/5c711de16fb9a049c43e4af2)

[常用JS正则大全](https://juejin.im/post/5d245d4151882555300feb77)

[es6正则的扩展-阮一峰](https://es6.ruanyifeng.com/#docs/regex)