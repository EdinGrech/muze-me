from django.db import models


from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
# create a nuser model

# class User(models.Model):
#     username = models.CharField(max_length=50)
#     password = models.CharField(max_length=50)
#     email = models.CharField(max_length=50)
#     profile_pic = models.ImageField(upload_to='profile_pics', blank=True)
#     news_tollerance = models.IntegerField(default=0)

class User_Profile(models.Model):
    username = models.CharField(max_length=255, null=False, unique=True)
    email = models.EmailField(max_length=255, null=False, unique=True)   
    password = models.CharField(max_length=50)
    ifLogged = models.BooleanField(default=False)
    token = models.CharField(max_length=500, null=True, default="")
    profile_pic = models.ImageField(upload_to='profile_pics', blank=True)
    news_tollerance = models.IntegerField(default=0)

    def __str__(self):
        return "{} -{}".format(self.username, self.email)

# create a user profile model using authentication
class 
