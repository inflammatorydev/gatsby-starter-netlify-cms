import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Navbar from '../components/Navbar'
import './all.sass'
import './styles.css'
import { checkPropTypes } from 'prop-types';

const TemplateWrapper = ({ children, toggleNav, togglingNav }) => {
  console.log('ddd ', toggleNav);
  return (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
	
	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <link href="https://fonts.googleapis.com/css?family=Special+Elite" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
        </Helmet>
        
        <div className="layout-container">
          <Navbar toggleNav={toggleNav} />
          {children}
        </div>
      </div>
    )}
  />
)}

export default TemplateWrapper
