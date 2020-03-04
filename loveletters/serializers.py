from rest_framework import serializers
from django.contrib.auth import get_user_model
from feelings.models import Feeling
from .models import LoveLetter, Comment, Like
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

  class Meta:
    model = User
    fields = ('id', 'username')
  
class FeelingSerializer(serializers.ModelSerializer):

  class Meta:
    model = Feeling
    fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):

  class Meta:
    model = Comment
    fields = '__all__'

class LoveLetterSerializer(serializers.ModelSerializer):

  class Meta:
    model = LoveLetter
    fields = '__all__'

class PopulatedCommentSerializer(CommentSerializer):

  owner = UserSerializer()

class LikeSerializer(serializers.ModelSerializer):

  class Meta:
    model = Like
    fields = '__all__'


class PopulatedLoveLettersSerializer(LoveLetterSerializer):
  comments = PopulatedCommentSerializer(many=True)
  likes = LikeSerializer(many=True)




