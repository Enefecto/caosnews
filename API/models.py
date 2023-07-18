from django.db import models

# Create your models here.

class Users(models.Model):
    UserId = models.AutoField(primary_key=True)
    UserName = models.CharField(max_length=255)
    UserEmail = models.EmailField()
    UserPassword = models.CharField(max_length=255)
    UserTypeID = models.IntegerField(default = 0)

class Noticias(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    phone = models.IntegerField()
    date = models.DateField()
    day = models.BooleanField()
    text = models.TextField()
    direction = models.CharField(max_length=255)
    type = models.IntegerField(default = 0)
    urgent = models.BooleanField(default = False)
    state = models.BooleanField(default = False)

class TypeNotice(models.Model):
    TypeNoticeId = models.AutoField(primary_key=True)
    TypeNoticeName = models.CharField(max_length=30)

class TypeUser(models.Model):
    TypeUserId = models.AutoField(primary_key=True)
    TypeUserName = models.CharField(max_length=10)