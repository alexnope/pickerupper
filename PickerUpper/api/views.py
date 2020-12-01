from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics,status
from .serializers import pickUpGameSerializer, createPickUpGameSerializer
from .models import pickUpGame
from rest_framework.views import APIView
from rest_framework.response import Response

class pickUpGameView(generics.ListAPIView):
    queryset = pickUpGame.objects.all()
    serializer_class = pickUpGameSerializer

class createPickUpGameView(APIView):
    serializer_class = createPickUpGameSerializer
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            gameName = serializer.data.get('gameName')
            numPlayers = serializer.data.get('numPlayers')
            street = serializer.data.get('street')
            city = serializer.data.get('city')
            state = serializer.data.get('state')
            zipCode = serializer.data.get('zipCode')
            description = serializer.data.get('description')
            lng = serializer.data.get('lng')
            lat = serializer.data.get('lat')
            # host = self.request.session.session_key 
            game = pickUpGame(gameName=gameName, numPlayers=numPlayers, street=street,
            city=city, state=state, zipCode=zipCode, description=description, lng=lng, lat=lat)
            game.save()
            return Response(pickUpGameSerializer(game).data, status=status.HTTP_200_OK)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)