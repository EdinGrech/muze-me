from .models import News
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.core.exceptions import ValidationError

class NewsSerializer(serializers.ModelSerializer):
    source_id = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=News.objects.all())]
    )
    source_name = serializers.CharField()
    author = serializers.CharField()
    title = serializers.CharField(
        required=True,
    )
    description = serializers.CharField(
        required=True,
    )
    url = serializers.URLField(
        required=True,
    )
    urlToImage = serializers.URLField()
    publishedAt = serializers.DateTimeField()
    content = serializers.CharField()

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
        )

class NewsReadSerializer(serializers.ModelSerializer):
    source_id = serializers.CharField()
    source_name = serializers.CharField()
    author = serializers.CharField()
    title = serializers.CharField()
    description = serializers.CharField()
    url = serializers.URLField()
    urlToImage = serializers.URLField()
    publishedAt = serializers.DateTimeField()
    content = serializers.CharField()

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
        ),
        read_only_fields = (
            'source_id',
            'source_name',
            'author',
            'title',
            'description',
            'url',
            'urlToImage',
            'publishedAt',
            'content'
        )