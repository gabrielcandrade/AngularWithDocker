from rest_framework.serializers import ModelSerializer, StringRelatedField
from skill_app.models import Skill

class SkillSerializer(ModelSerializer):
    character = StringRelatedField(many=False, read_only=True)
    class Meta:
        model = Skill
        fields = ('character', 'name', 'element', 'poder', 'aoe')