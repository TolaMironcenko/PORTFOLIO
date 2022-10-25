from rest_framework import viewsets
from .models import Review
from .serializers import ReviewSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import datetime


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.filter(is_active=True)
    serializer_class = ReviewSerializer


@api_view(['POST'])
def addreview(request):
    if request.method == 'POST':
        new_review = Review(
            name=str(request.data['name']),
            text=str(request.data['text']),
            date=datetime.datetime.today().strftime('%Y-%m-%d'),
        )
        print(new_review.__dict__)
        serializer = ReviewSerializer(new_review, data=new_review.__dict__)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
