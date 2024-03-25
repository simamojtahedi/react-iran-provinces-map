import React from 'react'
import ReactDOM from 'react-dom/client'
import { FaGithub } from "react-icons/fa6";
import { TbUnlink } from "react-icons/tb";
import { RiNpmjsFill } from "react-icons/ri";
import MapsContainer from './MapsContainer'
import { iranMapData } from './data/countryData'
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <header>
        <h3>نقشه ایران </h3>
        <div className='links'>
        <a
            href='https://simamojtahedi.ir/' 
            target='_blank' 
            style={{ 
              lineHeight: 0, 
              padding: '8px', 
            }}
          >
            <TbUnlink style={{ color: '#000' }} size={19}  />
          </a>
          <a
            href='https://www.npmjs.com/package/react-iran-map' 
            target='_blank' 
            style={{ 
              lineHeight: 0, 
              padding: '8px', 
            }}
          >
            <RiNpmjsFill style={{ color: '#000' }} size={19}  />
          </a>
          <a
            href='https://github.com/simamojtahedi' 
            target='_blank' 
            style={{ 
              lineHeight: 0, 
              padding: '8px', 
            }}
          >
            <FaGithub style={{ color: '#000' }} size={19}  />
          </a>

        </div>
      </header>

      <MapsContainer iranMapData={iranMapData}   />
    </div>
  </React.StrictMode>
)
