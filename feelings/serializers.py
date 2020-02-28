from rest_framework import serializers
from django.contrib.auth import get_user_model
from teablends.models import Teablend
from .models import Feeling 
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username')

class FeelingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Feeling
        fields = '__all__'


class TeablendSerializer(serializers.ModelSerializer):

    class Meta:
        model = Teablend
        fields = '__all__'



class PopulatedFeelingSerializer(FeelingSerializer):
    owner = UserSerializer()
    teablends = TeablendSerializer(many=True)
