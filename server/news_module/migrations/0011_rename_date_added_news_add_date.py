# Generated by Django 4.2 on 2023-05-04 22:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news_module', '0010_news_date_added'),
    ]

    operations = [
        migrations.RenameField(
            model_name='news',
            old_name='date_added',
            new_name='add_date',
        ),
    ]
