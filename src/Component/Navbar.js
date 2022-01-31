import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav
        className='navbar navbar-expand-lg navbar-dark'
        style={{
          backgroundColor: '#0a061c',
          borderBottom: '1px solid #112847',
          borderTop: '1px solid #112847',
        }}
      >
        <div className='container-fluid'>
          <h1 className='fw-bold ps-5'>
            <a className='text-light text-decoration-none' href='#'>
              SSLs.Pk
            </a>
          </h1>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul
              className='navbar-nav me-auto mb-2 mb-lg-0 py-2 fw-bold mx-xl-5 px-0 py-0'
              style={{ paddingLeft: '170px' }}
            >
              <li className='nav-item dropdown ms-xl-5 ms-lg-0'>
                <a
                  className='nav-link active dropdown'
                  id='navbarDropdown'
                  data-bs-toggle='dropdown'
                  aria-current='page'
                  href='#'
                >
                  <span className='li-2'>
                    Brands
                    <i className='fas fa-chevron-right ps-2'></i>
                  </span>
                </a>
                <ul
                  className='dropdown-menu rounded-0 Nav-drop py-0'
                  aria-labelledby='navbarDropdown'
                  style={{ width: '220px' }}
                >
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      SSL Brands
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      DigiCert
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      GeoTrust
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Thawte
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      RapidSSL
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      TrustedSite
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      CodeGuard
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Sectigo
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Comodo
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link active dropdown li-2'
                  id='navbarDropdown'
                  data-bs-toggle='dropdown'
                  aria-current='page'
                  href='#'
                >
                  <span className='li-2'>
                    Products
                    <i className='fas fa-chevron-right ps-2'></i>
                  </span>
                </a>
                <ul
                  className='dropdown-menu rounded-0 Nav-drop py-0'
                  aria-labelledby='navbarDropdown'
                  style={{ width: '220px' }}
                >
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      SSL Certificates
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Code Signing Certificates
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Email Signing Certificates
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Certificate Management
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      cWatch Web
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link active dropdown li-2'
                  id='navbarDropdown'
                  data-bs-toggle='dropdown'
                  aria-current='page'
                  href='#'
                >
                  <span className='li-2'>
                    Enterprise
                    <i className='fas fa-chevron-right ps-2'></i>
                  </span>
                </a>
                <ul
                  className='dropdown-menu rounded-0 Nav-drop py-0'
                  aria-labelledby='navbarDropdown'
                  style={{ width: '220px' }}
                >
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Enterprise
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      CMS
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Private CA
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Managed PKI Solution
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Enterprise SSL Certificates
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Code Signing Certificates
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Client Certificates (S/MIME)
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      loT & Connected Devices
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      loT solutions
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link active dropdown li-2'
                  id='navbarDropdown'
                  data-bs-toggle='dropdown'
                  aria-current='page'
                  href='#'
                >
                  <span className='li-2'>
                    Partner
                    <i className='fas fa-chevron-right ps-2'></i>
                  </span>
                </a>
                <ul
                  className='dropdown-menu rounded-0 Nav-drop py-0'
                  aria-labelledby='navbarDropdown'
                  style={{ width: '220px' }}
                >
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Partner Programs
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Reseller Partner
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Technology Partner
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Integration Partner
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Strategic Partner
                    </a>
                  </li>
                  <li className='bor-b'>
                    <a className='dropdown-item' href='#'>
                      Affiliate Partner
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link active li-2'
                  aria-current='page'
                  href='#'
                >
                  <span className='li-2'>Shop</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
