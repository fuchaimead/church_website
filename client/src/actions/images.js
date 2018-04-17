import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

const addImage = (image) => {
  return { type: 'ADD_IMAGE', image }
}

export const handleUpload = (image, announcement, callback) => {
  debugger
  return(dispatch) => {
    let data = new FormData();
    data.append(image.name, image);
    axios.post('/api/images', data)
      .then( res => {
        dispatch(addImage(res.data));
        callback();
        announcement.image = `${res.data.url}`;
        axios.put(`/api/announcements/${announcement.id}`, { announcement } )
          .then( res => {
            dispatch(setHeaders(res.headers));
          }).catch( err => {
            dispatch(setFlash(`Failed to update user image. Please try again!`, 'red'));
            dispatch(setHeaders(err.headers));
        });
      }).catch( err => {
        dispatch( setFlash('Error uploading file. Please try again!', 'error') );
    });
  }
}