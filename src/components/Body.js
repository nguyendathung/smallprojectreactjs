import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import '../components/Title_main.css'
import Render_api from "./child/Render_api";


function Body(){

  const [data, setData] = useState([]);
  const [renderdata, setRenderData] = useState('');

  useEffect(() => {

    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((res) =>{
      setData(res.data);
      console.log(res.products);
    })

  },[data])

    // Tạo một truy vấn cho API
    // const [data, setData] = useQuery("data", () => {
    //   return fetch("https://dummyjson.com/products/")
    //     .then((response) => response.json())
    //     .then((response) => {
    //       setData(response.products);
    //     });
    // });

    return (
      <div>
        {data && <ul>
          {data.map((result) => (
            // <Render_api key={result.id} data={result}/>
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>}
        {console.log(data)}
      </div>
    );
  


    // const fetchFood = async () => {
      
    //   try {
    //       const response = await fetch('https://dummyjson.com/products/')
    //       const data = await response.json()
    //       console.log(data);
          
    //   } catch (error) {
    //       console.error(error);
    //   }

    // }
    // fetchFood()




    // const [car, setCar] = useState({
    //   brand: "Ford",
    //   model: "Mustang",
    //   year: "1964",
    //   color: "red"
    // });
  
    // return (
    //   <>
    //     <h1>My {car.brand}</h1>
    //     <p>
    //       It is a {car.color} {car.model} from {car.year}.
    //     </p>
    //   </>
    // )

    // return(
    //   <>
    //     {/* <div>
    //       <ul>
    //         <li>
    //           {res.map}
    //         </li>
    //       </ul>
    //     </div> */}
    
    //   </>
    // )


};

export default Body;