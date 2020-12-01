from django.urls import path
from .views import pickUpGameView, createPickUpGameView, getPickUpGamesView

urlpatterns = [
    path('pickUpGame', pickUpGameView.as_view()),
    path('createPickUpGame', createPickUpGameView.as_view()),
    path('getPickUpGames', getPickUpGamesView.as_view()),
]