import { useEffect, useState } from 'react';
import React from 'react';
import Loading from './Loading';
import Tours from './Tours';


const url = "https://course-api.com/react-tours-project"

function App() {
  const [loading,setLoading] = useState(true);
  const [data, setData] = useState([]);
  const  fetchTours = async () =>{
    setLoading(true)
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setData(tours);
      setLoading(false);
    }
    catch(error){
      console.log(error)
    }
  };

  const removeTour = (id) => {
    const newTours = data.filter((tour) => tour.id !== id)
    setData(newTours)
  }

  useEffect(()=>{
    fetchTours()
  },[])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(data.length === 0){
    return(
      <main>
    <div className='title'>
      <h1>No tours left</h1>
      <button className='btn' onClick={() => fetchTours()}>
        refresh
      </button>
    </div>
  </main>
    )
}
return (
      <>
      <main>
        <h1 className='under'>Our Tours</h1>
        <Tours tours={data} removeTour ={removeTour}  />
      </main>
  
      </>
    )
}

export default App;
