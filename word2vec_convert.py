from flask import Flask, request
from flask.ext.restful import reqparse, Api, Resource
from gensim.models.word2vec import Word2Vec
import json

print 'loading model'
MODEL = Word2Vec.load_word2vec_format(
    'GoogleNews-vectors-negative300.bin.gz', binary=True)
print 'model loaded'
print 'dumping model'
MODEL.save('GoogleNews-vectors-negative300.gensim')
