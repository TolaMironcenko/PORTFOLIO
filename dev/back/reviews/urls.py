from django.urls import path
from rest_framework import routers
from .views import ReviewViewSet, addreview

router = routers.DefaultRouter()

router.register(r'', ReviewViewSet)

urlpatterns = [
	path('add/', addreview)
]

urlpatterns += router.urls