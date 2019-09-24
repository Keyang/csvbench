# About

This project compares the speed of different Node.JS csv parsers.

## To start

```
$ git clone https://github.com/Keyang/csvbench
$ npm install .
$ node ./index.js
```

## Procedure

All parsers will simply do following

1. stream in 1.csv and start to parse
2. get content from 1st column of each row and write to a file


`1.csv` contains 300K lines

# Result

Here is some result running on a 2019 Macbook Pro: 

```
$ node ./index.js
fast-csv: 1594.408ms
csv: 1890.357ms
csvtojson: 437.571ms
csv-parser: 726.146ms
$ node --version
v12.4.0
```

