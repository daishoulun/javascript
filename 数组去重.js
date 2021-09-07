let arr = [1,2,3,4,null,null,'3','abc', 3,4,5,1,2,2,3,null,null,'3', 'abc', 3, 5, 4]
{
  /**
   * 1. 利用对象的key唯一去重
   *   此方法，当数据量庞大师会有性能问题
   * 
   * 数组塌陷
   *  在对数组进行操作的时候，会使数组的长度产生变化
   *  同时操作的数组那个项的下一个索引会被跳过，从而造成数组的某项会被跳过
   *  这种叫做数组塌陷现象。
  */
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (obj[item] !== undefined) {
      arr.splice(i, 1)
      i--; // 解决数组塌陷
      continue;
    }
    obj[item] = item
  }
}
