from django.urls import path
from .views import pickUpFormView

urlpatterns = [
    path('pickUpForm', pickUpFormView.as_view())
]