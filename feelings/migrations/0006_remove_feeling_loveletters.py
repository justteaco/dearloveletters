# Generated by Django 2.2.9 on 2020-03-03 11:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('feelings', '0005_auto_20200303_1103'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feeling',
            name='loveletters',
        ),
    ]
