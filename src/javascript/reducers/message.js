export default (state = 'hello!', action) => {
  switch (action.type) {
    case 'TALK':
      return action.text
    default:
      return state
  }
}
