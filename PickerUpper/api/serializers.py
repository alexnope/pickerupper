from rest_framework import serializers
from .models import pickUpForm

class pickUpFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = pickUpForm
        fields = ('id','code','host')