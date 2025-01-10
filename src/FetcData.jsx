
import { useEffect, useState } from 'react'
import './styles/App.scss'

 function FetchData() {
  const [data, setData] = useState([])
  useEffect( ()=>{
    async function fetchData(){
      const response = await fetch("/api/post")
      const data = await response.json()
      setData(data)
      console.log(data)
    }
fetchData()  
  },[])

  return (
    <>
    <h1>Twitter</h1>
     {data.map((post, index)=>{ return ( 
     <div key={index}>
      <h2>{post.headline}</h2>
      <p>{post.content}</p>
     </div>
     )
    })}
  </>
  )
}

export default FetchData
