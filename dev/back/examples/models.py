from django.db import models


class Example(models.Model):
	image = models.FileField(
		verbose_name='Картинка',
		upload_to = 'posters/',
	)

	title = models.TextField(
		verbose_name='Название'
	)

	description = models.TextField(
		verbose_name='Описание'
	)

	weburl = models.TextField(
		verbose_name='Ссылка',
		blank=True
	)

	is_active = models.BooleanField(
		verbose_name='Опубликовано'
	)

	class Meta:
		verbose_name = 'Пример'
		verbose_name_plural = 'Примеры'
