import React , {createContext , useState , useEffect} from 'react'
import axios from 'axios'
export const SongsContext = createContext();
const SongsContextProvider = (props) =>{
    //state To Store TopTen Musinc
    const [songs , setSong] = useState([]);
    //state To store input value from search
    const [tracks , setTrack] = useState('');
    //Search Function --> run this function on submit
    const Search = () => {
        const ApiKey = '29ee208739fff38cbb446a39c805b8c3';
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${tracks}&page_size=10&page=1&s_track_rating=desc&apikey=${ApiKey}`)
            .then(res=>{
                setSong(res.data.message.body.track_list);
            });
         document.getElementsByClassName('top')[0].innerHTML = 'Search Result';
    }
    //call tracks api to get topTen tracks when page loaded then store them in array
    useEffect(()=>{
        const ApiKey = '29ee208739fff38cbb446a39c805b8c3';
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${ApiKey}`)
        .then(res=>{
            setSong(res.data.message.body.track_list);
        })
        .catch(err => console.log(err));
    },[]);
    return(
        <SongsContext.Provider value={{songs , setSong , tracks ,setTrack  , Search}}>
            {props.children}
        </SongsContext.Provider>
    )
}
export default SongsContextProvider