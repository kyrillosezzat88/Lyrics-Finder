import React , {useContext} from 'react';
import { SongsContext } from '../Context/SongsContext';
import {Link} from 'react-router-dom'
import Spinner from './Spinner';
const SongsList = () =>{
    //Get Songs from Context
    const {songs} = useContext(SongsContext);
    //Map Them if there is songs 
    const song = songs.length ? (
        songs.map(song => {
            return(
                <div className='col-12 col-md-6' key={song.track.track_id}>
                    <div className='track'>
                        <h6>{song.track.artist_name}</h6>
                        <p><span><i className="fas fa-play"></i>Track: </span>{song.track.track_name}</p>
                        <p><span><i className="fas fa-compact-disc"></i>Album: </span>{song.track.album_name}</p>
                        <Link to={'/' + song.track.track_id}><button>View Lyric <i className="fa fa-chevron-right"></i></button></Link>
                    </div>
                </div>
            )
        })
    ) : (
        <Spinner/>
    )
    return(
        <div className='SongsList'>
                <div className='container'>
                <h2 className='text-center top'>Top 10 Tracks</h2>
                    <div className='row'>
                        {song}
                    </div>
                </div>
        </div>
    )
}

export default SongsList