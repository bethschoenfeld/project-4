import axios from 'axios'



export function sendInnovatorsToState(innovatorsFromDatabase) {
  return {type: 'GET_INNOVATORS', innovatorsFromDatabase}
}

export function getInnovatorRoute() {
  return function (dispatch) {
    return axios.get('/api/innovators')
    .then((response) => {
      dispatch(sendInnovatorsToState(response.data))
    })
  }
}

export function sendOneInnovatorToState(innovatorFromDatabase) {
  return {type: 'GET_ONE_INNOVATOR', innovatorFromDatabase}
}

export function getOneInnovatorRoute(innovatorId) {
  return function (dispatch) {
    return axios.get(`/api/innovators/${innovatorId}`)
    .then((response) => {
      dispatch(sendOneInnovatorToState(response.data))
    })
  }
}

export function sendNewInnovatorToState(newInnovatorData) {
  return {type: 'CREATE_INNOVATOR', newInnovatorData}
}

export function sendNewInnovatorToDatabase(newInnovatorInfo) {
  return function (dispatch) {
    return axios.post('/api/innovators', newInnovatorInfo)
    .then((response) => {
      dispatch(sendNewInnovatorToState(response.data))
    })
  }
}

export function editedInnovatorToState(editedInnovatorData) {
  return {type: 'EDIT_INNOVATOR', editedInnovatorData}
}

export function editedInnovatorInDatabase(editedInnovatorInfo) {
  return function (dispatch) {
    return axios.patch(`/api/innovators/${editedInnovatorInfo.id}`, editedInnovatorInfo)
    .then((response) => {
      dispatch(editedInnovatorToState(editedInnovatorInfo))
    })
  }
}

export function deleteInnovatorFromState(innovatorToDeleteId) {
  return {type: 'DELETE_INNOVATORS', innovatorToDeleteId}
}

export function deleteInnovatorFromDatabase(innovatorToDeleteFromDatabase) {
  return function (dispatch) {
    return axios.delete(`/api/innovators/${innovatorToDeleteFromDatabase._id}`)
    .then((response) => {
      dispatch(deleteInnovatorFromState(innovatorToDeleteFromDatabase._id))
    })
  }
}