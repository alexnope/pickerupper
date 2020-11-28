from django.db import models
import string
import random

def generate_unique_code():
    length = 10
    while True:
        code = ''.join(random.choice(string.ascii_uppercase, k=length))
        if PickUpForm.objects.filder(code=code).count() == 0:
            break
    return code
# Create your models here.
class pickUpForm(models.Model):
    code = models.CharField(max_length=8, default="", unique=True)
    host = models.CharField(max_length=50, unique=True)
