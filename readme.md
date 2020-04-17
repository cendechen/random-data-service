# 随机数据服务

> 在前端的研发流程中，前后端往往是并行进行，在研发过程中需要给UI元素赋予一定的数据，才能完整的自测，需要一个细致的随机数函数库

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
  randomArray(50, randomChar) // 生成一个长度为50个字符数组
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

# type类型定义

```
  export type IGenerate = {
    (data: any, index: number): string
  }
```
