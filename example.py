'''
Created on Oct 28, 2017

@author: Prathmesh
'''
# -*- coding: utf-8 -*-

import httplib, urllib
import json

# **********************************************
# *** Update or verify the following values. ***
# **********************************************

# Replace the accessKey string value with your valid access key.
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

def GetSentiment (documents):
    "Gets the sentiments for a set of documents and returns the information."

    headers = {'Ocp-Apim-Subscription-Key': accessKey}
    conn = httplib.HTTPSConnection (uri)
    body = json.dumps (documents)
    conn.request ("POST", path, body, headers)
    response = conn.getresponse ()
    return response.read ()

documents = { 'documents': [
    { 'id': '1', 'language': 'en', 'text': 'i just want to kill myself' }, 
    { 'id': '2', 'language': 'en', 'text': 'I fking hate my life right now' }
]}

print 'Please wait a moment for the results to appear.\n'

result = GetSentiment (documents)
print (json.dumps(json.loads(result), indent=4))