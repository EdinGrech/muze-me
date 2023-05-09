from .news_api_getter import get_headline_news
from .serializers import NewsSerializer
import nltk
from .models import News
nltk.download('vader_lexicon')
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')
from .news_keyword_extractor import extract_keywords
from django.utils import timezone

def sentementalizro(text):
    from nltk.sentiment.vader import SentimentIntensityAnalyzer
    sid = SentimentIntensityAnalyzer()
    return ((sid.polarity_scores(str(text))))['compound']

def news_parser():
    print("news_parser_start")
    responce = get_headline_news()
    if responce['status'] == 'ok':
        for artical in responce['articles']:
            if News.objects.filter(url=artical['url']).exists() or artical['urlToImage'] == None or artical['description'] == None:
                continue
            artical['source_id'] = artical['source']['id']
            artical['source_name'] = artical['source']['name']
            del artical['source']
            if artical['author'] == None:
                artical['author'] = "None"
            if artical['content'] == None:
                artical['content'] = artical['description']
            artical['sentement'] = sentementalizro(artical['content'])
            artical['list_of_keywords'] = extract_keywords(artical['description'])
            artical['add_date'] = timezone.now()
            serializer = NewsSerializer(data=artical)
            if serializer.is_valid():
                serializer.save()
            else:
                print(serializer.errors)

     