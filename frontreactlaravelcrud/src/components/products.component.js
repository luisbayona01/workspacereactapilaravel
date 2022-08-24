import React, { useState, useEffect, Component } from 'react'
import axios from 'axios';

const Products = (props) => {
  const [data, setData] = useState([]);
  useEffect(()=>{
     let  bodyFormData = new FormData();
 let userlogeado= localStorage.getItem('userlogeado')
  bodyFormData.append('usuariologeado',userlogeado)
  //token
  axios({
  method: "post",
  url: "http://127.0.0.1:8000/api/listarproductos/",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data",'Authorization':'Bearer '+localStorage.getItem('token')},
}).then(function (response) {
    //handle success
   console.log(response.data);
   setData(response.data);
  }).catch(function (response) {
    //handle error
    console.log(response);
  });
  },[])

 
 

        return (
          
            <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>nombre</th>
              <th>desscripcion</th>
              <th>usuario</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
          {data.map(response=>
            
            <tr key={response.id}>
            
              <td>{response.id}</td>
              <td>{response.name}</td>
              <td>{response.descripccion}</td>
              <td>{response.usuario}</td>
              <td><button type="button" className="btn btn-warning">editar </button> </td> 
             <td><button type="button" className="btn btn-danger">eliminar </button>  </td>
            

            </tr>
)}
          </tbody>
          </table>
          
        )
    
}

export default Products;

//export default class Products extends Component {
//alert("entra")
//    render() {
//        return (

//            <h3> aaaaaa < /h3> 
//        )
//    }


//}