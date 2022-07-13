from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ExampleSerializer
from .models import Example


class ExampleViewSet(viewsets.ModelViewSet):
	queryset = Example.objects.all()
	serializer_class = ExampleSerializer
