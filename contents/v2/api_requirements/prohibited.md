# Prohibited Goods Check

endpoint: `prohibited-check/{hs_code:[0-9]{6,12}}/{departure:[A-Z]{2}}/{destination:[A-Z]{2}}`

hs_code: `string` `Min:6 Max:12 character`  

departure: `string` `capital` `Min:2 Max:2 character`  
_(ISO 3166-1 Alpha-2 code)_  

destination: `string` `capital` `Min:2 Max:2 character`  
_(ISO 3166-1 Alpha-2 code)_  

### Example: 
```url
GET {url}/prohibited-check/9306901000/KP/IE
```
### Result:
_statuscode_: 200 OK  
format: Json String -> Boolean

```json
true
```
