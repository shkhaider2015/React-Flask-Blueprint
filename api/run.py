import time
from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

# @app.route('/time')
# def get_current_time():
#     return {'time': time.time()}

class Time(Resource):
    def get(self):
        return {'time' : time.time()}

class HelloWorld(Resource):
    def get(self):
        return {'hello' : 'Hello Flask'}

api.add_resource(HelloWorld, '/hello')
api.add_resource(Time, '/time')

if __name__ == "__main__":
    app.run(Debug=True)