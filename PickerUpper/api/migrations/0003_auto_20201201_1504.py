# Generated by Django 3.1.2 on 2020-12-01 20:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20201201_1503'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pickupgame',
            old_name='create_at',
            new_name='created_at',
        ),
    ]
