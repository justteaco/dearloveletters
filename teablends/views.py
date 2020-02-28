# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Teablend
from feelings.models import Feeling
from .serializers import PopulatedTeablendsSerializer, TeablendSerializer

class TeablendlListView(APIView):

    def get(self, _request):
        teablends = Teablend.objects.all()
        serialized_teablends = PopulatedTeablendsSerializer(teablends, many=True)
        return Response(serialized_teablends.data)