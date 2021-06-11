import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const about = ({ data: {
  allContentfulRecipe: { nodes: recipes },
}, }) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Welcome to Soham's Recipes</h2>
            <p>A collection of my collection of healthy and delicious recipes!</p>
            <p>For inquiries or submitting your own recipes; Hit the contact button and shoot us a message!</p>
            <Link to="/contact" className="btn">
              contact
      </Link>
          </article>
          <StaticImage src="../assets/images/about.jpeg" alt="Person Pouring Salt in Bowl" className="about-img" placeholder="blurred" />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default about
