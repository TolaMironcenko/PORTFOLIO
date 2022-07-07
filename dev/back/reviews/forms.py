from django.contrib import forms
from .models import Review


class ReviewForm(forms.ModelForm):
	model = Review

	