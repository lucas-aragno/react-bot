export default () => {
  const messages = [
    'Hey im react-bot!',
    'Do you know what a reducer is?',
    'bro do you even react?'
  ]

  return messages[Math.floor(Math.random() * messages.length)]
}
