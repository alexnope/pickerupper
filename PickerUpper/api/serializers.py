from rest_framework import serializers
from .models import pickUpGame

class pickUpGameSerializer(serializers.ModelSerializer):
    class Meta:
        model = pickUpGame
        fields = ('id', 'gameName', 'numPlayers', 'street', 'city', 'state', 'zipCode', 'description', 'createdAt', 'lng', 'lat')

class createPickUpGameSerializer(serializers.ModelSerializer):
    class Meta:
        model = pickUpGame
        fields = ('gameName', 'numPlayers', 'street', 'city', 'state', 'zipCode', 'description', 'lng', 'lat')