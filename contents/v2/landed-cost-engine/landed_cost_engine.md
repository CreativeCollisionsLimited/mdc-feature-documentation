# Landed Cost Engine
##### A feature to calculate and provide the cost for importing and exporting parcels.

## API endpoints

#### Calculation

Given a hs code, a country of origin and destination, get all the duty information for that product and route.

```url
-GET
{{url}}/calculation/{hs_code}/{origin}/{destination}}

e.g:
eucal.ecomduty.com/calculation/0406200000/BR/GR
```

#### - Success:
- Response with status: `200`
- A Json:
```json
{
  "duty": [
    {
      "raw": "94.100 EUR DTN ",
      "parsed": [
        {
          "type": "flat_price",
          "value": "94.100",
          "currency": "EUR",
          "measure_type": "DTN"
        }
      ]
    },
    {
      "raw": "188.200 EUR DTN ",
      "parsed": [
        {
          "type": "flat_price",
          "value": "188.200",
          "currency": "EUR",
          "measure_type": "DTN"
        }
      ]
    }
  ],
  "condition": [
    {
      "sequence": 1,
      "certificate": "L001",
      "condition_amount": null,
      "monetary_unit_code": null,
      "measurement_unit_code": null,
      "measurement_unit_qualifier": null,
      "action_code": "27",
      "action": "Apply the mentioned duty",
      "measurement_type_code": "122",
      "measurement_type": "Non preferential tariff quota",
      "measurement_condition_type_code": "C",
      "measurement_condition_type": "Presentation of a certificate/licence/document"
    },
    {
      "sequence": 2,
      "certificate": null,
      "condition_amount": null,
      "monetary_unit_code": null,
      "measurement_unit_code": null,
      "measurement_unit_qualifier": null,
      "action_code": "07",
      "action": "Measure not applicable",
      "measurement_type_code": "122",
      "measurement_type": "Non preferential tariff quota",
      "measurement_condition_type_code": "C",
      "measurement_condition_type": "Presentation of a certificate/licence/document"
    },
    {
      "sequence": 1,
      "certificate": "Y100",
      "condition_amount": null,
      "monetary_unit_code": null,
      "measurement_unit_code": null,
      "measurement_unit_qualifier": null,
      "action_code": "27",
      "action": "Apply the mentioned duty",
      "measurement_type_code": "122",
      "measurement_type": "Non preferential tariff quota",
      "measurement_condition_type_code": "Q",
      "measurement_condition_type": "Presentation of an endorsed certificate/licence"
    },
    {
      "sequence": 2,
      "certificate": null,
      "condition_amount": null,
      "monetary_unit_code": null,
      "measurement_unit_code": null,
      "measurement_unit_qualifier": null,
      "action_code": "07",
      "action": "Measure not applicable",
      "measurement_type_code": "122",
      "measurement_type": "Non preferential tariff quota",
      "measurement_condition_type_code": "Q",
      "measurement_condition_type": "Presentation of an endorsed certificate/licence"
    }
  ]
}
```
#### Geo Areas
Get the name and language of every geographic area.

```url
-GET
{{url}}/loc/geo_areas
```
#### - Success:
- Response with status: `200`
- A Json:
```json
[
    {
        "id": 1,
        "code": 1005,
        "short_name": "SURV",
        "full_name": "Statistical surveillance",
        "lang": "EN",
        "created_at": "2021-04-12T14:37:57.000000Z",
        "updated_at": "2021-04-12T14:37:57.000000Z"
    },
    {
        "id": 2,
        "code": 1006,
        "short_name": "EUCA",
        "full_name": "EU-Canada agreement: re-imported goods",
        "lang": "EN",
        "created_at": "2021-04-12T14:38:01.000000Z",
        "updated_at": "2021-04-12T14:38:01.000000Z"
    },
    {
        "id": 3,
        "code": 1007,
        "short_name": "SWITZ",
        "full_name": "EU-Switzerland agreement: re-imported goods",
        "lang": "EN",
        "created_at": "2021-04-12T14:38:01.000000Z",
        "updated_at": "2021-04-12T14:38:01.000000Z"
    },
    {
        "id": 4,
        "code": 1008,
        "short_name": "ALLTC",
        "full_name": "All third countries",
        "lang": "EN",
        "created_at": "2021-04-12T14:38:01.000000Z",
        "updated_at": "2021-04-12T14:38:01.000000Z"
    },
    {
        "id": 5,
        "code": 1009,
        "short_name": "REXTC",
        "full_name": "All destinations - export refund",
        "lang": "EN",
        "created_at": "2021-04-12T14:38:03.000000Z",
        "updated_at": "2021-04-12T14:38:03.000000Z"
    },
    {
        "id": 42,
        "code": 5002,
        "short_name": "DEF_SAVG",
        "full_name": "Countries subject to safeguard measures",
        "lang": "EN",
        "created_at": "2021-04-12T14:38:19.000000Z",
        "updated_at": "2021-04-12T14:38:19.000000Z"
    }
]
```

#### Country
Given a country code, get the name, language, and the geographic area(s) to which that country belongs.

```url
-GET
{{url}}/loc/country/eu
```
#### - Success:
- Response with status: `200`
- A Json:
```json
{
    "id": 60,
    "cc": "EU",
    "name": "European Union",
    "lang": "EN",
    "created_at": "2021-04-12T14:37:58.000000Z",
    "updated_at": "2021-04-12T14:37:58.000000Z",
    "geo_areas": [
        {
            "id": 1,
            "code": 1005,
            "short_name": "SURV",
            "full_name": "Statistical surveillance",
            "lang": "EN",
            "created_at": "2021-04-12T14:37:57.000000Z",
            "updated_at": "2021-04-12T14:37:57.000000Z",
            "pivot": {
                "countries_id": 60,
                "geo_areas_id": 1,
                "created_at": "2021-04-12T14:37:58.000000Z",
                "updated_at": "2021-04-12T14:37:58.000000Z",
                "membership_start": "2005-06-01",
                "membership_end": null
            }
        },
        {
            "id": 2,
            "code": 1006,
            "short_name": "EUCA",
            "full_name": "EU-Canada agreement: re-imported goods",
            "lang": "EN",
            "created_at": "2021-04-12T14:38:01.000000Z",
            "updated_at": "2021-04-12T14:38:01.000000Z",
            "pivot": {
                "countries_id": 60,
                "geo_areas_id": 2,
                "created_at": "2021-04-12T14:38:01.000000Z",
                "updated_at": "2021-04-12T14:38:01.000000Z",
                "membership_start": "2017-09-21",
                "membership_end": null
            }
        },
        {
            "id": 3,
            "code": 1007,
            "short_name": "SWITZ",
            "full_name": "EU-Switzerland agreement: re-imported goods",
            "lang": "EN",
            "created_at": "2021-04-12T14:38:01.000000Z",
            "updated_at": "2021-04-12T14:38:01.000000Z",
            "pivot": {
                "countries_id": 60,
                "geo_areas_id": 3,
                "created_at": "2021-04-12T14:38:01.000000Z",
                "updated_at": "2021-04-12T14:38:01.000000Z",
                "membership_start": "2007-01-01",
                "membership_end": null
            }
        },
        {
            "id": 7,
            "code": 1011,
            "short_name": "ERGA OMNES",
            "full_name": "ERGA OMNES",
            "lang": "EN",
            "created_at": "2021-04-12T14:38:05.000000Z",
            "updated_at": "2021-04-12T14:38:05.000000Z",
            "pivot": {
                "countries_id": 60,
                "geo_areas_id": 7,
                "created_at": "2021-04-12T14:38:06.000000Z",
                "updated_at": "2021-04-12T14:38:06.000000Z",
                "membership_start": "2007-01-01",
                "membership_end": null
            }
        },
        {
            "id": 8,
            "code": 1013,
            "short_name": "ECEU",
            "full_name": "European Union (including code \"EU\")",
            "lang": "EN",
            "created_at": "2021-04-12T14:38:07.000000Z",
            "updated_at": "2021-04-12T14:38:07.000000Z",
            "pivot": {
                "countries_id": 60,
                "geo_areas_id": 8,
                "created_at": "2021-04-12T14:38:07.000000Z",
                "updated_at": "2021-04-12T14:38:07.000000Z",
                "membership_start": "2007-07-01",
                "membership_end": null
            }
        },
        {
            "id": 24,
            "code": 2012,
            "short_name": "EEA",
            "full_name": "European Economic Area",
            "lang": "EN",
            "created_at": "2021-04-12T14:38:11.000000Z",
            "updated_at": "2021-04-12T14:38:11.000000Z",
            "pivot": {
                "countries_id": 60,
                "geo_areas_id": 24,
                "created_at": "2021-04-12T14:38:11.000000Z",
                "updated_at": "2021-04-12T14:38:11.000000Z",
                "membership_start": "2007-01-01",
                "membership_end": null
            }
        },
        {
            "id": 33,
            "code": 2400,
            "short_name": "PANEU",
            "full_name": "Diagonal \"Pan-European\" cumulation",
            "lang": "EN",
            "created_at": "2021-04-12T14:38:12.000000Z",
            "updated_at": "2021-04-12T14:38:12.000000Z",
            "pivot": {
                "countries_id": 60,
                "geo_areas_id": 33,
                "created_at": "2021-04-12T14:38:12.000000Z",
                "updated_at": "2021-04-12T14:38:12.000000Z",
                "membership_start": "2019-12-01",
                "membership_end": null
            }
        },
        {
            "id": 34,
            "code": 2500,
            "short_name": "WTO",
            "full_name": "Member countries of WTO",
            "lang": "EN",
            "created_at": "2021-04-12T14:38:12.000000Z",
            "updated_at": "2021-04-12T14:38:12.000000Z",
            "pivot": {
                "countries_id": 60,
                "geo_areas_id": 34,
                "created_at": "2021-04-12T14:38:12.000000Z",
                "updated_at": "2021-04-12T14:38:12.000000Z",
                "membership_start": "2007-01-01",
                "membership_end": null
            }
        }
    ]
}
```

#### Countries
Get the name, country code, and language of all countries.
```url
-GET
{{url}}/loc/countries
```
#### - Success:
- Response with status: `200`
- A Json:
```json
[
    {
        "id": 1,
        "cc": "AD",
        "name": "Andorra",
        "lang": "EN",
        "created_at": "2021-04-12T14:37:57.000000Z",
        "updated_at": "2021-04-12T14:37:57.000000Z"
    },
    {
        "id": 2,
        "cc": "AE",
        "name": "United Arab Emirates",
        "lang": "EN",
        "created_at": "2021-04-12T14:37:57.000000Z",
        "updated_at": "2021-04-12T14:37:57.000000Z"
    },
    {
        "id": 3,
        "cc": "AF",
        "name": "Afghanistan",
        "lang": "EN",
        "created_at": "2021-04-12T14:37:57.000000Z",
        "updated_at": "2021-04-12T14:37:57.000000Z"
    },
    {
        "id": 4,
        "cc": "AG",
        "name": "Antigua and Barbuda",
        "lang": "EN",
        "created_at": "2021-04-12T14:37:57.000000Z",
        "updated_at": "2021-04-12T14:37:57.000000Z"
    },
    {
        "id": 5,
        "cc": "AI",
        "name": "Anguilla",
        "lang": "EN",
        "created_at": "2021-04-12T14:37:57.000000Z",
        "updated_at": "2021-04-12T14:37:57.000000Z"
    },
    {
        "id": 6,
        "cc": "AL",
        "name": "Albania",
        "lang": "EN",
        "created_at": "2021-04-12T14:37:57.000000Z",
        "updated_at": "2021-04-12T14:37:57.000000Z"
    },
    {
        "id": 7,
        "cc": "AM",
        "name": "Armenia",
        "lang": "EN",
        "created_at": "2021-04-12T14:37:57.000000Z",
        "updated_at": "2021-04-12T14:37:57.000000Z"
    },
    {
        "id": 8,
        "cc": "AO",
        "name": "Angola",
        "lang": "EN",
        "created_at": "2021-04-12T14:37:57.000000Z",
        "updated_at": "2021-04-12T14:37:57.000000Z"
    },
    {
        "id": 9,
        "cc": "AQ",
        "name": "Antarctica",
        "lang": "EN",
        "created_at": "2021-04-12T14:37:57.000000Z",
        "updated_at": "2021-04-12T14:37:57.000000Z"
    },
    {
        "id": 10,
        "cc": "AR",
        "name": "Argentina",
        "lang": "EN",
        "created_at": "2021-04-12T14:37:57.000000Z",
        "updated_at": "2021-04-12T14:37:57.000000Z"
    }
]
```

#### Geo Area
Given a geographic area code, get the name, language, and countries that belong to it.
```url
-GET
{{url}}/loc/geo_area/1005
```
#### - Success:
- Response with status: `200`
- A Json:
```json
{
    "id": 2,
    "code": 1006,
    "short_name": "EUCA",
    "full_name": "EU-Canada agreement: re-imported goods",
    "lang": "EN",
    "created_at": "2021-04-12T14:38:01.000000Z",
    "updated_at": "2021-04-12T14:38:01.000000Z",
    "countries": [
        {
            "id": 60,
            "cc": "EU",
            "name": "European Union",
            "lang": "EN",
            "created_at": "2021-04-12T14:37:58.000000Z",
            "updated_at": "2021-04-12T14:37:58.000000Z",
            "pivot": {
                "geo_areas_id": 2,
                "countries_id": 60,
                "created_at": "2021-04-12T14:38:01.000000Z",
                "updated_at": "2021-04-12T14:38:01.000000Z",
                "membership_start": "2017-09-21",
                "membership_end": null
            }
        }
    ]
}
```

#### Conditions
Given a hs code, get the conditions that apply to it.
```url
-GET
{{url}}/meas/conditions/0101290000
```
#### - Success:
- Response with status: `200`
- A Json:
```json
{
    "conditions": [
        {
            "goods_code": "0101290000",
            "additional_code": null,
            "order_number": null,
            "start_date": "2017-09-21",
            "end_date": null,
            "origin_code": "1006",
            "origin_type": "geo",
            "measurement_type_code": "142",
            "measurement_condition_type_code": "B",
            "sequence": 1,
            "certificate": "U088",
            "condition_amount": null,
            "monetary_unit_code": null,
            "measurement_unit_code": null,
            "measurement_unit_qualifier": null,
            "measurement_action_code": 27,
            "measurement_type": [
                {
                    "code": 142,
                    "lang": "EN",
                    "description": "Tariff preference",
                    "short_description": "PREF",
                    "tm_id": 1,
                    "meas_series_code": "C",
                    "start_date": "1972-01-01",
                    "tm": {
                        "code": 0,
                        "description": "import"
                    },
                    "meas_series": [
                        {
                            "code": "C",
                            "lang": "EN",
                            "description": "Applicable duty"
                        }
                    ]
                }
            ],
            "measurement_condition_type": [
                {
                    "code": "B",
                    "lang": "EN",
                    "description": "Presentation of a certificate/licence/document"
                }
            ],
            "measurement_action": [
                {
                    "code": "27",
                    "lang": "EN",
                    "description": "Apply the mentioned duty"
                }
            ]
        },
        {
            "goods_code": "0101290000",
            "additional_code": null,
            "order_number": null,
            "start_date": "2017-09-21",
            "end_date": null,
            "origin_code": "1006",
            "origin_type": "geo",
            "measurement_type_code": "142",
            "measurement_condition_type_code": "B",
            "sequence": 2,
            "certificate": null,
            "condition_amount": null,
            "monetary_unit_code": null,
            "measurement_unit_code": null,
            "measurement_unit_qualifier": null,
            "measurement_action_code": 7,
            "measurement_type": [
                {
                    "code": 142,
                    "lang": "EN",
                    "description": "Tariff preference",
                    "short_description": "PREF",
                    "tm_id": 1,
                    "meas_series_code": "C",
                    "start_date": "1972-01-01",
                    "tm": {
                        "code": 0,
                        "description": "import"
                    },
                    "meas_series": [
                        {
                            "code": "C",
                            "lang": "EN",
                            "description": "Applicable duty"
                        }
                    ]
                }
            ],
            "measurement_condition_type": [
                {
                    "code": "B",
                    "lang": "EN",
                    "description": "Presentation of a certificate/licence/document"
                }
            ],
            "measurement_action": []
        }
    ],
    "exclusions": [
        {
            "goods_code": "0101290000",
            "additional_code": null,
            "order_number": null,
            "start_date": "2019-12-14",
            "end_date": null,
            "origin_code": "1008",
            "meas_type_code": "410",
            "country_code": "CH",
            "geo_area": [
                {
                    "code": 1008,
                    "short_name": "ALLTC",
                    "full_name": "All third countries",
                    "lang": "EN"
                }
            ],
            "country": [
                {
                    "cc": "CH",
                    "name": "Switzerland",
                    "lang": "EN"
                }
            ],
            "measurement_type": [
                {
                    "code": 410,
                    "lang": "EN",
                    "description": "Veterinary control",
                    "short_description": "VETCTR",
                    "tm_id": 1,
                    "meas_series_code": "B",
                    "start_date": "2012-04-01",
                    "tm": {
                        "code": 0,
                        "description": "import"
                    },
                    "meas_series": [
                        {
                            "code": "B",
                            "lang": "EN",
                            "description": "Entry into free circulation or exportation subject to conditions"
                        }
                    ]
                }
            ]
        },
        {
            "goods_code": "0101290000",
            "additional_code": null,
            "order_number": null,
            "start_date": "2019-12-14",
            "end_date": null,
            "origin_code": "1008",
            "meas_type_code": "410",
            "country_code": "AD",
            "geo_area": [
                {
                    "code": 1008,
                    "short_name": "ALLTC",
                    "full_name": "All third countries",
                    "lang": "EN"
                }
            ],
            "country": [
                {
                    "cc": "AD",
                    "name": "Andorra",
                    "lang": "EN"
                }
            ],
            "measurement_type": [
                {
                    "code": 410,
                    "lang": "EN",
                    "description": "Veterinary control",
                    "short_description": "VETCTR",
                    "tm_id": 1,
                    "meas_series_code": "B",
                    "start_date": "2012-04-01",
                    "tm": {
                        "code": 0,
                        "description": "import"
                    },
                    "meas_series": [
                        {
                            "code": "B",
                            "lang": "EN",
                            "description": "Entry into free circulation or exportation subject to conditions"
                        }
                    ]
                }
            ]
        },
        {
            "goods_code": "0101290000",
            "additional_code": null,
            "order_number": null,
            "start_date": "2019-12-14",
            "end_date": null,
            "origin_code": "1008",
            "meas_type_code": "410",
            "country_code": "NO",
            "geo_area": [
                {
                    "code": 1008,
                    "short_name": "ALLTC",
                    "full_name": "All third countries",
                    "lang": "EN"
                }
            ],
            "country": [
                {
                    "cc": "NO",
                    "name": "Norway",
                    "lang": "EN"
                }
            ],
            "measurement_type": [
                {
                    "code": 410,
                    "lang": "EN",
                    "description": "Veterinary control",
                    "short_description": "VETCTR",
                    "tm_id": 1,
                    "meas_series_code": "B",
                    "start_date": "2012-04-01",
                    "tm": {
                        "code": 0,
                        "description": "import"
                    },
                    "meas_series": [
                        {
                            "code": "B",
                            "lang": "EN",
                            "description": "Entry into free circulation or exportation subject to conditions"
                        }
                    ]
                }
            ]
        },
        {
            "goods_code": "0101290000",
            "additional_code": null,
            "order_number": null,
            "start_date": "2019-12-14",
            "end_date": null,
            "origin_code": "1008",
            "meas_type_code": "410",
            "country_code": "LI",
            "geo_area": [
                {
                    "code": 1008,
                    "short_name": "ALLTC",
                    "full_name": "All third countries",
                    "lang": "EN"
                }
            ],
            "country": [
                {
                    "cc": "LI",
                    "name": "Liechtenstein",
                    "lang": "EN"
                }
            ],
            "measurement_type": [
                {
                    "code": 410,
                    "lang": "EN",
                    "description": "Veterinary control",
                    "short_description": "VETCTR",
                    "tm_id": 1,
                    "meas_series_code": "B",
                    "start_date": "2012-04-01",
                    "tm": {
                        "code": 0,
                        "description": "import"
                    },
                    "meas_series": [
                        {
                            "code": "B",
                            "lang": "EN",
                            "description": "Entry into free circulation or exportation subject to conditions"
                        }
                    ]
                }
            ]
        },
        {
            "goods_code": "0101290000",
            "additional_code": null,
            "order_number": null,
            "start_date": "2019-12-14",
            "end_date": null,
            "origin_code": "1008",
            "meas_type_code": "410",
            "country_code": "FO",
            "geo_area": [
                {
                    "code": 1008,
                    "short_name": "ALLTC",
                    "full_name": "All third countries",
                    "lang": "EN"
                }
            ],
            "country": [
                {
                    "cc": "FO",
                    "name": "Faroe Islands",
                    "lang": "EN"
                }
            ],
            "measurement_type": [
                {
                    "code": 410,
                    "lang": "EN",
                    "description": "Veterinary control",
                    "short_description": "VETCTR",
                    "tm_id": 1,
                    "meas_series_code": "B",
                    "start_date": "2012-04-01",
                    "tm": {
                        "code": 0,
                        "description": "import"
                    },
                    "meas_series": [
                        {
                            "code": "B",
                            "lang": "EN",
                            "description": "Entry into free circulation or exportation subject to conditions"
                        }
                    ]
                }
            ]
        },
        {
            "goods_code": "0101290000",
            "additional_code": null,
            "order_number": null,
            "start_date": "2019-12-14",
            "end_date": null,
            "origin_code": "1008",
            "meas_type_code": "410",
            "country_code": "SM",
            "geo_area": [
                {
                    "code": 1008,
                    "short_name": "ALLTC",
                    "full_name": "All third countries",
                    "lang": "EN"
                }
            ],
            "country": [
                {
                    "cc": "SM",
                    "name": "San Marino",
                    "lang": "EN"
                }
            ],
            "measurement_type": [
                {
                    "code": 410,
                    "lang": "EN",
                    "description": "Veterinary control",
                    "short_description": "VETCTR",
                    "tm_id": 1,
                    "meas_series_code": "B",
                    "start_date": "2012-04-01",
                    "tm": {
                        "code": 0,
                        "description": "import"
                    },
                    "meas_series": [
                        {
                            "code": "B",
                            "lang": "EN",
                            "description": "Entry into free circulation or exportation subject to conditions"
                        }
                    ]
                }
            ]
        }
    ]
}
```

[comment]: <> (## Admin site
`Admin page > Parcels`)

[comment]: <> (<ImageZoom
src="images/landed-cost-engine/menu_create_a_parcel_admin.png"
:border="true"
width="200"
/>)

[comment]: <> (Click on the `New Parcel` button.)

[comment]: <> (<ImageZoom
src="images/landed-cost-engine/new_parcel.png"
:border="true"
width="600"
/>)

[comment]: <> (Select the countries.)

[comment]: <> (<ImageZoom
src="images/landed-cost-engine/countries.png"
:border="true"
width="500"
/>)

[comment]: <> (Describe the products in the description field and click on `Hscode` button)

[comment]: <> (<ImageZoom
src="images/landed-cost-engine/heading_table.png"
:border="true"
width="600"
/>)

[comment]: <> (After selecting one of the headings, select the proper hs code.)

[comment]: <> (<ImageZoom
src="images/landed-cost-engine/hs_code_table.png"
:border="true"
width="600"
/>)

[comment]: <> (If the taxes for that hscode exists for the countries selected, they will be shown.)

[comment]: <> (<ImageZoom
src="images/landed-cost-engine/green_banner.png"
:border="true"
width="700"
/>)

[comment]: <> (Inform the mandatory fields, `Shipping Cost, Quantity, Unit, Net Weight, and Unit Value` to get the total amount of taxes.)

[comment]: <> (<ImageZoom
src="images/landed-cost-engine/calculation.png"
:border="true"
width="700"
/>)