import { gql, useMutation, useQuery, useApolloClient } from "@apollo/client";
import './App.css'

const FIND_ALL_BOOKS = gql`
  query findAllBooks {
    findAllBooks {
      id
      author
      title
    }
  }
`;

const products = [
  {id:1, name:"Socks", price:1.99},
  {id:2, name:"Jeans", price:19.99},
  {id:3, name:"Purse", price:10.99},
  {id:4, name:"Suit", price:199.99},
  {id:5, name:"Shoes", price:4.99},
  {id:6, name:"Shirt", price:9.99},
]

const Item = (props) => {

  const id = props.id;
  const name = props.name;
  const price = props.price;

  return (
    <div className="item">
      <img src={"images/" + String(id) + ".jpg"} alt={name}/>
      <h1>{name}</h1>
      <p className="price">${price}</p>
      <p>Optional Description</p>
      <p><button>Add to Cart</button></p>
    </div>
  )
}

function App() {
  
  const { loading, error, data } = useQuery(FIND_ALL_BOOKS);
  console.log(data);

  return (
    <div className="App">
      <div className="item-container">
        {products.map(product => <Item id = {String(product.id)} name = {String(product.name)} price = {String(product.price)}/>)}
      </div>
    </div>
  )
}

export default App;