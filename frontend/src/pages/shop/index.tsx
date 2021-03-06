import React, { FC,lazy,Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { ShopComponent } from 'src/components/shop';
import { SHOP_DATA, SHOP_DATA_TYPE } from 'src/models/data'; 


export const DUMMY_DATA = ((data: typeof SHOP_DATA) => {
  const min = 0;
  const max = SHOP_DATA.length;
  return SHOP_DATA[Math.floor(Math.random() * (max - min )) + min];    
})(SHOP_DATA)

const ShopPage: FC = () => {
  return( 
    <>
      <Helmet>
        <title>
         S4 - shop
        </title>
      </Helmet>
      <ShopComponent data={DUMMY_DATA}/>
    </>
  )
}

export default ShopPage;
