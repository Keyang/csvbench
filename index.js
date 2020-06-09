// var csv=require('fast-csv')
// var csv=require('csv')
var csvtojson = require('csvtojson')
var csv = require('csv')
var fastCsv = require('fast-csv')
var csvParser = require('csv-parser')
var Papa = require('papaparse')

var csvFile = '1.csv'
var outputFile = "output.txt";
console.time("fast-csv")
testFastCsv(function () {
  console.timeEnd("fast-csv")
  console.time("csv")
  testCsv(function () {
    console.timeEnd("csv")
    console.time("csvtojson")
    testCsvToJson(function () {
      console.timeEnd("csvtojson")
      console.time("csv-parser")
      testCsvParser(function () {
        console.timeEnd("csv-parser")
        console.time("papaparse")
        testPapaParse(function () {
          console.timeEnd("papaparse")
        })
      })
    })
  })
})

function testCsvToJson(cb) {
  var fileName = "csvtojson-" + outputFile;
  var ws = require('fs').createWriteStream(fileName)
  csvtojson({
    noheader: true
  })
    .fromFile(csvFile)
    .on("csv", function (d) {
      ws.write(d[0] + "\n")
    })
    .on("end", function () {
      cb()
    })
}

function testFastCsv(cb) {
  var fileName = "fastcsv-" + outputFile;
  var ws = require('fs').createWriteStream(fileName)
  fastCsv
    .fromPath(csvFile)
    .on("data", function (d) {
      ws.write(d[0] + "\n")
    })
    .on("end", function () {
      cb()
    })
}

function testCsv(cb) {
  var fileName = "csv-" + outputFile;
  var ws = require('fs').createWriteStream(fileName)
  var rs = require('fs').createReadStream(csvFile)
  var stream=csv.parse();
  rs.pipe(stream)
  .on("data",function(d){
    ws.write(d[0] + "\n")
  })
  .on("end",function(){
    cb();
  })
}

function testCsvParser(cb) {
  var fileName = "csvParser-" + outputFile;
  var ws = require('fs').createWriteStream(fileName)
  var rs = require('fs').createReadStream(csvFile)
  var stream = csvParser();
  rs.pipe(stream)
  .on("data",function(d){
    ws.write(d[0] + "\n")
  })
  .on("end",function(){
    cb();
  })
}

function testPapaParse(cb) {
  var fileName = "papaParse-" + outputFile;
  var ws = require('fs').createWriteStream(fileName)
  var rs = require('fs').createReadStream(csvFile)
  var stream = Papa.parse(Papa.NODE_STREAM_INPUT)
  rs.pipe(stream)
  .on("data",function(d){
    ws.write(d[0] + "\n")
  })
  .on("end",function(){
    cb();
  })
}