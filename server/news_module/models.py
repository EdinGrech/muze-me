from django.db import models

# Create news model

class News(models.Model):
    source_id = models.CharField(max_length=100)
    source_name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=256)
    description = models.CharField()
    url = models.URLField()
    urlToImage = models.URLField()
    publishedAt = models.DateTimeField()
    content = models.CharField()

