from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'profile_pic', 'news_tollerance']

    # hide password
        extra_kwargs = {
            'id': {'read_only':True},
            'password': {'write_only':True},
        }


    # hash passwords in the database, override default create function
    def create(self, validated_data):
        #extract password
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data) #doesnt include password

        if password is not None:
            instance.set_password(password) #hashes password
        instance.save()
        return instance

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'profile_pic', 'news_tollerance']

    # hide password
        extra_kwargs = {
            'id': {'read_only':True},
            'email': {'read_only':True},
            'password': {'write_only':True},
        }
    
    # update user if any of the fields are changed
    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.profile_pic = validated_data.get('profile_pic', instance.profile_pic)
        instance.news_tollerance = validated_data.get('news_tollerance', instance.news_tollerance)
        instance.save()
        return instance