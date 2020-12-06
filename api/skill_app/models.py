from django.db import models
from character_app.models import Character

# Create your models here.
class Skill(models.Model):
    character = models.ForeignKey(Character, on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    element = models.CharField(max_length=150, blank=True, null=True)
    poder = models.CharField(max_length=150)
    aoe = models.BooleanField(default=False)

    def __str__(self):
        return self.character.nickname + self.name 

    def save(self, *args, **kwargs):
        self.element = self.character.element
        return super(Skill, self).save(*args, **kwargs)