# About

This project compares the speed of different Node.JS csv parsers.

## To start

```
$ git checkout https://github.com/Keyang/csvbench
$ npm install .
$ node ./index.js
```

## Procedure

All parsers will simply do following

1. stream in 1.csv and start to parse
2. get content from 1st column of each row and write to a file


`1.csv` contains 300K lines

# Result

Here is some result running on a 2013 Macbook Pro: 

```
$ node ./index.js
fast-csv: 5248.767ms
csv: 3798.266ms
csvtojson: 948.493ms
$ node --version
v6.9.1
```

