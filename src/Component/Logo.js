import React from 'react';
import LogoTemp from './LogoTemp';

export default function Logo() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row justify-content-around'>
          <LogoTemp
            image1='https://www.thesslstore.com/content/images/brand-digicert.svg'
            image2='https://www.thesslstore.com/content/images/brand-digicert.svg'
          />
          <LogoTemp
            image1='	https://www.thesslstore.com/content/images/brand-geotrust.svg'
            image2='	https://www.thesslstore.com/content/images/brand-geotrust.svg'
          />
          <LogoTemp
            image1='	https://www.thesslstore.com/content/images/brand-thawte.svg'
            image2='	https://www.thesslstore.com/content/images/brand-thawte.svg'
          />
          <LogoTemp
            image1='	https://www.thesslstore.com/content/images/brand-rapidssl.svg'
            image2='	https://www.thesslstore.com/content/images/brand-rapidssl.svg'
          />
          <LogoTemp
            image1='	https://www.thesslstore.com/content/images/trustedsite-logo.svg'
            image2='	https://www.thesslstore.com/content/images/trustedsite-logo.svg'
          />
          <LogoTemp
            image1='https://www.thesslstore.com/content/images/brand-codeguard.svg'
            image2='https://www.thesslstore.com/content/images/brand-codeguard.svg'
          />
          <LogoTemp
            image1='	https://www.thesslstore.com/content/images/brand-sectigo.svg'
            image2='	https://www.thesslstore.com/content/images/brand-sectigo.svg'
          />
          <LogoTemp
            image1='	https://www.thesslstore.com/content/images/brand-comodo-ca.svg'
            image2='	https://www.thesslstore.com/content/images/brand-comodo-ca.svg'
          />
          <LogoTemp
            image1='	https://www.thesslstore.com/content/images/quovadis_logo.svg'
            image2='	https://www.thesslstore.com/content/images/quovadis_logo.svg'
          />
          <LogoTemp
            image1='	https://www.thesslstore.com/content/images/sitelock-logo.svg'
            image2='	https://www.thesslstore.com/content/images/sitelock-logo.svg'
          />
        </div>
      </div>
    </>
  );
}
