import axios from 'axios';
import { setFlash } from './flash';

export const getAnnouncements = () => {
  return(dispatch) => {
    axios.get('/api/announcements')
      .then( res => {
        const announcements = res.data;
        dispatch({ type: 'GET_ANNOUNCEMENTS', announcements });
      }).catch( res => {
        const { headers } = res;
        dispatch(setFlash('Failed to get announcement. Please try again!', 'red'));
        dispatch({ type: 'SET_HEADERS', headers });
    });
  }
}

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

export const editAnnouncement = (announcement, id) => {
  return(dispatch) => {
    axios.put(`/api/announcements/${id}`, announcement) 
      .then( res => {
        const { headers } = res;
        dispatch({ type: 'EDIT_ANNOUNCEMENT', announcement: res.data, headers })
      }).catch( err => {
        const { headers } = err;
        dispatch(setFlash('Failed to update announcement. Please try again!', 'red'));
        dispatch({ type: 'SET_HEADERS', headers })
    });
  }
}

export const deleteAnnouncement = (id) => {
  return(dispatch) => {
    axios.delete(`/api/announcements/${id}`)
      .then( res => {
        const { headers } = res;
        dispatch({ type: 'DELETE_ANNOUNCEMENT', id, headers })
      }).catch( err => {
        const { headers } = err;
        dispatch(setFlash('Failed to delete announcement.', 'red'))
        dispatch({ type: 'SET_HEADERS', headers })
    });
  }
}