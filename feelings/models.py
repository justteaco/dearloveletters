from django.db import models



# Create your models here.
class Feeling(models.Model):
  emotion = models.CharField(max_length=50)
  teablends = models.ManyToManyField('teablends.Teablend', related_name='feelings')

  def __str__(self):
    return self.emotion