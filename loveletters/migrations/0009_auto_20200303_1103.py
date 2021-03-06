# Generated by Django 2.2.9 on 2020-03-03 11:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('feelings', '0005_auto_20200303_1103'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('loveletters', '0008_remove_loveletter_feelings'),
    ]

    operations = [
        migrations.AddField(
            model_name='loveletter',
            name='feelings',
            field=models.ManyToManyField(blank=True, related_name='_loveletter_feelings_+', to='feelings.Feeling'),
        ),
        migrations.AddField(
            model_name='loveletter',
            name='recipient',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='loveletters+', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='loveletter',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='loveletters+', to=settings.AUTH_USER_MODEL),
        ),
    ]
