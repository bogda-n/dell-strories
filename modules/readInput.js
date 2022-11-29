const path = require("path")
const fs = require("fs-extra")
const excelToJson = require("simple-excel-to-json")

module.exports.readJson = function () {
  const inputFile = path.resolve(__dirname, '../input/export.json')
  const filesObject = fs.readFileSync(inputFile, {
    encoding: 'utf8',
    flag: 'r'
  })
  const jsonObject = JSON.parse(filesObject)
  return jsonObject
}

module.exports.readExcel = function () {
  const inputFile = path.resolve(__dirname, '../input/input.xlsx')
  const excel = excelToJson.parseXls2Json(inputFile)
  return excel[0]
  // for (const product of excel[0]) {
  //   // file data
  //   // const downLoadUrl = product['Portal_Link'].replace('preview', 'download')
  //   const productSku = product['Part_Number']
  //   const dellLink = product['Dell_Product_Link']
  //   const fileCountry = product['Country']
  //   const fileLanguage = product['Language']
  //   const locale = `${fileCountry}-${fileLanguage}`
  //   const language = languagesMap[locale]
  //   const brand = product['Brand']
  // }
}