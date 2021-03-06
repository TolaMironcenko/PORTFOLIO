# Generated by Django 4.0.6 on 2022-07-13 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='avatar',
            field=models.FileField(blank=True, null=True, upload_to='', verbose_name='Аватарка'),
        ),
        migrations.AlterField(
            model_name='review',
            name='date',
            field=models.DateField(default='2022-07-13', verbose_name='Дата добавления'),
        ),
        migrations.AlterField(
            model_name='review',
            name='is_active',
            field=models.BooleanField(default=False, verbose_name='Опубликовано'),
        ),
    ]
