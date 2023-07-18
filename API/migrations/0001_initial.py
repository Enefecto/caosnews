# Generated by Django 4.2.1 on 2023-06-15 22:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TypeNotice',
            fields=[
                ('TypeNoticeId', models.AutoField(primary_key=True, serialize=False)),
                ('TypeNoticeName', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='TypeUser',
            fields=[
                ('TypeUserId', models.AutoField(primary_key=True, serialize=False)),
                ('TypeUserName', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('UserId', models.AutoField(primary_key=True, serialize=False)),
                ('UserName', models.CharField(max_length=255)),
                ('UserEmail', models.EmailField(max_length=254)),
                ('UserPassword', models.CharField(max_length=255)),
                ('TypeUserId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.typeuser')),
            ],
        ),
        migrations.CreateModel(
            name='Noticias',
            fields=[
                ('NoticiaId', models.AutoField(primary_key=True, serialize=False)),
                ('NoticiaTitle', models.CharField(max_length=255)),
                ('NoticiaAuthor', models.CharField(max_length=255)),
                ('NoticiaNumber', models.IntegerField()),
                ('NoticiaDate', models.DateField()),
                ('NoticiaDay', models.BooleanField()),
                ('NoticiaDescription', models.TextField()),
                ('NoticiaDirection', models.CharField(max_length=255)),
                ('NoticiaUrgent', models.BooleanField(default=False)),
                ('TypeNoticeId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.typenotice')),
            ],
        ),
    ]
