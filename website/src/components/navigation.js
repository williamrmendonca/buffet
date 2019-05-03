import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import GitHubButton from 'react-github-btn'

import Paragraph from "./Paragraph"

function withImageData(WrappedComponent) {
  return props => (
 
    <StaticQuery
      query={graphql`
        query {
          logo: file(relativePath: { eq: "logo@2x.png" }) {
            childImageSharp {
              fluid(maxWidth: 225) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          
          iconSlack: file(relativePath: { eq: "slack@2x.png" }) {
            childImageSharp {
              fluid(maxWidth: 58) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          
          iconGitHub: file(relativePath: { eq: "github@2x.png" }) {
            childImageSharp {
              fluid(maxWidth: 58) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <WrappedComponent {...props} imageData={data} />}
    />
  );
}

const Logo =  withImageData(props => (
  <Img fluid={props.imageData.logo.childImageSharp.fluid} alt="Logo Buffet.js" />
));

const IconSlack = withImageData(props => (
  <Img fluid={props.imageData.iconSlack.childImageSharp.fluid} alt="Slack icon" />
));

const IconGitHub = withImageData(props => (
  <Img fluid={props.imageData.iconGitHub.childImageSharp.fluid} alt="GitHub icon" />
));

const Navigation = () => (
  <nav
    className="navigation"
    style={{
      height: '120px',
      boxShadow: '0 2px 4px 0 rgba(234, 234, 234, 0.5)',
      backgroundColor: '#ffffff'
    }}
  >
    <div
      className='container'
      style={{
        height: '100%',
        margin: `0 auto`,
        maxWidth: 1270,
      }}
    >
      <div className='row' style={{ height: '100%' }}>
        <div className='col-lg-4 col-9 wrapper_logo'>
          <h1 className="logo" style={{ display:'inline-block', height: '100%', paddingTop: 40, width: '100%', maxWidth: 255 }}>
            <Link
              to='/'
            >
              <Logo /> 
            </Link>
          </h1>
        </div>
        <div 
          className='col-lg-8 col-3'
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <div 
            className="icon_responsive_menu d-inline-block d-sm-none"
            onClick={(e) => {
              e.currentTarget.classList.toggle('open');

              e.currentTarget.nextElementSibling.classList.toggle('open_menu');
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul 
            className='menu row align-items-center'
            style={{
              listStyleType: 'none',
              margin: 0,
              padding: 0
            }}
          >
            <li className="d-block d-sm-none" style={{ marginBottom: -100 }}><Paragraph style={{ textAlign: 'center' }}>Made with love by Strapi</Paragraph></li>
            <li className="order-3" style={{ marginTop: -40 }}><GitHubButton href='https://github.com/strapi/buffet' data-icon='octicon-star' data-size='large' data-show-count='true' aria-label='Star strapi/buffet on GitHub'>Star</GitHubButton></li>
            <li className="order-1" style={{ padding: '0 36px' }}>
              <a
                href='https://slack.strapi.io/'
                style={{
                  display: 'inline-block',
                  width: 28,
                  height: 28
                }}
              >
                <IconSlack /> 
              </a>
            </li>
            <li className="order-2">
              <a
                href='https://github.com/strapi/buffet'
                style={{
                  display: 'inline-block',
                  width: 28,
                  height: 28
                }}
              >
                <IconGitHub /> 
              </a>
            </li>
            <li className="order-4">
            <Link
                to='/'
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  width: 318,
                  height: 72,
                  padding: '0 36px',
                  marginLeft: 108,
                  backgroundColor: '#0B269C',
                  lineHeight: '72px',
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'Lato',
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  textAlign: 'left',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  borderRadius: 36
                }}
              >
                Discover on storybook
                <span 
                  style={{
                    position: 'absolute',
                    right: 36,
                    top: 'calc(50% - 6px)',
                    display: 'block',
                    width: 12,
                    height: 12,
                    borderTop: '1px solid #ffffff',
                    borderRight: '1px solid #ffffff',
                    transform: 'rotate(45deg)'
                  }}
                >
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation