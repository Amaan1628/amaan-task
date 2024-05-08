import './App.css';
import NavBarSide from "./components/NavbarSide"
import NavbarTop from './components/NavbarTop';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';

function App() {
  return (
    <div className="App">
      <div>
        <div id="main">
          <NavBarSide />
           {/* <div className='arrangement'> */}
            <div className='div4'>
              <NavbarTop />
              <div className='div3'>
                <div className='div1'>
                  <Component1 />
                  <Component2 />
                </div>
                <div className='div2'>
                  <Component3 />
                  <Component4 />
                  <Component5 />
                </div>
              </div>
            </div>
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}

export default App;