# Generated by Django 3.1.2 on 2020-12-01 20:03

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='pickUpGame',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('host', models.CharField(max_length=50, unique=True)),
                ('gameName', models.CharField(default=False, max_length=50)),
                ('numPlayers', models.IntegerField()),
                ('street', models.CharField(default=False, max_length=50)),
                ('city', models.CharField(default=False, max_length=50)),
                ('state', models.CharField(default=False, max_length=20)),
                ('zipCode', models.CharField(default=False, max_length=10)),
                ('description', models.CharField(default=False, max_length=500)),
                ('create_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name='pickUpForm',
        ),
    ]
