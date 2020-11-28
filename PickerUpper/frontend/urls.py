from django.urls import path
from .views import index

urlpatterns = [
    path('home', index),
    path('map', index),
    path('game', index)
]