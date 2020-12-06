from rest_framework.serializers import ModelSerializer
from world_app.models import World

class WorldSerializer(ModelSerializer):
    class Meta:
        model = World
        fields = ('name', 'population', 'global_rating', 'water_rating', 'diamond_rating', 'gold_rating', 'silver_rating', 'cooper_rating')