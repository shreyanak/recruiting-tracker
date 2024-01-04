import mysql.connector
import json
import requests


 # Database connection
stormshelters_db = mysql.connector.connect(
    host = '127.0.0.1',
    user = 'root',
    database = 'sys'
)