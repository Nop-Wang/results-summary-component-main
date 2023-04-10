import * as React from 'react'
import './App.scss'
import Card from './components/Card'





function App() {


const data  =

[
  { 
    category: "Reaction",
    score: 80,
    icon:'/images/icon-reaction.svg',
    bgColor:'hsla(0, 100%, 67%, 0.1)',
    color:'var(--light-red)'
  },
  {
    category: "Memory",
    score: 92,
    icon:'/images/icon-memory.svg',
    bgColor:'hsl(39, 100%, 56%,0.1)',
    color:'var(--orangey-yellow)'
  },
  {
    category: "Verbal",
    score: 61,
    icon:'/images/icon-verbal.svg',
    bgColor:'hsl(166, 100%, 37%,0.1)',
    color:'var(--Green-teal)'
  },
  {
    category: "Visual",
    score: 72,
    icon:'/images/icon-visual.svg',
    bgColor:'hsl(234, 85%, 45%,0.1)',
    color:'var(--Cobalt-blue)'
  }
]
 

  return (
    <div>
      <Card  data={data}/>
      
    </div>
    
  )
}

export default App
