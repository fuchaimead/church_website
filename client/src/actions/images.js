import axios from 'axios';
import { setFlash } from './flash';


const addImage = (image) => {
  return { type: 'ADD_IMAGE', image }
}

export const handleUpload = (image, callback) => {
  return(dispatch) => {
    let data = new FormData();
    data.append(image.name, image);
    axios.post('/api/images', data)
      .then( res => {
        dispatch(addImage(res.data));
        callback();
        image = `${res.data.url}`;
      }).catch( err => {
        dispatch( setFlash('Error uploading file. Please try again!', 'error') );
    });
  }
}