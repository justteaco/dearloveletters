# Generated by Django 2.2.9 on 2020-03-03 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feelings', '0006_remove_feeling_loveletters'),
        ('loveletters', '0010_remove_loveletter_feelings'),
    ]

    operations = [
        migrations.AddField(
            model_name='loveletter',
            name='feelings',
            field=models.ManyToManyField(blank=True, related_name='loveletters', to='feelings.Feeling'),
        ),
    ]
