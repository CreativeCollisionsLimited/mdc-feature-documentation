# HS Classification

<Note type="danger">
The Content of this page is subject to change at any point in time.
</Note>

## GET Classification from a description

endpoint: `/hs/calssification/{destinationCountryCode:[A-Z]{2}}/{description:[a-zA-Z0-9, - ']{3,255}}`

description: `string` `Min:3 Max:255 character`

destinationCountryCode: `string` `capital` `Min:2 Max:2 character`  
_(ISO 3166-1 Alpha-2 code)_


Return a json element with the code and the descriptions

### Example:

```url
GET {url}/hs/calssification/IE/Not Roasted Coffee Beans
```

### Result:

_statuscode_: 200 OK  
format: Json

```json
{
  "code": "691200",
  "description": "Tableware, kitchenware, other household articles and toilet articles, of ceramics other than porcelain or china (excl. baths, bidets, sinks and similar sanitary fixtures, statuettes and other ornamental articles, pots, jars, carboys and similar receptacles for the conveyance or packing of goods, and coffee grinders and spice mills with receptacles made of ceramics and working parts of metal)"
}
```


## GET Plausibility Check

Return a json boolean if the code, and the description aligned.

endpoint: `/hs/plausibility/{hs_code:[0-9]{6,12}}/{description:[a-zA-Z0-9, - ']{3,255}}`

hs_code: `string` `Min:6 Max:12 character`
description: `string` `Min:3 Max:255 character`



### Example:

```url
GET {url}/hs/plausibility/3404900000/Not Roasted Coffee Beans
```

### Result:

_statuscode_: 200 OK  
format: Json string -> boolean

```json
true
```

## GET Possible Classifications for the description as a list

Return a list of possible HS-Codes and descriptions

### Example:

```url
GET {url}/hs/calssification_list/IE/Not Roasted Coffee Beans
```

### Result:

_statuscode_: 200 OK  
format: Json

```json
[
  {
    "code": "691200",
    "description": "Tableware, kitchenware, other household articles and toilet articles, of ceramics other than porcelain or china (excl. baths, bidets, sinks and similar sanitary fixtures, statuettes and other ornamental articles, pots, jars, carboys and similar receptacles for the conveyance or packing of goods, and coffee grinders and spice mills with receptacles made of ceramics and working parts of metal)",
    "keyword": "baking bean"
  },
  {
    "code": "847439",
    "description": "Machinery for mixing or kneading solid mineral substances, incl. those in powder or paste form (excl. concrete and mortar mixers, machines for mixing mineral substances with bitumen and calenders)",
    "keyword": "bean grinder"
  },
  {
    "code": "3404900000",
    "description": "Artificial waxes and prepared waxes (excl. chemically modified lignite wax and poly\"oxyethylene\" [polyethylene glycol] waxes",
    "keyword": "hair removal bean"
  }
]
```
