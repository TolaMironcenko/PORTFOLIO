from rest_framework import serializers
from .models import Review


class ReviewSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Review
		fields = ('id', 'name', 'text', 'date', 'is_active')