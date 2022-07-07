from django.contrib import admin
from django.urls import path, include
import reviews

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/reviews/', include('reviews.urls'))
]
