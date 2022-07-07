from django.db import models
import datetime


class Review(models.Model):
	avatar = models.FileField(
		verbose_name='Аватарка',
		null=True,
		blank=True
	)
	name = models.TextField(
		verbose_name='Имя'
	)
	text = models.TextField(
		verbose_name='Текст'
	)
	date = models.DateField(
		verbose_name='Дата добавления',
		default=datetime.datetime.today().strftime('%Y-%m-%d')
	)
	is_active = models.BooleanField(
		verbose_name='Опубликовано',
		default=False
	)

	def __str__(self):
		return f'{self.name} {self.date} {self.is_active}'

	class Meta:
		verbose_name = 'Отзыв'
		verbose_name_plural = 'Отзывы'

