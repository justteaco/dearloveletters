# pylint: disable=no-member
from django.db import models
from django.core.validators import MaxLengthValidator, MinLengthValidator
from django.contrib.auth import get_user_model
from django.utils import timezone
User = get_user_model()

# Create your models here.
class LoveLetter(models.Model):
  title = models.CharField(max_length=60)
  image = models.CharField(max_length=200)
  love_letter = models.CharField(max_length=800)
  feelings = models.ManyToManyField('feelings.Feeling', related_name='loveletters', blank=True)
  published = models.DateTimeField(default=timezone.now)
  recipient = models.ForeignKey(User, related_name='love_letter', null=True, on_delete=models.CASCADE)
  owner = models.ForeignKey(User, related_name='love_letter+', null=True, on_delete=models.CASCADE)

  def __str__(self):
        return self.title

class Comment(models.Model):
  text = models.CharField(max_length=500)
  loveletter = models.ForeignKey(LoveLetter, related_name='comments', null=True, on_delete=models.CASCADE)
  owner = models.ForeignKey(User, related_name='comments', null=True, on_delete=models.CASCADE)

  def __str__(self):
    return f'Comment {self.id} on {self.loveletter}'

class Like(models.Model):
  like = models.IntegerField(default=0)
  loveletter = models.ForeignKey(LoveLetter, related_name='likes', null=True, on_delete=models.CASCADE)
  owner = models.ForeignKey(User, related_name='likes', null=True, on_delete=models.CASCADE)

  def __str__(self):
    return f'Like {self.id} on {self.loveletter}'