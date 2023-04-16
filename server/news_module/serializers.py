from .models import News
from rest_framework import serializers
# from rest_framework.validators import UniqueValidator
# from django.core.exceptions import ValidationError
# from rest_framework import authentication, permissions
class NewsSerializer(serializers.ModelSerializer):
    source_id = serializers.CharField()
    source_name = serializers.CharField()
    author = serializers.CharField()
    title = serializers.CharField()
    description = serializers.CharField()
    url = serializers.URLField()
    urlToImage = serializers.URLField()
    publishedAt = serializers.DateTimeField()
    content = serializers.CharField()
    sentement = serializers.FloatField()

    class Meta:
        model = News
        fields = (
            'source_id',
            'source_name',
            'author',
            'title',
            'description',
            'url',
            'urlToImage',
            'publishedAt',
            'content'
            'sentement'
        )
    