# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Teablend
from feelings.models import Feeling
from .serializers import PopulatedTeablendSerializer, TeablendSerializer

class TeablendlListView(APIView):

    def get(self, _request):
        teablends = Teablend.objects.all()
        serialized_teablends = PopulatedTeablendSerializer(teablends, many=True)
        return Response(serialized_teablends.data)

class TeablendDetailView(APIView):


    def get(self, _request, pk):

        try:
            teablend = Teablend.objects.get(pk=pk)
            serialized_teablend = PopulatedTeablendSerializer(teablend)
            print(serialized_teablend.data)
            return Response(serialized_teablend.data)
        except Teablend.DoesNotExist:
            # print(serialized_feeling)
            return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

  