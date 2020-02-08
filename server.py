from aiohttp import web
from aiohttp_index import IndexMiddleware

import socketio

sio = socketio.AsyncServer()
app = web.Application(middlewares=[IndexMiddleware()])
sio.attach(app)


@sio.event
def connect(sid, environ):
    print("connect ", sid)


@sio.event
async def chat_message(sid, data):
    print("message ", data)
    await sio.emit('reply', room=sid)

@sio.event
def disconnect(sid):
    print('disconnect ', sid)


async def api(request):
    text = "Hello, World!"
    return web.Response(text=text)


app.router.add_get('/api', api)
app.router.add_static('/', 'game')


if __name__ == '__main__':
    web.run_app(app, host="0.0.0.0", port="4003")
