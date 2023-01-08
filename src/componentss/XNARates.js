import React, { useState } from 'react';
import { Scrollbars } from 'rc-scrollbars';
import '../stylesheets/XNARates.css';
import XnaToCountry from './XnaToCountry';
import CountryToXNA from './CountryToXNA';
import { useTranslation } from 'react-i18next';

export default function XNARates() {
  const { t } = useTranslation();
  const [togcountry,setTogcountry]=useState(0);
  return (
    
    <div className="xnarates">
        
        <h6 className="xnarateh6" >{t('XNA Rates')}</h6>
      <p className="xnaratep" >{t('Date')}: {Date().toLocaleString()}</p>
    {togcountry === 0? 
      <>
      <div className="xnaratediv2">
        <p>XNA</p>
        <i className="fa fa-exchange" onClick={()=>setTogcountry(1)} style={{ fontSize: '1.75em' }} />
        <p>{t('Other Countries')}</p>
      </div>
      <Scrollbars className="scroller" style={{ width:390,height: 400 }}><XnaToCountry/></Scrollbars>
      </>
    :
      <>
        <div className="xnaratediv2">
        <p>{t('Other Countries')}</p>
        <i className="fa fa-exchange" onClick={()=>setTogcountry(0)} style={{ fontSize: '1.75em' }} />
        <p>XNA</p>
      </div>
      <Scrollbars className="scroller" style={{ width:390,height: 400 }}><CountryToXNA/></Scrollbars>
      </>
    }
    </div>
  )
}
