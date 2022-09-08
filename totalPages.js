const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  let arr = new Array()
  arr = arrayItems

  if (arrayItems == null || arrayItems == undefined) {
    return undefined
  } else if (rowsPerPage == null || rowsPerPage == undefined || rowsPerPage == 0) {
    return 1
  } else {
    return Math.ceil(arr.length / rowsPerPage)
  }
}
module.exports = totalPages
let arr =null
console.log(totalPages(arr,15))