from .news_api_getter import get_headline_news
from .serializers import NewsSerializer
import nltk
nltk.download('vader_lexicon')

def sentementalizro(text):
    from nltk.sentiment.vader import SentimentIntensityAnalyzer
    sid = SentimentIntensityAnalyzer()
    return ((sid.polarity_scores(str(text))))['compound']

def news_parser():
    responce = get_headline_news()
    if responce['status'] == 'ok':
        for artical in responce['articles']:
            artical['source_id'] = artical['source']['id'] = "test"
            artical['source_name'] = artical['source']['name'] = "test"
            artical['sentiment'] = sentementalizro(artical['content'])
            serializer = NewsSerializer(data=artical)
            if serializer.is_valid():
                serializer.save()
            else:
                print(serializer.errors)

     