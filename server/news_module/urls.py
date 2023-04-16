from django.urls import path
from .views import AddNewNews, ViewNews

urlpatterns = [
    path('add-new-news/', AddNewNews.as_view(), name="add-new-news"),
    path('view-news/<int:page>', ViewNews.as_view(), name="view-news"),
]