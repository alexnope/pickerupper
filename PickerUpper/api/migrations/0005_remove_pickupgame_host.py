# Generated by Django 3.1.2 on 2020-12-01 20:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20201201_1505'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pickupgame',
            name='host',
        ),
    ]
