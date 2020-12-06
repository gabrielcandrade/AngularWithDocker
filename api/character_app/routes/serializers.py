from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField, StringRelatedField
from character_app.models import Character

class CharacterSerializer(ModelSerializer):
    origin = StringRelatedField(many=False, read_only=True)
    class Meta:
        model = Character
        fields = ('nickname', 'race', 'class_type', 'element', 'origin')