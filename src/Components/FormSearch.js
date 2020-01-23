import React , {useContext} from 'react';
import { SongsContext } from '../Context/SongsContext';

const FormSearch = () =>{
    const {setSong , setTrack , Search} = useContext(SongsContext);
    const HandelInput = (e) => {
        setTrack(e.target.value);
    }
    const HandelSupmit = (e) =>{
        e.preventDefault();
        setSong('');
        Search();
    }
    return(
        <div className='search d-flex justify-content-center align-items-center'>
            <div className='container'>
                <form onSubmit={HandelSupmit} className='form-group d-flex justify-content-center align-items-center flex-column'>
                    <h1><i className="fa fa-music"></i>Search For A Song</h1>
                    <h5>Get The Lyrics For any Track</h5>
                    <div className='w-100 d-flex justify-content-center align-items-center'>
                        <input required onChange={HandelInput} className='form-control' typr='text' placeholder='Please Enter Your Song' />
                        <button className='btn btn-primary'>Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default FormSearch