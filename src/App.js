import React , {Component} from 'react';
import './styles/App.css'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import FormSearch from './Components/FormSearch'
import SongsList from './Components/SongsList'
import SongsContextProvider from './Context/SongsContext'
import SongLyrics from './Components/SongLyrics';
class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App d-flex justify-content-center align-items-center flex-column">
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <SongsContextProvider>
                <FormSearch />
                <SongsList/>
              </SongsContextProvider>
            </Route>
            <Route path='/:Track_id' render={(props) => <SongsContextProvider> <SongLyrics {...props} /> </SongsContextProvider>} />
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
