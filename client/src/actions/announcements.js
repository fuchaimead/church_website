import axios from 'axios';
import { setFlash } from './flash';


export const addAnnouncement = (announcement, history) => {
  return(dispatch) => {
    axios.post('/api/announcements', announcement)
      .then( res => {
        const { headers } = res;
        dispatch({ type: 'ADD_ANNOUNCEMENT', announcement: res.data, headers })
        history.push('./announcements')
      }).catch( res => {
        const { headers } = res;
        dispatch(setFlash('Failed to add announcement. Please try again!', 'red'));
        dispatch({ type: 'SET_HEADERS', headers });
    });
  }
}