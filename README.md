# NumberTransformRoman

一个用于数字转换成罗马数字的 `Class` 类，你可以使用 `transformRoman` 来进行数字转换罗马数字，也可以使用 `calculation` 来进行计算再转罗马数字.

---

##### 引入

```Javascript
import NumberTransformRoman as ntr from 'NumberTransformRoman'  // ntr 为 NumberTransformRoman 简写
```

##### 使用方法

###### transformRoman

> transformRoman(type: number | string ) 数字转换罗马数字

```Javascript
    import NumberTransformRoman as ntr from 'NumberTransformRoman'  // ntr 为 NumberTransformRoman 简写
    
    // 数字类型
    new ntr().transformRoman(990108010)  // 结果为:CMXC#,C#VIII,#X#

    // 或者

    // 字符串类型
    new ntr().transformRoman('80108010')  // 结果为:LXXX#,C#VIII,#X#
```

###### calculation

> calculation(type: function ) 数字计算表达式

```Javascript
    import NumberTransformRoman as ntr from 'NumberTransformRoman'  // ntr 为 NumberTransformRoman 简写
    
    // 参数为匿名函数表达式
    new ntr().calculation(() => 2 * 6 / 3)  // 结果为:IV

    // 注意：如果匿名函数加了 {} ,请加 return 语句

    // 加了 {return xxx}
    new ntr().calculation(() => {return 2 * 6 / 3})  // 结果为:IV
```

---

##### 注

###### 罗马数字里的0

罗马数字里没有 0，所以在此使用 `#` 来代替，避免计算时得出的结果包含 0

> 后续可以进行splice，自行去转换

###### 罗马数字的位数

因为罗马数字里最大只有千位符 (M) ,所以在此进行了千位分隔符，返回的数据将呈现为 xxx,xxx,xxx
