# 原型模式

## 什么是原型模式，实际应用场景？

原型模式（Prototype Pattern）是一种创建型设计模式，它使用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。原型模式是一种比较简单的模式，特别适合需要大量相同或相似对象的场景。

实际应用场景有：

- 大量相同或相似对象的创建：例如，你需要创建一个大量的相同的对象，这些对象的创建成本较高。你可以使用原型模式来提高性能。
- 需要复制或克隆对象：例如，你需要复制或克隆一个对象，而这个对象的内部状态复杂或难以追踪。你可以使用原型模式来简化这个过程

## JavaScript 中的原型模式实现

```js
// 原型对象
const carPrototype = {
  drive() {
    return 'Driving...';
  },

  brake() {
    return 'Braking...';
  },

  // 克隆方法
  clone() {
    // 使用 Object.create 方法创建一个新的对象，并将当前对象作为新对象的原型
    return Object.create(this);
  }
};

// 使用示例
const car1 = carPrototype.clone();
console.log(car1.drive()); // 输出：Driving...

const car2 = carPrototype.clone();
console.log(car2.brake()); // 输出：Braking...
```
