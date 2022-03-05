import React, {useState, useEffect} from 'react'
import {Dish, DishType} from "../../components/screen-cards/DishCard"

interface Props {}

export const DishScreen: React.FC<Props> = () => {
  const [dish, setDish] = useState([])
  useEffect(() => {
    const url = "http://localhost:3000/dishes"
    fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setDish(data)

    })
  }, [])


return (
  <div>
    {dish &&  dish.map((single: DishType) => {
      return ( 
        <div key={single.id}>
         <Dish
          id={single.id}
          title={single.title}
          description={single.description}
          url={single.url}         
         />
     </div> 
     )
    })}
  </div>
)}

