import React from 'react'
import './Home.css'
import groceryOnline from './Images/groceryonline.jpg'
import Product from './Product'
import aashirvaad from './Images/aashirvaad.jpg'
import tomato from './Images/tomato.jpg'
import onion from './Images/onion.jpg'
import riceatta from './Images/riceatta.jpg'
import tatasalt from './Images/tatasalt.jpg'
import tatadal from './Images/tatadal.jpg'
function Home() {
    return (
        <div className = 'home'>
            <div className = 'home__container'>
                <img src = {groceryOnline} className = 'home__Image' />
            <div className = 'home__row'>
                <Product title = 'Tomato' price = '1KG = ₹ 100' image = {tomato} rating = {5}/>
                <Product title = 'TATA DAL' price = '1KG = ₹ 200' image = {tatadal} rating = {5}/>
            </div>
            <div className = 'home__row'>
            <Product title = 'TATA SALT' price = '1KG = ₹ 150' image = {tatasalt} rating = {5}/>
            <Product title = 'RICE ATTA' price = '1KG = ₹ 300' image = {riceatta} rating = {5}/>
            <Product title = 'ONION' price = '1KG = ₹ 500' image = {onion} rating = {5}/>
            </div>
            <div className = 'home__row'>
            <Product title = 'AASHIRVAAD WHEAT ATTA' price = '1KG = ₹ 70' image = {aashirvaad} rating = {5}/>
            </div>
            </div>
        </div>
    )
}

export default Home
