from django.contrib import admin
from django.urls import path, include
import reviews
import examples
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/reviews/', include('reviews.urls')),
    path('api/examples/', include('examples.urls'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
