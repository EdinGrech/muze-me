from rest_framework import generics
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from .models import News
from .serializers import NewsSerializer
from .news_parser_encoder import news_parser
#authentication
#from rest_framework import authentication, permissions
from django.utils import timezone
from datetime import timedelta
import os
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

class AddNewNews(generics.ListCreateAPIView):
    # get method handler
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class ViewNews(generics.ListAPIView):
    # get method handler
    #get page value from url
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    def get(self, request, *args, **kwargs):
        #check if news had been updated or if it is the first time and that match 
        try: 
            # if field add_date id older then .env variable then update
            if timezone.now() - News.objects.latest('add_date').add_date > timedelta(hours=int(os.getenv('HOURS_TO_UPDATE_NEWS'))):
                news_parser()
        except:
            news_parser()
        page = int(kwargs.get('page'))- 1
        tollerance = ((kwargs.get('tol')/10)*(2))-1
        if page is not None:
            if page >= 0:
                queryset = News.objects.all().order_by('-publishedAt').filter(sentement__gt=tollerance)[page*10:(page+1)*10]
                serializer_class = NewsSerializer(queryset, many=True)
                return Response(serializer_class.data, status=HTTP_200_OK)
            else:
                return Response("Page number must be greater than 0", status=HTTP_400_BAD_REQUEST)
        else:
            return Response("Page number is required", status=HTTP_400_BAD_REQUEST)