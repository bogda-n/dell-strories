const petService = require('./modules/petService')
const readInput = require('./modules/readInput')
const queueModule = require('./modules/queue')
const xlsx = require('xlsx')
const fs = require('fs-extra')
const path = require('path')
const excelToJson = require('simple-excel-to-json')


const processedProducts = []

const languagesMap = {
  'UK-EN': 'english',
  'DE-DE': 'german',
  'FR-FR': 'french',
  'IT-IT': 'italian',
  'ES-ES': 'spanish',
  'AT-DE': 'austrian-german',
  'CH-DE': 'swiss-german',
  'CH-FR': 'swiss-french',
  'CH-IT': 'swiss-italian',
  'BE_NL': 'belgian-dutch',
  'BE-FR': 'belgian-french',
  'BE-DE': 'belgian-german',
  'CO-ES': 'colombian-spanish',
  'MX-ES': 'mexican-spanish',
  'PE-ES': 'mexican-spanish',
  'CL-ES': 'mexican-spanish',
  'IE-EN': 'ireland-english'
}


const main = async() => {
  try{

  } catch (e) {
    console.error(e)
  }
}

async function start() {
  try {
    const productsJson = readInput.readExcel()
    console.log(productsJson)
    const queue = queueModule.queueSettings()
    const petToken = await petService.loginPet()
    const readExcel = await readInput.readExcel()
    for (const product in readExcel) {
      queue.add(() => main(productName, productsJson[productName], petToken))
    }
  } catch (e) {
    console.error(e)
  }
}


start()