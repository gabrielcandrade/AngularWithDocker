from django_filters.rest_framework import DjangoFilterBackend
from skill_app.models import Skill
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.filters import SearchFilter
from rest_framework.viewsets import ModelViewSet

from .serializers import SkillSerializer


class SkillViewSet(ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

    # Filter plugin
    filter_backends = (DjangoFilterBackend,SearchFilter,)
    filter_fields = ('character', 'name')
    search_fields = ('character', 'name')