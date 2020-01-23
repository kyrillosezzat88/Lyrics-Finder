import React , {useContext,useEffect , useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { SongsContext } from '../Context/SongsContext';
import Spinner from './Spinner';

const SongLyrics = (props) =>{
    //Get Songs from Context
    const {songs} = useContext(SongsContext);
    //Get track ID
    const trackId = props.match.params.Track_id;
    // Get Specific track from songs list 
    const track = songs.find(song => song.track.track_id == trackId);
    // create state to store lyrics of track
    const [lyrics , setLyrics] = useState([])
    //useEffect method to call api and get lyrics of track then store it in setlyrics
    useEffect(()=>{
        const ApiKey = '29ee208739fff38cbb446a39c805b8c3';
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${ApiKey}`)
            .then(res=>{
                setLyrics(res.data.message.body.lyrics)
            })
    },[]);
    //Check if lyrics or track founded or not 
    if(lyrics === undefined  || track === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0 ) {
        return <Spinner />
    } else {
        return(
            <div className='Track-Lyrics d-flex justify-content-center align-items-center' >
                <div className='container'>
                    <div className='Lyrics'>
                        <Link to='/'><button><i className="fa fa-chevron-left"></i> Back</button></Link>
                        <h5>Artist Name : {track.track.artist_name}</h5>
                        <h6>Track Name : {track.track.track_name}</h6>
                        <h6>Album Name : {track.track.album_name}</h6>
                        <p>{lyrics.lyrics_body}</p>
                        <p><span>Album ID: </span>{track.track.album_id}</p>
                        <p><span>Relesed Date: </span>{track.track.updated_time}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default SongLyrics;