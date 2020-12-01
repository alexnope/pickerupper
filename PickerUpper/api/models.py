from django.db import models
import uuid 
import string
import random

# Create your models here.
class pickUpGame(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # host = models.CharField(max_length=50, unique=True) 
    active = models.BooleanField(default=True)
    gameName = models.CharField(max_length=50, default=False)
    numPlayers = models.IntegerField(default=False)
    street = models.CharField(max_length=50, default=False)
    city = models.CharField(max_length=50, default=False)
    state = models.CharField(max_length=20, default=False)
    zipCode = models.CharField(max_length=10, default=False)
    description= models.CharField(max_length=500, default=False)
    lat = models.FloatField(default=False)
    lng = models.FloatField(default=False)
    createdAt = models.DateTimeField(auto_now_add=True)
