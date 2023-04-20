import CaseStudyGrid from '@components/CaseStudyGrid'
import FullPageFeature from '@components/FullPageFeature'
import LogoGrid from '@components/LogoGrid'
import ServicesGrid from '@components/ServicesGrid'
import type { CaseStudyProps } from '@typings/CaseStudy.types'
import { graphql, type HeadFC, type PageProps } from 'gatsby'
import type { GatsbyImageProps } from 'gatsby-plugin-image'
import type { FC, ReactElement } from 'react'
import React from 'react'


interface HomePageProps {
  data: {
    wpPage: {
      homePage: {
        feature: {
          featureTitle: string
        }
        clients: {
          logos: {
            clientName: string
            logo: {
              localFile: {
                childImageSharp: {
                  gatsbyImageData: GatsbyImageProps
                }
              }
            }
          }[]
        }
      }
    }
    caseStudies: {
      nodes: CaseStudyProps[]
    }
  }
}

const HomePage: FC<HomePageProps> = ({ data }: HomePageProps): ReactElement => {
  const { caseStudies } = data
  const { homePage } = data.wpPage

  return (
    <>
      <FullPageFeature title={homePage.feature.featureTitle} />
      <LogoGrid logos={homePage.clients.logos} />
      <ServicesGrid />
      <CaseStudyGrid caseStudies={caseStudies} />
    </>
  )
}

export default HomePage

export const Head: HeadFC = () => <title>Home Page</title>

export const homepageQuery = graphql`
  query Homepage {
    wpPage(databaseId: {eq: 22}) {
      homePage {
        feature {
          featureTitle
        }
        clients {
          logos {
            logo {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 160
                  )
                }
              }
            }
          }
        }
      }
    }
    caseStudies: allWpCaseStudy(limit: 6) {
      nodes {
        title
        uri
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 810, height: 1170)
              }
            }
          }
        }
        workTypes {
          nodes {
            name
          }
        }
      }
    }
  }
`
