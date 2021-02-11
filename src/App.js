import logo from './logo.svg';
import './App.css';
import Product from './Product';

//Json ->present data in Object format
let product1={pname:'Pepsi 250ML', price:'20.00INR'};
let product2={pname:'Pepsi 500ML', price:'40.00INR'};
let product3={pname:'Pepsi 750ML', price:'50.00INR'};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
      </header>

      <Product pname={product1.pname} price={product1.price}/>
      <Product pname={product2.pname} price={product2.price}/>
      <Product pname={product3.pname} price={product3.price}/>
      <footer>Assignment</footer>
    </div>
  );
}

export default App;
