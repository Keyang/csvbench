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
csv: 1844.045ms
fast-csv: 1681.046ms
csv-parser: 722.762ms
csvtojson: 436.225ms
papaparse: 434.335ms
$ node --version
v12.4.0
```

