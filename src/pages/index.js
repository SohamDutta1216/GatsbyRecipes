import React from "react"
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from '../components/AllRecipes'

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Soham's Recipes</h1>
              <h4>Home of the most delicious recipes in the galaxy</h4>
            </div>
          </div>
        </header>
      </main>
      <AllRecipes />
    </Layout>
  )
}
