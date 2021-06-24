# VAT Number validation
##### A feature to validate a company's VAT number

Planned features:

- [X] VAT number validation
- [ ] Cache Service
- [ ] Name Validation
- [ ] Throttle 
- [ ] Zero Downtime

## What is a VAT number?

Sometimes also known as a VAT registration number, 
this is the unique number that identifies a taxable person (business) or non-taxable legal entity that is registered for VAT.


## VAT Number Format
Every VAT identification number must begin with the code of the country concerned and followed by a block of digits or characters.

Each EU country uses [its own format of VAT identification number](http://ec.europa.eu/taxation_customs/vies/faqvies.do#item_11).


## API endpoint

[Endpoint documentation can be found here](https://documenter.getpostman.com/view/6991677/TVzUCFmy#d31a18fb-7572-47f7-9ee1-d327533e7e0b) 

To validate a number via API request, you must send your `GET` request with a `Bearer Token` within the header to the following URL:

```url
{{url}}/v2/ioss/validate/{{vat_number}}
```
> Note:
> You can validate ONE item / request.




Your request will return in case of:

### - Success:
Response with status: `200`
A Json text containing:
- valid `boolean`
- companyNameSupport `boolean`


```json
{
"countryCode": "HU",
"vatNumber": "12618398",
"requestDate": "2021-05-05+02:00",
"valid": true,
"name": "FLEXI FORCE HUNGARY GYÁRTÓ ÉS KERESKEDELMI KORLÁTOLT FELELŐSSÉGŰ TÁRSASÁG",
"address": "RICHTER GEDEON UTCA 24 4031 DEBRECEN",
"companyNameSupport": true
}
```

### - Failed:
Response with status: `200`
```json
{
    "countryCode": "HU",
    "vatNumber": "12618398212312",
    "requestDate": "2021-05-06+02:00",
    "valid": false,
    "name": "---",
    "address": "---",
    "companyNameSupport": false
}
```

### - Unauthorized:
Response with status: `401`
```json
{
    "name": "Unauthorized",
    "message": "Your request was made with invalid credentials.",
    "code": 0,
    "status": 401,
    "type": "yii\\web\\UnauthorizedHttpException"
}
```

> Please Note: if a company name is not supported or your request was not valid the name and the address fields will be `---` as a string.
```json
  ...
  "name": "---",
  "address": "---",
  ...
```



## Admin site

`Admin Site > Parcel > New parcel` 

On the Admin site, while you creating a new parcel, you can enter your `EORI Number (Tax ID)` which will
validate after pressing the `Validate EORI` button, and will result the following:

### Correct / Valid VAT number 
<ImageZoom
src="images/ioss/ioss_vat_correct.png"
:border="true"
width="300"
/>

### Incorrect / Invalid VAT number
<ImageZoom
src="images/ioss/ioss_vat_incorrect.png"
:border="true"
width="300"
/>

> Please note, having an invalid VAT number will not prevent you to save your parcel.



## Client site

- This Feature Not yet implemented on the client side
