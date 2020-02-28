from django.urls import path
from .views import TeablendlListView

urlpatterns = [
    path('', TeablendlListView.as_view())
]