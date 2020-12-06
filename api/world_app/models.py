from django.db import models

# Create your models here.
class World(models.Model):
    name = models.CharField(max_length=150)
    population = models.IntegerField()
    global_rating = models.IntegerField()
    water_rating = models.IntegerField()
    diamond_rating = models.IntegerField()
    gold_rating = models.IntegerField()
    silver_rating = models.IntegerField()
    cooper_rating = models.IntegerField()

    def __str__(self):
        return self.name