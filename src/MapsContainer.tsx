import React , {useState}from 'react';
import { IranMap } from 'react-iran-map'
import { IranProvincesMap } from "react-iran-provinces-map";
import { provincesData } from './data';

interface MapContainerProps {
    iranMapData: any
}

const MapsContainer:React.FC<MapContainerProps> = ({iranMapData}) => {
    const [loading, setLoading] = useState(false)
    const [selectedProvince, setSelectedProvince] = useState('tehran')

    const selectProvinceHandler = (province: any) => {
        setLoading(true)
        setSelectedProvince(province.name)
        setTimeout(() => setLoading(false), 1)
    }

    return (
        <div className='maps-wrapper'>
            <div className='map-wrapper'>
                <IranMap
                    data={iranMapData}
                    colorRange="30, 70, 181"
                    width={500}
                    textColor="#000"
                    defaultSelectedProvince="tehran"
                    deactiveProvinceColor="#eee"
                    selectedProvinceColor="#3bcc6d"
                    tooltipTitle="تعداد:"
                    selectProvinceHandler={selectProvinceHandler}
                />
            </div>
            <div className='map-wrapper'>
                {!loading &&
                    <IranProvincesMap
                        province={selectedProvince}
                        //@ts-ignore
                        provinceData={provincesData[selectedProvince]}
                        colorRange="250, 10, 10"
                        deactiveProvinceColor="#eee"
                        selectedProvinceColor="#3bcc6d"
                        tooltipTitle="تعداد:"
                        textColor="#000"
                        width={500}
                    />
                }
            </div>
        </div>
    )
}

export default MapsContainer
