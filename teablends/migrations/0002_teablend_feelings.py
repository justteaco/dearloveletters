# Generated by Django 2.2.9 on 2020-02-27 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feelings', '0001_initial'),
        ('teablends', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='teablend',
            name='feelings',
            field=models.ManyToManyField(related_name='teablends', to='feelings.Feeling'),
        ),
    ]
