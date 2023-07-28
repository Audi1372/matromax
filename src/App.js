
import './App.css';
import { useEffect } from 'react';

import { useState } from 'react';
import axios from 'axios';
import Tree from './components/Tree';


function App() {
  // const [treeData, setTreeData] = useState([]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get('https://mocki.io/v1/40059489-6a19-4ca7-a41c-1c5c920e312c')
      .then((res) => setOrders(res.data.spans))

  });


  return (
    <div className="App">
      <h1>hello lakshmi</h1>
      <Tree orders={orders} />


    </div>
  );
}

export default App;
