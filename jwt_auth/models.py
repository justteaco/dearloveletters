from django.db import models
from django.contrib.auth.models import AbstractUser
# from loveletters.models import LoveLetter

# Create your models here.

class User(AbstractUser):
    email = models.CharField(max_length=40, unique=True)
    profile_image = models.CharField(max_length=500)
    location_city = models.CharField(max_length=40)
    about_me= models.CharField(max_length=500)
