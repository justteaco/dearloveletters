from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    email = models.CharField(max_length=40, unique=True)
    profile_image = models.CharField(max_length=500)
    location = models.CharField(max_length=30, blank=True)