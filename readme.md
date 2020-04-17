# 随机数据服务

> Web产品往往存在前后端并行开发，前端研发中需要定义View层的Model数据，完整的Model数据可以快速的完成UI自测，为了生成Model层随机数封装一个库函数

# 快速开始
  ```
    // 安装

    // 测试
    npm run test
  ```

# type类型定义

```
  export type IGenerate = {
    (data: any, index: number): string
  }
```

# API
## randomInt(min: number, max?: number)
> 生成一个随机整数
```
  randomInt(10) 生成一个[0, 10]中的一个数
  randomInt(100, 200) 生成一个[100, 200]中的一个数
```

## randomChar()
> 生成一个随机Char
```
  randomChar() // 生成一个[a-zA-Z]中的Char
```

## randomStr(len: number)
> 生成一个随机字符串
```
  randomStr(20) // 生成一个长度为20的字符串
```

## randomArray(len: number, template: IGenerate)
> 生成一个随机数组
```
  randomArray(5, randomChar) // 生成一个长度为50个字符数组
```

## randomChineseChar()
> 生成一个随机汉字
```
  randomChineseChar() // 生成一个随机中文字符
```

## randomChineseStr(len: number)
> 生成一个随机汉字串
```
  randomChineseStr(20) // 生成一个20字符的中文串
```

# 别名
```
  const $ = {
    int,
    char,
    str,
    chChar,
    chStr,
    array
  }
```
