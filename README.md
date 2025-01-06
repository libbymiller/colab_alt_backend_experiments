# colab_alt_backend_experiments

playing with y.js as an alternative to livekit using https://syncedstore.org/docs/react



# install

npm install


# run

    HOST=localhost PORT=1234 npx y-websocket-server

    npm run dev


open two windows:

http://localhost:3000/?name=foo

http://localhost:3000/?name=bar

notice the coordinates of the pointer in one appearing in the text of the other

# notes

The default webrtc server didn't work and failed in weird ways, so using websockets for now



