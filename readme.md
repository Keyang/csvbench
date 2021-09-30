# About

This project compares the speed of different Node.JS csv parsers.

## To start

```
$ git clone https://github.com/Keyang/csvbench
$ npm install .
$ node ./index.js
```

## Procedure

All parsers (except `lil-csv`) will simply do following

1. stream in 1.csv and start to parse
2. get content from 1st column of each row and write to a file

The `lil-csv` would

1. read the whole 1.csv without streaming
2. get content from 1st column of each row and write to a file

`1.csv` contains 300K lines

# Result

Here is some result running on a 2019 Macbook Pro: 

```
$ node ./index.js
fast-csv: 1438.705ms
csv: 2346.760ms
csvtojson: 435.524ms
csv-parser: 878.652ms
papaparse: 430.366ms
lil-csv: 1135.411ms
$ node --version
v12.4.0
```

