import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'
import { act } from 'react-dom/test-utils'
import IranProvinceMap from '../src/components/IranProvincesMap'

const selectedProvince = 'tehran'

const provinceData = {
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
}

describe('Common render', () => {
  it('renders without crashing', async () => {
    await act(async () =>
      render(<IranProvinceMap province={selectedProvince} provinceData={provinceData} colorRange='30, 70, 181' />),
    )
  })
})
