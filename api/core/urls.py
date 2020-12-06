"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from world_app.routes.viewsets import WorldViewSet
from character_app.routes.viewsets import CharacterViewSet
from skill_app.routes.viewsets import SkillViewSet
from django.conf.urls import include
from django.contrib import admin
from django.urls import path
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'world', WorldViewSet)
router.register(r'character', CharacterViewSet)
router.register(r'skill', SkillViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]