/* eslint-disable @typescript-eslint/ban-types */

export type ProvinceMapData = {
  [key: string]: {
    [key: string]: number
  }
}

export interface ProvinceType {
  province: string
  provinceData: {
    [key: string]: number
  }
  colorRange: string
  tooltipTitle?: string
  deactiveProvinceColor?: string
  selectedProvinceColor?: string
  width?: number
  textColor?: string
  selectProvinceHandler?: Function
}

export interface selectedCityType {
  name: string | undefined
  faName: string | undefined
}

export interface MapProps {
  mapRef: React.LegacyRef<SVGSVGElement> | undefined
  pathClickedHandle: Function
  pathMouseOverHandler: Function
  width: number | string | undefined
  textColor: string
}

export type MapPropsWithProvince = MapProps & {
  province: string
}
