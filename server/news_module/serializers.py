from .models import News
from rest_framework import serializers
# from rest_framework.validators import UniqueValidator
# from django.core.exceptions import ValidationError
# from rest_framework import authentication, permissions
class NewsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    source_id = serializers.CharField(allow_null=True)
    source_name = serializers.CharField(allow_null=True)
    author = serializers.CharField(allow_null=True)
    title = serializers.CharField()
    description = serializers.CharField()
    url = serializers.URLField()
    urlToImage = serializers.URLField()
    publishedAt = serializers.DateTimeField(allow_null=True)
    content = serializers.CharField()
    sentement = serializers.FloatField()

    class Meta:
        model = News
        fields = (
            'id',
            'source_id',
            'source_name',
            'author',
            'title',
            'description',
            'url',
            'urlToImage',
            'publishedAt',
            'content',
            'sentement',
        )
    