from rest_framework import serializers
from .models import Example


class ExampleSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Example
		fields = ['id', 'image', 'title', 'description', 'weburl', 'is_active']
