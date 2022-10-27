import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const products=[
    {
      name:"photoshop", price:'$99'
    },
    {
      name:"illustrator", price:'$80'
    },
    {
      name:"pdf reader", price:'$77'
    }
  ]
  


  const productsName=products.map(product=>product.name);
  console.log(productsName);
  const nayoks=['razzak','salman','saymon','danger','shane','khan'];
  //const nayokNames=nayoks.map(nayok=>nayok);
  //console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">

      <Counter></Counter>
      <Users></Users>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done<code>src/App.js</code> and save to reload.
        </p>
        <p>React Person</p>
        <ul>
          {
            nayoks.map(nayok=> <li>{nayok}</li> )
          }
        {
          products.map(product=> <li>{product.name}</li>)
        }
        {/* {
          products.map(product=> <Product product= {product} > </Product>)
        } */}

          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
        </ul>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Person name="Shane" actress="Christen"></Person>
        <Person name="John" actress="emma"></Person>
        <Person name="Smith" actress="diana"></Person>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Counter(){
  const[count,setCount]=useState(0);
  const handleIncrease=()=>{
    const newCount=count+1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick={handleIncrease}>Increase 1</button>
      <button onClick={()=>setCount(count-1)}>Dicrease 1</button>
    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  });
  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}



function Product(props){
  const productStyle={
    border:'1px solid grey',
    borderRadius:'5px',
    backgroundColor:'lightgrey',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return (
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h1>{props.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return ( <div style={{border:'2px solid green', margin:'10px'}}> 
   <h1>Name: {props.name}</h1>
  <h3> Hero of  {props.actress}</h3></div>
  )
}
export default App;
