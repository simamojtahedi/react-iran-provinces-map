# Iran Provinces Map

This NPM package provides interactive maps of Iran's provinces with city details and hover functionality.
The package includes interactive and responsive SVG maps of all 31 provinces, each containing cities with customizable values displayed on hover.
Additionally, the background color of each city changes based on it's count, creating a visually engaging experience for users.

You can use [react-iran-map](https://www.npmjs.com/package/react-iran-map) to get each province's name by clicking on Iran map.

## Installation

`npm i react-iran-provinces-map`

## Usage

```jsx
import { IranProvincesMap } from "react-iran-provinces-map";
import mapData from "../data.tsx";

function App() {
  const selectedProvince = "tehran";

  const selectProvinceHandler = (province) => {
    console.log(province);
  };

  return (
    <div style={{ fontFamily: "vazir" }}>
      <IranProvincesMap
        province={selectedProvince}
        provinceData={mapData}
        colorRange="30, 70, 181"
        deactiveProvinceColor="#eee"
        selectedProvinceColor="#3bcc6d"
        tooltipTitle="تعداد:"
        textColor="#000"
        width={600}
        selectProvinceHandler={selectProvinceHandler}
      />
    </div>
  );
}

export default App;
```

## Data schema

You can see each privince data in this link:
`[Provinces data scheme](https://github.com/simamojtahedi/react-iran-provinces-map/blob/master/src/data/defaultData.ts)`

You can use this data for 'tehran' as selected province:

```jsx
const mapData = {
    malard: 10,
    shahriar: 23,
    robatkarim: 6,
    baharestan: 0,
    eslamshahr: 27,
    qods: 19,
    tehran: 29,
    rey: 1,
    varamin: 9,
    pishva: 2,
    qarchak: 17,
    pakdasht: 14,
    damavand: 25,
    pardis: 21,
    shemiranat: 11,
    firuzkuh: 3,
};
```

## Available attributes

| Name                    | Type       | Required | Description                                                                                              |
| :---------------------- | :--------- | :------- | :------------------------------------------------------------------------------------------------------- |
| `province `             | `string`   | True     | Selected province name                                                                                   |
| `provinceData`          | `Object`   | True     | An object that has 'Data schema' items as cities for each province                                       |
| `colorRange`            | `string`   | True     | It defines the range of color based on it's value and it should be rgb color like this : `"30, 70, 181"` |
| `width`                 | `number`   | False    | Width of the map                                                                                         |
| `textColor`             | `string`   | False    | Color of map texts                                                                                       |
| `deactiveProvinceColor` | `string`   | False    | It set color of the provinces with `0` value                                                             |
| `selectedProvinceColor` | `string`   | False    | Color of the clicked city                                                                                |
| `tooltipTitle`          | `string`   | False    | You can add a name for the value in tooltip                                                              |
| `selectProvinceHandler` | `function` | False    | You can define a function like example above to get selected city name                                   |

## Authors

- [@simamojtahedi](https://github.com/simamojtahedi)
