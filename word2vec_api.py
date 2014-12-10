from flask import Flask, request
from flask.ext.restful import reqparse, Api, Resource
from gensim.models.word2vec import Word2Vec
import json

print 'loading model'
MODEL = Word2Vec.load_word2vec_format(
    'GoogleNews-vectors-negative300.bin.gz', binary=True)
print 'model loaded'

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def post(self):
        # reqparse didn't work, when a single item was passed in the negative
        # field It was splitting the string by character
        args = request.get_json()
        result = MODEL.most_similar(
            positive=args['positive'],
            negative=args['negative'],
            topn=args['topn'],
        )
        return {'result': result}, 201

api.add_resource(HelloWorld, '/most_similar')

if __name__ == '__main__':
    app.run(debug=True)
