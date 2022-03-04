import React, {useState, useEffect} from 'react'
import { Card } from '../../components/layout/Card'

interface Props {}

interface Dish {
  id: string,
  title: string,
  description: string,
  url: string
}

const Title: React.FC<Props> = () => {
  return (
    <div>
      <h1>Hi</h1>
    </div>
  )
}


const Dishes: React.FC<Dish> = ({id, title, description, url}) => {
  return (
    <Card>
        <p>{id}</p>
        <p>{title}</p>
        <p>{description}</p>
        {/* <img src={url} alt="Picture of Dish" /> */}
    </Card>
  )
}


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
        <Title/>
        {dish && dish.map((single: Dish) => <Dishes 
          id={single.id} 
          key={single.id} 
          title={single.title} 
          description={single.description} 
          url={single.url}
        />)}
    </div>
  )
}
