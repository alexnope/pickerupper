from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import pickUpFormSerializer
from .models import pickUpForm

class pickUpFormView(generics.ListAPIView):
    queryset = pickUpForm.objects.all()
    serializer_class = pickUpFormSerializer