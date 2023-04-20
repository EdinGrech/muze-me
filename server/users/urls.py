from django.urls import path, include
from .views import *

urlpatterns = [
    path('register/', registerAPIView.as_view()),
    path('login/', LoginAPIView.as_view()),
    path('profile/', UserView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('update/', UserUpdateView.as_view()),
]