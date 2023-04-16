from newsapi import NewsApiClient
import os
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())
newsapi = NewsApiClient(os.environ.get("NEWS-API-KEY"))

def get_headline_news():
    return newsapi.get_top_headlines(language='en', page_size=100)