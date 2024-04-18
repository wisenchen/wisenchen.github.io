# 迭代器模式

## 什么是迭代器模式，实际应用场景？

迭代器模式（Iterator Pattern）是一种行为设计模式，它提供了一种方法来访问一个对象的元素，而不需要暴露这个对象的底层表示


实际应用场景：

- 遍历复杂数据结构：例如，你有一个复杂的数据结构（如树或图），你需要遍历这个数据结构的所有元素。你可以使用迭代器模式来实现这个需求。

- 分页：例如，你需要从数据库中获取大量的数据，但是一次性获取所有数据可能会导致内存溢出。你可以使用迭代器模式来实现分页，每次只获取一部分数据。

## JavaScript 中的迭代器模式实现

```js
class Iterator {
  constructor(items = []) {
    this.index = 0;
    this.items = items;
  }

  first() {
    this.reset();
    return this.next();
  }

  next() {
    return this.items[this.index++];
  }

  hasNext() {
    return this.index <= this.items.length;
  }

  reset() {
    this.index = 0;
  }

  each(callback) {
    for (let item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  }
}

// 使用示例
const iterator = new Iterator(['apple', 'banana', 'cherry']);
iterator.each(item => console.log(item)); // 输出：apple, banana, cherry
```
