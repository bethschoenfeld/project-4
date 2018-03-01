function innovatorReducer(state = [], action) {

  switch (action.type) {
    case 'GET_INNOVATORS':
      return [...action.innovatorsFromDatabase]

    case 'GET_ONE_INNOVATOR':
      return [action.innovatorFromDatabase]

    case 'CREATE_INNOVATOR':
      return [...state,action.newInnovatorData]

    case 'EDIT_CITY':
      return updatedObjectInArray(state, action)

    case 'DELETE_CITY':
      return state.filter(innovator => innovator._id !== action.innovatorToDeleteId)

    default:
      return state
  }
}

function updatedObjectInArray(array, action) {
  return array.map((innovator) => {
    if (innovator._id !== action.editedInnovatorData.id) {
      return innovator
    }
    return{
      ...innovator,
      ...action.editedInnovatorData
    }
  })
}

export default innovatorReducer