from rest_framework import generics
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from .models import News
from .serializers import NewsSerializer
from .news_parser_encoder import news_parser
#authentication
from rest_framework import authentication, permissions

class AddNewNews(generics.ListCreateAPIView):
    # get method handler
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class ViewNews(generics.ListAPIView):
    # get method handler
    #news_parser()
    #get page value from url
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def get(self, request, *args, **kwargs):
        page = kwargs.get('page')
        print(page)
        if page is not None:
            page = int(page)
            if page > 0:
                page = page - 1
                queryset = News.objects.all()[page*10:page*10+10]
                serializer_class = NewsSerializer(queryset, many=True)
                return Response(serializer_class.data, status=HTTP_200_OK)
            else:
                return Response("Page number must be greater than 0", status=HTTP_400_BAD_REQUEST)
        else:
            return Response("Page number is required", status=HTTP_400_BAD_REQUEST)