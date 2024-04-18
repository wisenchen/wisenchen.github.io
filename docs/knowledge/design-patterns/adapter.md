# 适配器模式

## 什么是适配器模式，实际应用场景？

适配器模式（Adapter Pattern）是一种结构型设计模式，它允许你将一个类的接口转换成客户端期望的另一个接口。适配器模式可以帮助我们使得原本由于接口不兼容而不能一起工作的类可以一起工作。

实际应用场景：

- 前端应用中适配器模式非常适合处理不兼容接口之间的适配问题。

- 数据格式转换：例如，一个函数期望接收一个数组，但是你需要传递一个对象给它。你可以创建一个适配器，将对象转换为数组，然后传递给这个函数。

- 封装旧接口：例如，你的代码依赖于一个第三方库，但是这个库的接口设计不符合你的期望。你可以创建一个适配器，封装这个库的接口，使得这个库的接口更符合你的期望。

## JavaScript 中的适配器模式实现

```js
// 旧接口
class OldCalculator {
  constructor() {
    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case "add":
          return term1 + term2;
        case "sub":
          return term1 - term2;
        default:
          return NaN;
      }
    };
  }
}

// 新接口
class NewCalculator {
  constructor() {
    this.add = function (term1, term2) {
      return term1 + term2;
    };
    this.sub = function (term1, term2) {
      return term1 - term2;
    };
  }
}

// 适配器
class CalculatorAdapter {
  constructor() {
    const newCalc = new NewCalculator();

    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case "add":
          // 使用新接口
          return newCalc.add(term1, term2);
        case "sub":
          // 使用新接口
          return newCalc.sub(term1, term2);
        default:
          return NaN;
      }
    };
  }
}

// 使用示例
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, "add")); // 15

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5)); // 15

const adaptedCalc = new CalculatorAdapter();
console.log(adaptedCalc.operations(10, 5, "add")); // 15
```
