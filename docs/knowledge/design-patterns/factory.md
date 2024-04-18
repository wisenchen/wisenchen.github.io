# 工厂模式

## 什么是工厂模式，实际应用场景？

工厂模式(Factory Pattern)是一种创建型的设计模式，它提供了一种在创建对象时不直接使用构造函数，而是通过工厂函数来创建对象。在该模式中，我们在创建对象时无需明确地指定其类，只需要调用工厂函数即可。

## JavaScript 中的工厂模式实现

```js
// 创建产品类A
class ProductA {
    constructor(){
        console.log("ProductA created");
    }
}

// 创建产品类B
class ProductB {
    constructor(){
        console.log("ProductB created");
    }
}

// 创建工厂
class ProductFactory {
    // 通过type创建产品
    createProduct(type) {
        // 检查产品类型并创建相应的实例
        if (type === "ProductA") {
            return new ProductA();
        } else if (type === "ProductB") {
            return new ProductB();
        }
    }
}

// 实例化一个工厂
const factory = new ProductFactory();

// 利用工厂创建产品实例
const productA = factory.createProduct('ProductA');
const productB = factory.createProduct('ProductB');
```
