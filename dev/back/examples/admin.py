from django.contrib import admin
from .models import Example


@admin.register(Example)
class AdminExample(admin.ModelAdmin):
	list_display = ['title', 'description', 'weburl', 'is_active']
