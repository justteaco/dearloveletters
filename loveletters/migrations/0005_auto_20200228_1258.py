# Generated by Django 2.2.9 on 2020-02-28 12:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('loveletters', '0004_loveletter_published'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='loveletter',
            name='penpal_name',
        ),
        migrations.AddField(
            model_name='loveletter',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='love_letter+', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='loveletter',
            name='recipient',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='love_letter', to=settings.AUTH_USER_MODEL),
        ),
    ]
