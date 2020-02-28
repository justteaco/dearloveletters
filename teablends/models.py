from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Teablend(models.Model):
    herb_name = models.CharField(max_length=30)
    herb_property = models.CharField(max_length=300)
    # owner = models.ForeignKey(User, related_name='teablends', on_delete=models.CASCADE)

    def __str__(self):
        return self.herb_name
