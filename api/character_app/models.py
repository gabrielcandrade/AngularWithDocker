from django.db import models
from world_app.models import World

# Create your models here.
class Character(models.Model):

    CLASS_CHOICES = (
        ('bruiser', 'Bruiser'),
        ('mage', 'Mage'),
        ('archer', 'Archer'),
        ('bowman', 'Bowman'),
    )

    RACE_CHOICES = (
        ('demigod', 'Demi-God'),
        ('elf', 'Elf'),
        ('human', 'Human'),
        ('troll', 'Troll'),
        ('god', 'God'),
        ('demon', 'Demon'),
    )

    ELEMENT_CHOICES = (
        ('fire', 'Fire'),
        ('water', 'Water'),
        ('earth', 'Earth'),
        ('wind', 'Wind'),
    )

    nickname = models.CharField(max_length=50)
    race = models.CharField(max_length=50, choices=RACE_CHOICES)
    class_type = models.CharField(max_length=50, choices=CLASS_CHOICES)
    element = models.CharField(max_length=50, choices=ELEMENT_CHOICES)
    origin = models.ForeignKey(World, on_delete=models.CASCADE)

    def __str__(self):
        return self.nickname