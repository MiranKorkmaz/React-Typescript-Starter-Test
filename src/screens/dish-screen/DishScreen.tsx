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


const Dishes: React.FC<Dish> = ({id, title, description, url}: {id: string, title: string, description: string, url?: string}) => {
  return (
    <Card>
        <p>{id}.{title}</p>
        <p>{description}</p>
        {/* <img src={url} alt="Picture of Dish" /> */}
    </Card>
  )
}


export const DishScreen: React.FC<Props> = () => {
  const [dish, setDish] = useState([])
  const [deleteDish, setDeleteDish] = useState([]) 
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
  function handleOnDelete(id: string) {
    const url = `http://localhost:3000/dishes/${id}`
    fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setDeleteDish(data)
    })
}


return (
  <div>
      {dish && dish.map((single: Dish) => 
        <div>
          <Title />
            <Dishes 
            id={single.id} 
            key={single.id} 
            title={single.title} 
            description={single.description} 
            url={single.url}
          />
          <button onClick={(e) => handleOnDelete(single.id)}>Delete</button>
        </div>
      )}
  </div>
)
}
