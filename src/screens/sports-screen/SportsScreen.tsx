import React, {useState, useEffect} from 'react'
import { Card } from '../../components/layout/Card'

interface Props {}

interface Sport {
  id: string, 
  title: string,
  description: string,
  url: string
}

const Sports: React.FC<Sport> = ({id, title, description, url}) => {
  return (
    <Card>
        <p>{id}</p>
        <p>{title}</p>
        <p>{description}</p>
        {/* <img src={url} alt="Picture of Dish" /> */}
    </Card>
  )
}

export const SportsScreen: React.FC<Props> = () => {
  const [sport, setSport] = useState([])
  useEffect(() => {
    const url = "http://localhost:3000/sports"
    fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setSport(data)
    })
  }, [])
  return (
    <div>
      {sport && sport.map((single: Sport) => <Sports 
        id={single.id} 
        key={single.id} 
        title={single.title} 
        description={single.description} 
        url={single.url}
      />)}
    </div>
  )
}
