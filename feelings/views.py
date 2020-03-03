# pylint: disable=no-member
from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF

from .models import Feeling
from .serializers import FeelingSerializer, PopulatedFeelingSerializer
# Create your views here.

class FeelingListView(APIView):

    def get(self, request):
        feelings = Feeling.objects.all() #gets all feelings
        serialized_feeling = FeelingSerializer(feelings, many=True)
        return Response(serialized_feeling.data)

class FeelingDetailView(APIView):


    def get(self, _request, pk):

        try:
            feeling = Feeling.objects.get(pk=pk)
            serialized_feeling = PopulatedFeelingSerializer(feeling)
            print(serialized_feeling.data)
            return Response(serialized_feeling.data)
        except Feeling.DoesNotExist:
            # print(serialized_feeling)
            return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

    def put(self, request, pk):

        try:
            print(pk)
            loveletter = LoveLetter.objects.get(pk=pk)
            print(loveletter)
            updated_loveletter = LoveLetterSerializer(loveletter, data=request.data)
            if updated_loveletter.is_valid():
                updated_loveletter.save()
                return Response(updated_loveletter.data, status=HTTP_202_ACCEPTED)
            return Response(updated_loveletter.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
        except LoveLetter.DoesNotExist:
            return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

    def delete(self, _request, pk):

        try:
            feeling= Feeling.objects.get(pk=pk)
            feeling.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except Feeling.DoesNotExist:
            return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)





