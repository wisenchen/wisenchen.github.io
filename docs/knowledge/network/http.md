# HTTP 协议
> 重新学习一遍 HTTP 协议，了解其基本原理。

## 1. HTTP 协议简介

HTTP（HyperText Transfer Protocol）是一种用于传输超文本（如 HTML）的应用层协议。它是一种请求-响应协议，客户端发送请求到服务器，服务器返回响应。

## 2. HTTP 协议的前世今生

### 2.1 HTTP 0.9/1.0

HTTP 0.9 只支持 GET 方法，没有 header，只能传输文本。

HTTP 1.0 引入了 POST 和 HEAD 方法，增加了 header 的概念，可以传输其他类型的数据。

### 2.2 HTTP 1.1

HTTP 1.1 是当前最常用的版本，它引入了许多重要的特性，如持久连接、管道化请求、分块传输编码等。

### 2.3 HTTP 2

HTTP 2 引入了多路复用，可以在一个 TCP 连接上并行发送多个请求或响应。它还引入了头信息压缩，减少了协议的开销。

### 2.4 HTTP 3

HTTP 3 是最新的版本，它使用 QUIC 协议替代了 TCP，以解决 HTTP 2 中的队头阻塞问题。QUIC 协议提供了更低的延迟和更好的性能。

## 3. HTTP 协议的缓存

HTTP 缓存是一种重要的性能优化技术，它可以减少网络延迟和带宽使用。HTTP 缓存通过使用一些特定的 HTTP 头信息，如 `Cache-Control`、`ETag` 和 `Last-Modified`，来控制资源的缓存行为。

# 参考
- [HTTP 的前世今生](https://coolshell.cn/articles/19840.html)
- [图解 HTTP](/knowledge/book/图解HTTP+彩色版.html)