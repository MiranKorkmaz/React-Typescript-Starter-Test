import React, { useState } from "react"
import { StyledButton } from '../layout/styled-components/StyledButton'
import { StyledCard } from "../layout/styled-components/StyledCard"

export interface DishType {
  id: string,
  title: string,
  description: string,
  url?: string,
}

export const Dish: React.FC<DishType> = ({ id, title, description, url }: { id: string, title: string, description: string, url?: string }) => {
  const [deleteDish, setDeleteDish] = useState([])
  function handleOnDelete() {
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
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

  return (
    <StyledCard>
      <h1>{id}.{title}</h1>
      <p>{description}</p>
      <img src={url} alt="Menu food" />
      <StyledButton onClick={handleOnDelete}>Delete</StyledButton>
    </StyledCard>
  )
}

