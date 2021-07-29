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
```json
{
    "reference_num": "ABq3489234lsdaiaw",
    "calculation_currency": "EUR",
    "incoterm": "cif",
    "calculation_core": "multiple",
    "object_total_value": 400,
    "country_code_departure": "US",
    "country_code_destination": "DE",
    "auto_classification": true,
    "auto_description": false,
    "auto_prohibited_check": true,
    "shipping": {
        "international_freight": 0,
        "until_gateway_freight": 10,
        "until_gateway_charges": 10,
        "after_gateway_cost": 10,
        "after_gateway_charges": 10
    },
    "insurance": {
        "charges": 10
    },
    "items": [
        {
            "product_code": 6103420000,
            "product_description": "Pair Jeans for men 100% cotton size L",
            "country_code_origin": "CH",
            "units": 1,
            "price_per_unit": 90,
            "extra_cost": 0,
            "weight_total": null,
            "weight_per_unit": 1,
            "weight_unit": "KG",
            "sku": null,
            "attributes": null
        },
        {
            "product_code": 6103420000,
            "product_description": "Pair Jeans for men 100% cotton size M",
            "country_code_origin": "CH",
            "units": 10,
            "price_per_unit": 85,
            "extra_cost": 0,
            "weight_total": 1,
            "weight_per_unit": null,
            "weight_unit": "KG",
            "sku": null,
            "attributes": null
        },
        {
            "product_code": 6103420000,
            "product_description": "Pair Jeans for men 100% cotton size S",
            "country_code_origin": "CH",
            "units": 1,
            "price_per_unit": 80,
            "extra_cost": 0,
            "weight_total": 0.4,
            "weight_per_unit": 1,
            "weight_unit": "KG",
            "sku": null,
            "attributes": null
        },
        {
            "product_code": 4819100000,
            "product_description": "Carton (present packaging)",
            "country_code_origin": "CH",
            "units": 3,
            "price_per_unit": 5,
            "extra_cost": 0,
            "weight_total": 0.2,
            "weight_per_unit": null,
            "weight_unit": "KG",
            "sku": null,
            "attributes": null
        }
    ]
}
```

### output
```json
{
    "data": {
        "0": {
            "product_code": 6103420000,
            "product_description": "Pair Jeans for men 100% cotton size L",
            "country_code_origin": "CH",
            "units": 1,
            "price_per_unit": 90,
            "extra_cost": 0,
            "weight_total": 1000,
            "weight_per_unit": 1000,
            "weight_unit": "g",
            "sku": null,
            "attributes": null,
            "shipping_until": 6.25,
            "custom_value": 96.25,
            "duty_rate": 12
        },
        "1": {
            "product_code": 6103420000,
            "product_description": "Pair Jeans for men 100% cotton size M",
            "country_code_origin": "CH",
            "units": 10,
            "price_per_unit": 85,
            "extra_cost": 0,
            "weight_total": 1000,
            "weight_per_unit": 100,
            "weight_unit": "g",
            "sku": null,
            "attributes": null,
            "shipping_until": 6.25,
            "custom_value": 856.25,
            "duty_rate": 12
        },
        "2": {
            "product_code": 6103420000,
            "product_description": "Pair Jeans for men 100% cotton size S",
            "country_code_origin": "CH",
            "units": 1,
            "price_per_unit": 80,
            "extra_cost": 0,
            "weight_total": 400,
            "weight_per_unit": 1000,
            "weight_unit": "g",
            "sku": null,
            "attributes": null,
            "shipping_until": 2.5,
            "custom_value": 82.5,
            "duty_rate": 12
        },
        "3": {
            "product_code": 4819100000,
            "product_description": "Carton (present packaging)",
            "country_code_origin": "CH",
            "units": 3,
            "price_per_unit": 5,
            "extra_cost": 0,
            "weight_total": 200,
            "weight_per_unit": 66.66666666666667,
            "weight_unit": "g",
            "sku": null,
            "attributes": null,
            "shipping_until": 1.25,
            "custom_value": 16.25,
            "duty_rate": 0
        }
    },
    "rates": {
        "duty": null,
        "vat": null
    },
    "calculated": {
        "parcel_value": null,
        "customs_value": null,
        "vat_base": null,
        "is_standard_rate_apply": null,
        "is_within_duty_free_allowance": null,
        "is_tobacco": null,
        "is_alcohol": null,
        "is_prohibited": null,
        "totalWeight": 3200,
        "total_shipping_cost_until_gateway": 20,
        "total_shipping_cost_until_gateway_per_base_unit": 0.00625
    },
    "total_custom_charges": {
        "duty_total": null,
        "vat_total": null,
        "total": null
    }
}
```