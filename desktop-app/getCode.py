import flask
from flask import request
from flask import make_response
from flask import jsonify
from flask_cors import CORS
from flask_cors import cross_origin
import json

code = ""

def shutdown_server():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Not running with the Werkzeug Server')
    func()

def main():
    app = flask.Flask(__name__)
    cors = CORS(app)

    @app.route('/', methods=['GET'])
    @cross_origin(origin="localhost")
    def home():
        global code

        queryString = request.args
        try:
            code = queryString["code"]
            return "<h1>Authorized</h1><p>This window will automatically close.</p>"
        except KeyError:
            queryString["fetch"]
            res = make_response(jsonify({"code": code}), 200)
            return res
        else:
            return "404 - Unknown Querystring"

    @app.route('/shutdown', methods=['POST'])
    def shutdown():
        shutdown_server()
        return 'Server shutting down...'

    app.run(host="127.0.0.1", port=9000)

if __name__ == "__main__":
    main()