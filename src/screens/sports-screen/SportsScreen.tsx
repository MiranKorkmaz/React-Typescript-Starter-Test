import React, { useState, useEffect } from 'react'
import {Sport, SportType } from "../../components/screen-cards/SportCard"

interface Props {}

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
      {sport && sport.map((single: SportType) => {
        return (
          <div key={single.id}>
            <Sport
              id={single.id}
              title={single.title}
              description={single.description}
              url={single.url}
            />
          </div>
        )
      })}
    </div>
  )
}
