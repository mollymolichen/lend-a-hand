'''
Created on Oct 28, 2017

@author: Prathmesh
'''
# -*- coding: utf-8 -*-
    
from flask import Flask, request

import httplib
import json

# Replace the accessKey string value with the valid access key.
accessKey = '6d96f25b731f424297e6723ded187927'

# Replace or verify the region.
#
# You must use the same region in your REST API call as you used to obtain your access keys.
# For example, if you obtained your access keys from the westus region, replace 
# "westcentralus" in the URI below with "westus".
#
# NOTE: Free trial access keys are generated in the westcentralus region, so if you are using
# a free trial access key, you should not need to change this region.
uri = 'eastus2.api.cognitive.microsoft.com' #replace with westcentralus if doesnt work
path = '/text/analytics/v2.0/sentiment'
# def fileRead(filename):
#     
#     return

def GetSentiment (var1):
    #"Gets the sentiments for a set of documents and returns the information."
    
    documents = { 'documents': [
        { 'id': '1', 'language': 'en', 'text': var1 }, 
  #      { 'id': '2', 'language': 'en', 'text': var2 }
    ]}
    headers = {'Ocp-Apim-Subscription-Key': accessKey}
    conn = httplib.HTTPSConnection (uri)
    body = json.dumps (documents)
    conn.request ("POST", path, body, headers)
    response = conn.getresponse ()
    dict1 = (response.read())
    return dict1

if __name__ == '__main__':
    
    print(GetSentiment("hello"))
    

#     print 'Please wait a moment for the results to appear.\n'

    

app = Flask(__name__)

@app.route('/')
def change():
    print("hi")
    status = request.args.get('text', '')
    print("status",status)
    temp =  GetSentiment(status)
    print(temp,"dzjfzklkudf")
    return temp


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
    
    
    