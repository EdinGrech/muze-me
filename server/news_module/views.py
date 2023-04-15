from rest_framework import generics
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from .models import News
from .serializers import NewsSerializer, NewsReadSerializer

class AddNewNews(generics.ListCreateAPIView):
    # get method handler
    queryset = News.objects.all()
    serializer_class = NewsSerializer
