from django.urls import path
from .views import LoveLetterListView, LoveLetterDetailView, CommentListView, CommentDetailView, LikesListView, LikeDetailView

urlpatterns = [
    path('', LoveLetterListView.as_view()),
    path('<int:pk>/', LoveLetterDetailView.as_view()),
    path('<int:pk>/comments/', CommentListView.as_view()),
    path('<int:pk>/comments/<int:comment_pk>/', CommentDetailView.as_view()),
    path('<int:pk>/likes/', LikesListView.as_view()),
    path('<int:pk>/likes/<int:likes_pk>/', LikeDetailView.as_view())

]