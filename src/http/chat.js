const SERVER_LOCATION = 'ws://127.0.0.1:1337'

window.webSocket = window.WebSocket || window.MozWebSocket

let connection = new WebSocket(SERVER_LOCATION)

connection.onopen = () => {
  console.log('connection ready')
}

connection.onerror = (error) => {
  console.log(error, 'on error')
}

connection.onmessage = (message) => {
  try {
    let json = JSON.parse(message.data)
  } catch (e) {
    console.log('error', message.data)
    return
  }
  // dispatch action to get messages
}

