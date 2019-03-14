let arr = ['1', '2', '3'].map(parseInt)
/* radix参数为n 将会把第一个参数看作是一个数的n进制表示，
而返回的值则是十进制的。例如： */
//parseInt('1',0)
//parseInt('2',1)  1只能存在 1
//parseInt('3',2) 2进制 能存在都数量只有1，2
console.log(arr)