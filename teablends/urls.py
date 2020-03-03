from django.urls import path
from .views import TeablendlListView, TeablendDetailView

urlpatterns = [
    path('', TeablendlListView.as_view()),
    path('<int:pk>/', TeablendDetailView.as_view())
]