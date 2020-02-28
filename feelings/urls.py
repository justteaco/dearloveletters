from django.urls import path
from .views import FeelingListView, FeelingDetailView

urlpatterns = [
    path('', FeelingListView.as_view()),
    path('<int:pk>/', FeelingDetailView.as_view())
  
]
