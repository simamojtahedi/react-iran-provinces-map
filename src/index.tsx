import React from 'react'
import ReactDOM from 'react-dom/client'
import MapsContainer from './MapsContainer'
import './index.css'

const iranMapData = {
  ardabil: 0,
  isfahan: 20,
  alborz: 11,
  ilam: 18,
  eastAzerbaijan: 10,
  westAzerbaijan: 20,
  bushehr: 15,
  tehran: 3,
  chaharmahalandBakhtiari: 25,
  southKhorasan: 29,
  razaviKhorasan: 11,
  northKhorasan: 19,
  khuzestan: 12,
  zanjan: 18,
  semnan: 9,
  sistanAndBaluchestan: 3,
  fars: 7,
  qazvin: 35,
  qom: 30,
  kurdistan: 24,
  kerman: 23,
  kohgiluyehAndBoyerAhmad: 2,
  kermanshah: 7,
  golestan: 18,
  gilan: 14,
  lorestan: 7,
  mazandaran: 28,
  markazi: 25,
  hormozgan: 14,
  hamadan: 19,
  yazd: 32,
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div style={{ width: '99vw', height: '95vh' }}>
      <a
        href="https://github.com/simamojtahedi/react-iran-provinces-map"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          margin: '20px',
        }}
      >
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E"
          alt={'Github'}
        />
        <span style={{ color: '#000', marginLeft: '5px' }}>View on GitHub</span>
      </a>
      <MapsContainer iranMapData={iranMapData}   />
    </div>
  </React.StrictMode>
)
