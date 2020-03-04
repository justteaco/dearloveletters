# pylint: disable=no-member

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_404_NOT_FOUND, HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_202_ACCEPTED, HTTP_401_UNAUTHORIZED
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import LoveLetter, Comment, Like
from .serializers import LoveLetterSerializer, PopulatedLoveLettersSerializer, CommentSerializer, LikeSerializer

class LoveLetterListView(APIView):

    def get(self, _request):
        
        loveletters = LoveLetter.objects.all()
        
        serialized_loveletters = PopulatedLoveLettersSerializer(loveletters, many=True)
        print(serialized_loveletters)
        return Response(serialized_loveletters.data, status=HTTP_200_OK)

    def post(self, request):
        loveletter = LoveLetterSerializer(data=request.data)

        if loveletter.is_valid():
            loveletter.save()
            return Response(loveletter.data, status=HTTP_201_CREATED)

        return Response(loveletter.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


class LoveLetterDetailView(APIView):


    def get(self, _request, pk):

        try:
            loveletter = LoveLetter.objects.get(pk=pk)
            serialized_loveletters = PopulatedLoveLettersSerializer(loveletter)
            print(serialized_loveletters)
            return Response(serialized_loveletters.data)
        except LoveLetter.DoesNotExist:
            print(serialized_loveletters)
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
            loveletter = LoveLetter.objects.get(pk=pk)
            loveletter.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except LoveLetter.DoesNotExist:
            return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

class CommentListView(APIView):

    def post(self, request, pk):
        request.data['loveletter'] = pk
        request.data['owner'] = request.user.id
        comment = CommentSerializer(data=request.data)

        if comment.is_valid():
            comment.save()
            loveletter = LoveLetter.objects.get(pk=pk)
            serialized_loveletter = PopulatedLoveLettersSerializer(loveletter)

            return Response(serialized_loveletter.data, status=HTTP_201_CREATED)

        return Response(comment.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class CommentDetailView(APIView):

    def delete(self, request, **kwargs):

        try:
            comment = Comment.objects.get(pk=kwargs['comment_pk'])
            if comment.owner.id != request.user.id:
                return Response(status=HTTP_401_UNAUTHORIZED)
            comment.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except Comment.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

class LikesListView(APIView):

    def post(self, request, pk):
        request.data['loveletter'] = pk
        request.data['owner'] = request.user.id

        like = LikeSerializer(data=request.data)

        if like.is_valid():
            like.save()
            loveletter = LoveLetter.objects.get(pk=pk)
            serialized_loveletter = PopulatedLoveLettersSerializer(loveletter)

            return Response(serialized_loveletter.data, status=HTTP_201_CREATED)

        return Response(like.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class LikeDetailView(APIView):

    def delete(self, request, **kwargs):

        try:
            like = Like.objects.get(pk=kwargs['like_pk'])
            if like.owner.id != request.user.id:
                return Response(status=HTTP_401_UNAUTHORIZED)
            like.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except like.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)