import React from 'react'
import { MapPropsWithProvince } from '../../interfaces'
import Alborz from './Alborz'
import Ardabil from './Ardabil'
import Bushehr from './Bushehr'
import Fars from './Fars'
import Gilan from './Gilan'
import Golestan from './Golestan'
import Hamadan from './Hamadan'
import Hormozgan from './Hormozgan'
import Ilam from './Ilam'
import Isfahan from './Isfahan'
import Kerman from './Kerman'
import Kermanshah from './Kermanshah'
import Khuzestan from './Khuzestan'
import Kurdistan from './Kurdistan'
import Lorestan from './Lorestan'
import Markazi from './Markazi'
import Mazandaran from './Mazandaran'
import NorthKhorasan from './NorthKhorasan'
import Qazvin from './Qazvin'
import Qom from './Qom'
import RazaviKhorasan from './RazaviKhorasan'
import Semnan from './Semnan'
import SouthKhorasan from './SouthKhorasan'
import Tehran from './Tehran'
import WestAzerbaijan from './WestAzerbaijan'
import Yazd from './Yazd'
import Zanjan from './Zanjan'
import ChaharmahalandBakhtiari from './ChaharmahalandBakhtiari'
import EastAzerbaijan from './EastAzerbaijan'
import KohgiluyehAndBoyerAhmad from './KohgiluyehAndBoyerAhmad'
import SistanAndBaluchestan from './SistanAndBaluchestan'

const Province: React.FC<MapPropsWithProvince> = ({
  province,
  mapRef,
  pathClickedHandle,
  pathMouseOverHandler,
  width,
  textColor,
}) => {
  const provinceProps = { mapRef, pathClickedHandle, pathMouseOverHandler, width, textColor }

  const provincesList = [
    {
      name: 'alborz',
      component: <Alborz {...provinceProps} />,
    },
    {
      name: 'ardabil',
      component: <Ardabil {...provinceProps} />,
    },
    {
      name: 'bushehr',
      component: <Bushehr {...provinceProps} />,
    },
    {
      name: 'chaharmahalandBakhtiari',
      component: <ChaharmahalandBakhtiari {...provinceProps} />,
    },
    {
      name: 'eastAzerbaijan',
      component: <EastAzerbaijan {...provinceProps} />,
    },
    {
      name: 'fars',
      component: <Fars {...provinceProps} />,
    },
    {
      name: 'gilan',
      component: <Gilan {...provinceProps} />,
    },
    {
      name: 'golestan',
      component: <Golestan {...provinceProps} />,
    },
    {
      name: 'hamadan',
      component: <Hamadan {...provinceProps} />,
    },
    {
      name: 'hormozgan',
      component: <Hormozgan {...provinceProps} />,
    },
    {
      name: 'ilam',
      component: <Ilam {...provinceProps} />,
    },
    {
      name: 'isfahan',
      component: <Isfahan {...provinceProps} />,
    },
    {
      name: 'kerman',
      component: <Kerman {...provinceProps} />,
    },
    {
      name: 'kermanshah',
      component: <Kermanshah {...provinceProps} />,
    },
    {
      name: 'khuzestan',
      component: <Khuzestan {...provinceProps} />,
    },
    {
      name: 'kohgiluyehAndBoyerAhmad',
      component: <KohgiluyehAndBoyerAhmad {...provinceProps} />,
    },
    {
      name: 'kurdistan',
      component: <Kurdistan {...provinceProps} />,
    },
    {
      name: 'lorestan',
      component: <Lorestan {...provinceProps} />,
    },
    {
      name: 'markazi',
      component: <Markazi {...provinceProps} />,
    },
    {
      name: 'mazandaran',
      component: <Mazandaran {...provinceProps} />,
    },
    {
      name: 'northKhorasan',
      component: <NorthKhorasan {...provinceProps} />,
    },
    {
      name: 'qazvin',
      component: <Qazvin {...provinceProps} />,
    },
    {
      name: 'qom',
      component: <Qom {...provinceProps} />,
    },
    {
      name: 'razaviKhorasan',
      component: <RazaviKhorasan {...provinceProps} />,
    },
    {
      name: 'semnan',
      component: <Semnan {...provinceProps} />,
    },
    {
      name: 'sistanAndBaluchestan',
      component: <SistanAndBaluchestan {...provinceProps} />,
    },
    {
      name: 'southKhorasan',
      component: <SouthKhorasan {...provinceProps} />,
    },
    {
      name: 'tehran',
      component: <Tehran {...provinceProps} />,
    },
    {
      name: 'westAzerbaijan',
      component: <WestAzerbaijan {...provinceProps} />,
    },
    {
      name: 'yazd',
      component: <Yazd {...provinceProps} />,
    },
    {
      name: 'zanjan',
      component: <Zanjan {...provinceProps} />,
    },
  ]

  return <>{provincesList.find((pr) => pr.name === province)?.component}</>
}

export default Province
