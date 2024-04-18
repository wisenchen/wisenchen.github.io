# 装饰器模式

## 什么是装饰器模式，实际应用场景？

装饰器模式（Decorator Pattern）是一种结构型设计模式，它允许你在运行时动态地将行为添加到对象中。装饰器模式可以提供比继承更有弹性的替代方案。

实际应用场景：

- 动态添加功能：例如，你有一个简单的文本编辑器，你可以通过装饰器模式动态地添加一些额外的功能，如文本高亮、拼写检查等。

- 代码维护：装饰器模式可以让你在不修改原有代码的基础上添加新的功能，这对于代码维护来说非常有用。

## JavaScript 中的装饰器模式实现

```js
// 基础对象
class SimpleCoffee {
  getCost() {
    return 10;
  }

  getDescription() {
    return "Simple coffee";
  }
}

// 装饰器基类
class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost();
  }

  getDescription() {
    return this.coffee.getDescription();
  }
}

// 具体装饰器
class MilkCoffee extends CoffeeDecorator {
  getCost() {
    return this.coffee.getCost() + 2;
  }

  getDescription() {
    return this.coffee.getDescription() + ", with milk";
  }
}

// 使用示例
let coffee = new SimpleCoffee();
console.log(coffee.getCost()); // 10
console.log(coffee.getDescription()); // Simple coffee

coffee = new MilkCoffee(coffee);
console.log(coffee.getCost()); // 12
console.log(coffee.getDescription()); // Simple coffee, with milk
```
在这个例子中，SimpleCoffee 是基础对象，CoffeeDecorator 是装饰器基类，MilkCoffee 是具体装饰器。我们可以通过 MilkCoffee 装饰器动态地给 SimpleCoffee 对象添加新的行为。
