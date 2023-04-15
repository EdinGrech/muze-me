from django.urls import path
from .views import NewsSerializer, NewsReadSerializer

urlpatterns = [
    path('add-new-news/', NewsSerializer.as_view(), name="add-new-news"),
]