function eventReducer(state = [], state) {

switch (action.type) {

  case 'GET_EVENTS':
    return[...action.eventsFromDatabase]

  case 'GET_ONE_EVENT':
    return [action.eventsFromDatabase]

  case 'CREATE_EVENT':
    return [...state,
    action.newEventData
  ]

  case 'EDIT_EVENT':
    return state

  case 'DELETE_EVENT':
    return state.filter(event => event.id !== action.eventToDeleteId)

    default: 
      return state
}

}
export default eventReducer