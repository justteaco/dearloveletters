# Generated by Django 2.2.9 on 2020-03-03 18:57

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0004_auto_20200303_1551'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='location_city',
            field=models.CharField(default=django.utils.timezone.now, max_length=40),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='profile_image',
            field=models.CharField(default=django.utils.timezone.now, max_length=40),
            preserve_default=False,
        ),
    ]
