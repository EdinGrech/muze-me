from django.db import models

class News(models.Model):
    source_id = models.CharField(max_length=256, null=True)
    source_name = models.CharField(max_length=256, null=True)
    author = models.CharField(max_length=256, null=True)
    title = models.CharField(max_length=256, null=False)
    description = models.TextField()
    url = models.URLField(null=False)
    urlToImage = models.URLField()
    publishedAt = models.DateTimeField()
    content = models.TextField()
    sentement = models.FloatField(null=False,default=0.0)
    list_of_keywords = models.CharField(max_length=100, null=True)

# Example of a response from the News API:
# {
# "status": "ok",
# "totalResults": 36,
# -"articles": [
# -{
# -"source": {
# "id": null,
# "name": "Euronews"
# },
# "author": null,
# "title": "France Pension Reforms: Macron signs bill into law overnight - Euronews",
# "description": "French President Emmanuel Macron signed his controversial pension reform into law on Saturday after the Constitutional Council approved a plan to raise the retirement age from 62 to 64.",
# "url": "https://www.euronews.com/2023/04/14/france-the-constitutional-council-validates-most-of-macons-controversial-pension-reform",
# "urlToImage": "https://static.euronews.com/articles/stories/07/53/51/92/1000x563_cmsv2_959e6d8e-41d8-5d32-9f4f-17008d2d669c-7535192.jpg",
# "publishedAt": "2023-04-15T06:11:15Z",
# "content": "Frances President Emmanuel Macron has promulgated his pension reform into law which includes raising the retirement age to 64 after the Constitutional Council on Friday approved the controversial pla… [+3770 chars]"
# },]}

