from rest_framework import serializers
from .models import Teablend
from feelings.models import Feeling
from feelings.serializers import FeelingSerializer

class TeablendSerializer(serializers.ModelSerializer):

    class Meta:
        model = Teablend
        fields = ('id', 'herb_name', 'herb_property', 'feelings')

class PopulatedTeablendSerializer(TeablendSerializer):
    feelings = FeelingSerializer(many=True)
  