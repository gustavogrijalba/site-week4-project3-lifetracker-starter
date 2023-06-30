import './App.css'


function App() {

  return (
    <div>
      <Router>
        <Route path = "/register" element = {<Registration/>}/>
        <Route path = "/login" element = {<Login/>}/>
      </Router>
    </div>
  )
}

export default App
