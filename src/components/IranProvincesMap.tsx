import React, { useEffect, useRef, useState } from 'react'
import { Tooltip } from 'react-tooltip'
import { ProvinceType, selectedCityType } from '../interfaces'
import { provinceMapData } from '../data/provinces'
import { defaultData } from '../data/defaultData'
import Province from './provinces'
import './iran-provinces-map.css'

const IranProvincesMap: React.FC<ProvinceType> = ({
  province,
  provinceData,
  colorRange,
  selectedProvinceColor,
  tooltipTitle = '',
  width = 500,
  textColor = '#000',
  deactiveProvinceColor = '#e6e6e6',
  selectProvinceHandler,
}) => {
  const mapRef = useRef(null)

  const [cityName, setCityName] = useState<null | string>(null)
  const [selectedCity, setSelectedCity] = useState<selectedCityType>({
    name: '',
    faName: '',
  })

  const trimValue = (text: string) => {
    return text.trim()
  }

  const pathClickedHandle = (pathName: string) => {
    const selectedCityData = Object.values(provinceMapData)
      .flatMap((province) => province)
      .find((province) => trimValue(province.cityFaName) === pathName)

    setSelectedCity({
      faName: selectedCityData?.cityFaName,
      name: selectedCityData?.cityName,
    })

    selectProvinceHandler &&
      selectProvinceHandler({
        faName: selectedCityData?.cityFaName,
        name: selectedCityData?.cityName,
      })
  }

  const pathMouseOverHandler = (event: React.MouseEvent<HTMLElement>) => {
    const path = event.target as HTMLElement
    const cityName = path.dataset.name
    if (cityName) {
      setCityName(cityName)
    }
  }

  const findCityCount = () => {
    return (
      provinceMapData[province].find(
        (city: { cityFaName: string }) => trimValue(city.cityFaName) === trimValue(cityName || ''),
      )?.cityName ?? ''
    )
  }

  const badge = `
    <div class='react-map-badge'>
      <h2>${cityName}</h2>
      <h3>
      ${selectedCity && (provinceData[findCityCount()] || defaultData[province][findCityCount()])}
      ${tooltipTitle && `<span>${tooltipTitle}</span>`}
      </h3>
    </div>
  `

  const setPathBackgrounds = (svg: Element) => {
    const polygons = svg.querySelectorAll('polygon')
    const polylines = svg.querySelectorAll('polyline')
    const paths = svg.querySelectorAll('path')
    const mergedData = {
      ...defaultData[province],
      ...provinceData,
    }
    const values = Object.values(mergedData)
    const min = Math.min(...values)
    const max = Math.max(...values)

    const setColorHandler = (element: SVGPathElement | SVGPolygonElement | SVGPolylineElement) => {
      const selectedCityData = Object.values(provinceMapData)
        .flatMap((province) => province)
        .find((city) => trimValue(city.cityFaName) === element.getAttribute('data-name'))

      if (selectedCityData) {
        const count = mergedData[trimValue(selectedCityData.cityName)] || 0

        if (count === 0) {
          element.style.fill = deactiveProvinceColor
        } else {
          if (min !== max) {
            const alpha = Math.max(0.1, Math.min(1, (count - min) / (max - min)))
            const usageColor = `rgba(${colorRange}, ${alpha})`
            element.style.fill = usageColor
          } else {
            const usageColor = `rgba(${colorRange}, ${min > 0 ? 1 : 0.1})`
            element.style.fill = usageColor
          }
        }
      }
      if (element.getAttribute('data-name') === trimValue(selectedCity.faName || '') && selectedProvinceColor) {
        element.style.fill = selectedProvinceColor
      }
    }

    paths.forEach((path: SVGPathElement) => {
      setColorHandler(path)
    })
    polygons.forEach((polygon: SVGPolygonElement) => {
      setColorHandler(polygon)
    })
    polylines.forEach((polyline: SVGPolylineElement) => {
      setColorHandler(polyline)
    })
  }

  useEffect(() => {
    if (mapRef.current) {
      const mapElement = mapRef.current
      if (mapElement !== null && typeof mapElement === 'object') {
        setPathBackgrounds(mapElement)
      }
    }
  }, [mapRef, selectedCity])

  return (
    <div className='iran-provinces-map-wrapper'>
      <Province
        province={province}
        mapRef={mapRef}
        pathClickedHandle={pathClickedHandle}
        pathMouseOverHandler={pathMouseOverHandler}
        width={width}
        textColor={textColor}
      />
      <Tooltip id='iran-provinces-map-tooltip' html={badge} variant='light' float style={{ padding: 0 }} />
    </div>
  )
}

export default IranProvincesMap
