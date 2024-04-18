# JavaScript 新知识

## API

- [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)

  跨源通信 可以进行不同页面之间的通信

  window.postMessage(msg, targetOrigin, [transfer]) 发送信息

  window.addEventListener("message",fn) 接收

- [element.insertAdjacentHTML(position, text)](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

  - position
    1. beforebegin 插入到自身之前 同级插入
    2. afterbegin 插入到元素的最前一个子节点
    3. beforeend 插入为元素的最后一个子节点 即 “ appendChild ”
    4. afterend 插入到自身之后 同级插入
  - text

    可以为 html 字符串 也可以为一个 dom 元素

  类似方法

  1.  insertAdjacentElement(position, dom) 在指定位置插入 dom 元素
  2.  insertAdjacentText(position, text) 在指定位置插入文字

- [element.replaceWith(element1)](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith)

  替换元素

  > 注意用来替换的新元素替换后会被删除 即可以理解为移动该元素

- [element.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)

  删除该节点及其所有子节点

- [DOMParser](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser)

  将 XML 或 HTML 源代码解析为一个 DOM Document

- [element.matches(selectorString)](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/matches)

  检查一个 dom 元素是否与一个 css 选择器匹配 匹配返回 true

- [node.contains(otherNode)](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/contains)

  检查一个节点是否包含传入的子节点

- [node.compareDocumentPosition(otherNode)](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition)

  返回与传入节点的位置关系

- [MutationObserver(callback)](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)

  监听 dom 元素变化

- [window.requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)

  向浏览器请求执行动画 [参考文章](https://www.cnblogs.com/onepixel/p/7078617.html)

- [document.execCommand](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand)

  对可编辑区域执行命令(复制选中内容、删除选中部分等)

- [window.Notification](https://developer.mozilla.org/en-US/docs/Web/API/notification)

  ```
  // 弹出授权提示框 同意之后即可使用
    Notification.requestPermission(function (status) {
      if (status === "granted") {
           var n = new Notification("hello world");
       }
  });
  ```

  只在 https 环境可用 用于向浏览器发送通知 会在指定位置弹出通知框

- [navigator.getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia)

  调用浏览器 API 使用录音功能

- [navigator.geolocation](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/Using_geolocation)

  获取地理位置

- [Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

  返回元素的宽高(可以替代 offsetWidth/offsetHeight)及其相对于视口的位置。

- [FileReader API](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)

  读取本地文件，获取到对应blob数据格式 

  用法可参考[选择本地图片 -> 图片预览](https://juejin.im/post/5f01ddfee51d4534c36d8914#heading-1)
- [Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)

根据一个链接请求一个资源（通常是图片数据）返回一个promise 

用法可参考[网络下载图片 -> 图片预览](https://juejin.im/post/5f01ddfee51d4534c36d8914#heading-5)

- [Unit8Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
  8位无符号整型数组,只能存储数字最大为8位即（255）

## **事件**

- [copy](https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event)

  监听复制事件 window.oncopy | dom.oncopy

### [位运算](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift)（被操做数转二进制运算）
- 按位与 " **&** "
  转二进制按位比较 都为1则返回1否则返回0

- 按位或 " **|** "
  转二进制按位比较 相同位只要有一位为1就返回1否则为0

- 按位异或 " **^** "
  转二进制按位比较 相同位有且仅有一个1时返回为1，其他都是0。（即对应位不能都是0或都是1） 0 与n进行异或运算 结果为n

- 按位非 " **~** "

  取反（即求反码） 
- 左移 " **<<** "

  转二进制向左移动指定位数右侧填充0
- 有符号右移 " **>>** "

  规则: 将被操做数转二进制数后向右移指定位数 最左侧使用原高位数填充 所以会保留符号（即+/-）
  > 补充：负数的二进制最高位为1正数为0

  例子1：9 >> 2

    转32位二进制 000...1001(base2) ==> 000...0010(base2) ==> 2(base10)

  例子2：-9 >> 2

    转32位二进制 111...0111(base2) ==> 111...1101(base2) ==> -3(base10)
  > 补充： 负数的二进制表示：原码>>反码>>补码
    1. 先转正数的原码 
    2. 原码的取反得到反码
    3. 反码的基础上+1得到补码

- 无符号右移 " **>>>** "

  规则：将被操作数转二进制后向右移动指定位数 最左侧使用0补充 
  > 补充：由于使用0补充最高位所以结果始终是正数  使用>>>操作正数与>>结果相同

  负数例子1：-9 >>> 2

    转32位二进制 111...0111(base2) ==> 001...1101(base2) ==> 1073741821 (base10)
  
  负数例子2：-1 >>> 0
    结果为 4294967295
    > 解释： js 中无符号右移时，不管正数、负数都会首先将符号位替换成 0，然后再进行移位。也就是说，该运算符永远返回正整数。
        
