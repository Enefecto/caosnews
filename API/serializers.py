from rest_framework import serializers
from API.models import Users, Noticias, TypeNotice, TypeUser

from rest_framework import serializers
from API.models import Users, Noticias, TypeNotice, TypeUser

class TypeNoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeNotice
        fields = '__all__'

class TypeUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeUser
        fields = '__all__'

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

class NoticiasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Noticias
        fields = '__all__'