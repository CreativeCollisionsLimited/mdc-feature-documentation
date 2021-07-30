# landed Cost Calculation

<Note type="danger">
The Content of this page is subject to change at any point in time.
</Note>

### Url:
```url 
POST {{url}}/lcc/main
```

## Single Calculation

### Input
```json
{
    "calculation_currency": "EUR",
    "incoterm": "cif",
    "calculation_type": "single_item",
    "object_total_value": 400,
    "country_code_departure": "US",
    "country_code_destination": "DE",
    "auto_classification": true,
    "auto_description": false,
    "auto_prohibited_check": true,
    "shipping": {
        "international_freight": 0.00,
        "until_gateway_freight": 10.00,
        "until_gateway_charges": 10.00,
        "after_gateway_cost": 10.00,
        "after_gateway_charges": 10.00
    },
    "insurance": {
        "charges": 10
    },
    "item": {
        "product_code": 240210,
        "product_description": "Tobacoo product",
        "country_code_origin": "CH",
        "units": 1,
        "price_per_unit": 400,
        "extra_cost": 0,
        "weight": 30,
        "weight_unit": "KG",
        "sku": null,
        "attributes": null
    }
}
```
### Output
```json
{
    "rates": {
        "duty": 26,
        "vat": 19
    },
    "calculated": {
        "parcel_value": 400,
        "customs_value": 430,
        "vat_base": 561.8,
        "is_standard_rate_apply": false,
        "is_within_duty_free_allowance": false,
        "is_tobacco": true,
        "is_alcohol": false,
        "is_prohibited": false
    },
    "total_custom_charges": {
        "duty_total": 111.8,
        "vat_total": 106.74199999999999,
        "total": 218.54199999999997
    }
}
```



## Multi Calculation

### Input
_updated: 2021-07-30_
```json
{
  "reference_num": "ABq3489234lsdaiaw",
  "calculation_currency": "EUR",
  "incoterm": "cif",
  "calculation_core": "multiple",
  "object_total_value": 280,
  "country_code_departure": "CN",
  "country_code_destination": "DE",
  "auto_classification": true,
  "auto_description": false,
  "auto_prohibited_check": true,
  "shipping": {
    "international_freight": 0,
    "until_gateway_freight": 3,
    "until_gateway_charges": 3,
    "after_gateway_cost": 2,
    "after_gateway_charges": 2
  },
  "insurance": {
    "charges": 10
  },
  "items": [
    {
      "product_code": 61034200,
      "product_description": "Pair Jeans for men 100% cotton size L",
      "country_code_origin": "CH",
      "units": 1,
      "price_per_unit": 90,
      "extra_cost": 0,
      "weight_total": null,
      "weight_per_unit": 0.4,
      "weight_unit": "KG",
      "sku": null,
      "attributes": null
    },
    {
      "product_code": 61034200,
      "product_description": "Pair Jeans for men 100% cotton size M",
      "country_code_origin": "CH",
      "units": 1,
      "price_per_unit": 85,
      "extra_cost": 0,
      "weight_total": 0.4,
      "weight_per_unit": null,
      "weight_unit": "KG",
      "sku": null,
      "attributes": null
    },
    {
      "product_code": 61034200,
      "product_description": "Pair Jeans for men 100% cotton size S",
      "country_code_origin": "CH",
      "units": 1,
      "price_per_unit": 80,
      "extra_cost": 0,
      "weight_total": 0.4,
      "weight_per_unit": 0.4,
      "weight_unit": "KG",
      "sku": null,
      "attributes": null
    },
    {
      "product_code": 48191000,
      "product_description": "Carton (present packaging)",
      "country_code_origin": "CH",
      "units": 3,
      "price_per_unit": 5,
      "extra_cost": 0,
      "weight_total": 0.15,
      "weight_per_unit": null,
      "weight_unit": "KG",
      "sku": null,
      "attributes": null
    }
  ]
}
```

### Output
_updated: 2021-07-30_
```json
{
  "total_custom_charges": {
    "duty_total": 31.24,
    "vat_total": 59.135600000000004,
    "total": null
  },
  "calculated": {
    "customs_value": 276,
    "vat_base": 311.24,
    "totalWeight": 1350,
    "total_shipping_cost_until_gateway": 6,
    "total_shipping_cost_until_gateway_per_base_unit": 0.0044444444444444444
  },
  "items": {
    "0": {
      "product_code": 61034200,
      "product_description": "Pair Jeans for men 100% cotton size L",
      "country_code_origin": "CH",
      "units": 1,
      "price_per_unit": 90,
      "extra_cost": 0,
      "weight_total": 400,
      "weight_per_unit": 400,
      "weight_unit": "g",
      "sku": null,
      "attributes": null,
      "shipping_until": 1.7777777777777777,
      "custom_value": 91.77777777777777,
      "duty_rate": 12,
      "duty_amount": 11.013333333333332
    },
    "1": {
      "product_code": 61034200,
      "product_description": "Pair Jeans for men 100% cotton size M",
      "country_code_origin": "CH",
      "units": 1,
      "price_per_unit": 85,
      "extra_cost": 0,
      "weight_total": 400,
      "weight_per_unit": 400,
      "weight_unit": "g",
      "sku": null,
      "attributes": null,
      "shipping_until": 1.7777777777777777,
      "custom_value": 86.77777777777777,
      "duty_rate": 12,
      "duty_amount": 10.413333333333334
    },
    "2": {
      "product_code": 61034200,
      "product_description": "Pair Jeans for men 100% cotton size S",
      "country_code_origin": "CH",
      "units": 1,
      "price_per_unit": 80,
      "extra_cost": 0,
      "weight_total": 400,
      "weight_per_unit": 400,
      "weight_unit": "g",
      "sku": null,
      "attributes": null,
      "shipping_until": 1.7777777777777777,
      "custom_value": 81.77777777777777,
      "duty_rate": 12,
      "duty_amount": 9.813333333333333
    },
    "3": {
      "product_code": 48191000,
      "product_description": "Carton (present packaging)",
      "country_code_origin": "CH",
      "units": 3,
      "price_per_unit": 5,
      "extra_cost": 0,
      "weight_total": 150,
      "weight_per_unit": 50,
      "weight_unit": "g",
      "sku": null,
      "attributes": null,
      "shipping_until": 0.6666666666666666,
      "custom_value": 15.666666666666666,
      "duty_rate": 0,
      "duty_amount": 0
    }
  },
  "reference_num": "ABq3489234lsdaiaw"
}
```