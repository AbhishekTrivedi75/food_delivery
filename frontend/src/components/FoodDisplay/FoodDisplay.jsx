import React, { useContext, useEffect, useState } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

function FoodDisplay({category}) {
    const {food_list,loading}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes Near You</h2>
        {loading ? (
            <div className="loading-container">
            <div className="spinner"></div>
            <div className="loading-text">Loading The Menu...</div>
        </div>
        ) : (
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />;
                    }
                    return null;
                })}
            </div>
        )}
    </div>
);
}

export default FoodDisplay