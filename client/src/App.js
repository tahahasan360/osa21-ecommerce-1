import { gql, useMutation, useQuery, useApolloClient } from "@apollo/client";
import './App.css'
import Sidebar from './Sidebar';

const FIND_ALL_BOOKS = gql`
  query findAllBooks {
    findAllBooks {
      id
      author
      title
    }
  }
`;

const Item = () => {
  return (
    <div className="item">
      </div>
  );
}

function App() {
  const { loading, error, data } = useQuery(FIND_ALL_BOOKS);
  console.log(data);
  return <div className="App">
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div className="item-container">
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </div>
  </div>;
}

export default App;
