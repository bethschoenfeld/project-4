import axios from 'axios'

export function sendEventsToState(eventsFromDatabase) {
  return {type: 'GET_EVENTS', eventsFromDatabase}
}

export function getEventsRoute(innovatorId) {
  return function (dispatch) {
    return axios.get(`api/innovators/${innovatorId}/events`)
    .then((response) => {
      dispatch(sendEventsToState(response.data))
    })
  }
}

export function sendOneEventToState(eventFromDatabase) {
  return {type: 'GET_ONE_EVENT', eventFromDatabase}
}
export function getOneEventRoute(innovatorId, eventId) {
  return function (dispatch) {
    return axios.get(`/api/innovators/${innovatorId}/events/${eventId}`)
    .then((response) => {
      dispatch(sendOneEventToState(response.data))
    })
  }
}

export function sendNewEventToState(newEventData) {
  return {type: 'CREATE_EVENT', newEventData}
}
export function sendNewEventToDatabase(innovatorId, newEventInfo) {
  return function (dispatch) {
    return axios.post(`/api/innovators/${innovatorid}/events`, newEventInfo)
      .then((response) => {
      dispatch(sendNewEventToState(response.data))
      })
    }
}


export function editedEventToState(editedEventData) {
  return {type: 'EDIT_EVENT', editedEventData}
}
export function editEventInDatabase(innovatorId, editedEventInfo) {
  return function (dispatch) {
    return axios.patch(`/api/innovators/${innovatorId}/events/${editedEventInfo.id}`, editedEventInfo)
    .then((response) => {
      dispatch(editedEventToState(editedEventInfo))
    })
  }
}

export function deleteEventFromState(eventToDeleteId) {
  return {type: 'DELETE_EVENT', eventToDeleteId}
}
export function deleteEventFromDatabase(innovatorId, eventToDeleteFromDatabase) {
  return function (dispatch) {
    return axios.delete(`/api/innovators/${innovatorId}/events/${eventToDeleteFromDatabase.id}`)
    .then((response) => {
      dispatch(deleteEventFromState(eventToDeleteFromDatabase.id))
    })
  }
}
