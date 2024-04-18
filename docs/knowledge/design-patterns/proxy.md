# 代理模式

## 什么是代理模式，实际应用场景？

代理模式（Proxy Pattern）是一种结构型设计模式，它提供了一个代理来控制对原对象的访问。你可以使用代理模式在不改变原对象的情况下添加一些额外的功能。


实际应用场景：

- 数据验证：例如，你有一个对象，它的某些方法需要接收特定格式的数据。你可以使用代理模式来验证数据。

- 缓存：例如，你有一个需要访问远程服务的对象。你可以使用代理模式来缓存远程服务的响应，从而提高性能。

- 延迟加载：例如，你有一个需要加载大量数据的对象。你可以使用代理模式来实现延迟加载，从而提高应用的启动速度。

## JavaScript 中的代理模式实现

```js
// 原对象
class RealImage {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk();
  }

  loadFromDisk() {
    console.log('Loading ' + this.filename);
  }

  display() {
    console.log('Displaying ' + this.filename);
  }
}

// 代理对象
class ProxyImage {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null;
  }

  display() {
    if (this.realImage == null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// 使用示例
const image1 = new ProxyImage('image1.jpg');
image1.display(); // 输出：Loading image1.jpg, Displaying image1.jpg

const image2 = new ProxyImage('image2.jpg');
image2.display(); // 输出：Loading image2.jpg, Displaying image2.jpg
```
