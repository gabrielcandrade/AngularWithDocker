from django_filters.rest_framework import DjangoFilterBackend
from character_app.models import Character
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.filters import SearchFilter
from rest_framework.viewsets import ModelViewSet

from .serializers import CharacterSerializer


class CharacterViewSet(ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

    # Filter plugin
    filter_backends = (DjangoFilterBackend,SearchFilter,)
    filter_fields = ('race', 'class_type', 'element', 'origin')
    search_fields = ('nickname')