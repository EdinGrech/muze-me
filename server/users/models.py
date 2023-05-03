from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    last_login = models.DateTimeField()
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    first_name = models.CharField(max_length=255, blank=True)
    last_name = models.CharField(max_length=255, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    username = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    profile_pic = models.ImageField(upload_to='profile_pics', blank=True, null=True) #when I have tile will implement
    news_tollerance = models.IntegerField(default=0)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []