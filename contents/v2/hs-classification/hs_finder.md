# Hs Classification
##### A feature to help you find an appropriate Harmonized System Code based on a description.

## What is a Hs Code?

Harmonized System (HS) Codes are commonly used throughout the export process for goods. The Harmonized System is a standardized numerical method of classifying traded products. It is used by customs authorities around the world to identify products when assessing duties and taxes and for gathering statistics.

The HS code can be described as follows:

- It is a six-digit identification code.
- It has 5000 commodity groups.
- Those groups have 99 chapters.
- Those chapters have 21 sections.
- It’s arranged in a legal and logical structure.
- Well-defined rules support it to realize uniform classification worldwide.

The Hs code is divided into sections, chapters, headings, and subheadings.

For example, "1006209400". 
- The first two digits corresponds to the section and chapter. In this case, the section is Vegetable Products (section 1), and the Chapter is Cereals (10).
- The next two digits corresponds to the headings. In this case, "06" that is Rice. The next two digits corresponds to the subheading, which "20" is "Husked (brown) rice".
- The last four digits are no more subdivided and give the final information to identify more specifically his kind and tariff. In here, "9400" classify it as "Medium grain".


## Client site
`Customers page > HS Classification`

<ImageZoom
src="images/hs_classification_menu_option.png"
:border="true"
width="150"
/>

On the Hs Classification page, the user must select origin and destination countries and type a desciption in the search field. 

<ImageZoom
src="images/hs_classification_product_description.png"
:border="true"
width="400"
/>

By clicking on "HS Code" the system will show results based on the description with the taxes related to the destination country.

<ImageZoom
src="images/hs_classification_results.png"
:border="true"
width="400"
/>

Once selecting the code, the system will show the taxes related to the product and destination.

<ImageZoom
src="images/hs_classification_hscode_selected.png"
:border="true"
width="200"
/>

## API endpoint
Given a description is possible to search for hs codes via API Request. Send your `GET` request with a `Bearer Token` within the header to the following URL:

```url
{{url}}/v2/hs/codes-by-description/{{description}}
```

Your request will return in case of:

### - Success:
Response with status: `200`
A Json text corresponding to a list which each element has the following properties:
- description `string`
- code `string`
- heading `string`
- chapter `string`
- keywords `string`
- term `string`
- has_children `string`

```json
{
  "description": "Whiskies",
  "code": "2208300000",
  "heading": "2208300000",
  "chapter": "BEVERAGES, SPIRITS AND VINEGAR",
  "keywords": "whisky",
  "term": "whisky",
  "has_children": false
}
```

### - Failed:
Response with status: `204 No content`

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
- This Feature is not current available on the Admin side.


