import './App.css';
import React,{useState} from 'react'
// Home Page Components
import TopBar from './components/Home/TopBar'
import Main      from './components/Home/home';
import BottomBar from './components/Home/BottomBar'

// Login Page Components
import LoginTopBar from './components/Login/TopBar'

// SignUp Page Components
import SignUpTopBar from './components/SignUp/TopBar'

function App() {

  const [page,       set_page]       = useState(null)
  

  function handle_page(newValue) {
      set_page(newValue);
  }

  if(page===1 || page===null){
    return (
      <>
        <TopBar value={page} onChange={handle_page} />
        <Main />
        <BottomBar />
      </>
  );
  }
  else if(page===2){
    return(
      <>
        <LoginTopBar  value={page} onChange={handle_page} />
      </>
  );
  }
  else if(page===3){
    return(
      <>
        <SignUpTopBar  value={page} onChange={handle_page} />
      </>
    );
  }
  
}

export default App;
