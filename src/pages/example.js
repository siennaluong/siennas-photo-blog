import React from 'react'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'
import styled from '@emotion/styled'

const Title = styled.h1`
  font-weight: ${props => props.theme.fonts.boldWeight};
  line-height: 1.25;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 1rem;
  font-size: 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5rem;
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  p {
    line-height: 1.5;
    margin: 0 0 1.75rem;
  }
  a {
    transition: 0.3s color;
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.secondary} !important;
    }
  }
  code {
    font-family: ${props => props.theme.fonts.monospace};
    font-size: 0.9rem;
    padding: 0.25rem;
    background: ${props => props.theme.colors.code};
    color: ${props => props.theme.colors.text};
    border-radius: 0.3em;
  }
`

const ExamplePage = ({ data }) => {
  return (
    <Container>
      <SEO title="Example Page" description="This is just an example page" />
      <Title>A little about myself</Title>
      <Content>

        <p>Hi there, my name is Hai Thu Luong, but some people also know me as Sienna! I was born and raised in Hanoi for 16 years until I decided to move to Canada.
          I am currently a business and computer sience at Western University, which may make me sound smart but honestly it's just me being indecisive!
        </p>
        <p>
          I aspire to be a software engineer because I genuinely believe the world needs more builders, and since I have
          all the resources to pursue it I might as well. That's why outside of school, you can catch me grinding out my personal projects or doing hackathons, 
          ranging from AI project to a unity game. Please shoot me an email if you wish to chat with me about anything tech-related!
        </p>
        <p>
          I am also an avid foodie-my friend once said I am literally ran by my stomach. I enjoy eating all sort of foods, in fact everything except sellfish or animals organs.
          I also enjoy cooking, but how my food tastes is a completely different story... I also love taking nice photo of people and places I adore. Follow me @chinsufriedrice to see some of them
        </p>
        <p>
          While I do have some sense of life direction, I must admit I still feel quite unsure about my future a lot of the times. 
          This blog serves as an outlet for me to reflect on my self-discovery journey as I navigate through adulthood.
          I hope my experience speaks to anyone who is in similar boat!
        </p>
      </Content>
    </Container>
  )
}

export default ExamplePage
