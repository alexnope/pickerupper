from django.urls import path
from .views import pickUpGameView, createPickUpGameView

urlpatterns = [
    path('pickUpGame', pickUpGameView.as_view()),
    path('createPickUpGame', createPickUpGameView.as_view()),
]