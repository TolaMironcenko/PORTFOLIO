from django.urls import path
from rest_framework import routers
from .views import ExampleViewSet

router = routers.DefaultRouter()

router.register(r'', ExampleViewSet)

urlpatterns = []

urlpatterns += router.urls