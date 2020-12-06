from django_filters.rest_framework import DjangoFilterBackend
from world_app.models import World
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.filters import SearchFilter
from rest_framework.viewsets import ModelViewSet

from .serializers import WorldSerializer


class WorldViewSet(ModelViewSet):
    queryset = World.objects.all()
    serializer_class = WorldSerializer

    # Filter plugin
    filter_backends = (DjangoFilterBackend,SearchFilter,)
    filter_fields = ('name', 'population')
    search_fields = ('name', 'population')