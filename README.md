# UglifyIssue
Example of Uglify Issue

After cloneing the repo simply run:

`npm install`  
`grunt`

This will generate a build folder with a minified and a map file.

(Alternately simply run `uglifyjs testcase.js --source-map testcase.js.map -o testcase.min.js` in the src folder)

minified file produced

```javascript
var something={get myCalculatedValue(){return 9}};
//# sourceMappingURL=testcase.min.js.map
```

map file produced

```javascript
{"version":3,"file":"testcase.min.js","sources":["../src/testcase.js"],"names":["something",{"end":{"file":"../src/testcase.js","comments_before":[],"nlb":false,"endpos":41,"endcol":22,"endline":2,"pos":24,"col":5,"line":2,"value":"myCalculatedValue","type":"name"},"start":{"file":"../src/testcase.js","comments_before":[],"nlb":false,"endpos":41,"endcol":22,"endline":2,"pos":24,"col":5,"line":2,"value":"myCalculatedValue","type":"name"},"name":"myCalculatedValue"},"myCalculatedValue"],"mappings":"AAAA,GAAIA,YACHC,GAAIC,qBACH,MAAO"}
```

The map file has an object in the names array

```javascript
"names":["something",{"end":{"file":"../src/testcase.js","comments_before":[],"nlb":false,"endpos":41,"endcol":22,"endline":2,"pos":24,"col":5,"line":2,"value":"myCalculatedValue","type":"name"},"start":{"file":"../src/testcase.js","comments_before":[],"nlb":false,"endpos":41,"endcol":22,"endline":2,"pos":24,"col":5,"line":2,"value":"myCalculatedValue","type":"name"},"name":"myCalculatedValue"},"myCalculatedValue"]
```
