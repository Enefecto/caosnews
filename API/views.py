from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from API.models import Users, Noticias, TypeNotice, TypeUser
from API.serializers import UsersSerializer,NoticiasSerializer,TypeNoticeSerializer, TypeUserSerializer

#CRUD USER
@csrf_exempt
def UserApi(request,id = 0):
    if request.method == 'GET': 
        users = Users.objects.all()
        users_serializer = UsersSerializer(users, many=True)
        return JsonResponse(users_serializer.data,safe = False)
        
    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        users_serializer = UsersSerializer(data = user_data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse('Added Succeefully', safe = False)
        return JsonResponse('Failed to add', safe = False)
    

    elif request.method == 'PUT':
        user_data = JSONParser().parse(request)
        users = Users.objects.get(UserId = user_data['UserId'])
        users_serializer = UsersSerializer(users,data = user_data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse('Update Succeefully', safe = False)
        return JsonResponse('Failed to update')
    
    elif request.method == 'DELETE':
        user = Users.objects.get(UserId = id)
        user.delete()
        return JsonResponse('DELETE', safe = False)

#CRUD NOTICIAS
@csrf_exempt
def NoticiasApi(request, id=0):
    if request.method == 'GET':
        if id == 0:
            noticias = Noticias.objects.all()
            noticias_serializer = NoticiasSerializer(noticias, many=True)
            return JsonResponse(noticias_serializer.data, safe=False)
        else:
            noticia = Noticias.objects.get(NoticiaId=id)
            noticia_serializer = NoticiasSerializer(noticia)
            return JsonResponse(noticia_serializer.data, safe=False)

    elif request.method == 'POST':
        noticia_data = JSONParser().parse(request)
        noticia_serializer = NoticiasSerializer(data=noticia_data)
        if noticia_serializer.is_valid():
            noticia_serializer.save()
            return JsonResponse('Added Successfully', safe=False)
        return JsonResponse('Failed to add', safe=False)

    elif request.method == 'PUT':
        noticia_data = JSONParser().parse(request)
        noticia = Noticias.objects.get(id = noticia_data['id'])
        noticia_serializer = NoticiasSerializer(noticia, data=noticia_data)
        if noticia_serializer.is_valid():
            noticia_serializer.save()
            return JsonResponse('Update Successfully', safe=False)
        return JsonResponse('Failed to update', safe=False)

    elif request.method == 'DELETE':
        noticia = Noticias.objects.get(id = id)
        noticia.delete()
        return JsonResponse('DELETE', safe=False)



#ESTO NO SE USARA YA QUE SON PREDETERMINADOS
# #CRUD TIPO NOTICIA
# @csrf_exempt
# def TypeNoticeApi(request, id=0):
#     if request.method == 'GET':
#         if id == 0:
#             type_notices = TypeNotice.objects.all()
#             type_notices_serializer = TypeNoticeSerializer(type_notices, many=True)
#             return JsonResponse(type_notices_serializer.data, safe=False)
#         else:
#             type_notice = TypeNotice.objects.get(TypeNoticeId=id)
#             type_notice_serializer = TypeNoticeSerializer(type_notice)
#             return JsonResponse(type_notice_serializer.data, safe=False)

#     elif request.method == 'POST':
#         type_notice_data = JSONParser().parse(request)
#         type_notice_serializer = TypeNoticeSerializer(data=type_notice_data)
#         if type_notice_serializer.is_valid():
#             type_notice_serializer.save()
#             return JsonResponse('Added Successfully', safe=False)
#         return JsonResponse('Failed to add', safe=False)

#     elif request.method == 'PUT':
#         type_notice_data = JSONParser().parse(request)
#         type_notice = TypeNotice.objects.get(TypeNoticeId=type_notice_data['TypeNoticeId'])
#         type_notice_serializer = TypeNoticeSerializer(type_notice, data=type_notice_data)
#         if type_notice_serializer.is_valid():
#             type_notice_serializer.save()
#             return JsonResponse('Update Successfully', safe=False)
#         return JsonResponse('Failed to update', safe=False)

#     elif request.method == 'DELETE':
#         type_notice = TypeNotice.objects.get(TypeNoticeId=id)
#         type_notice.delete()
#         return JsonResponse('DELETE', safe=False)

# #CRUD TIPO DE USUARIO
# @csrf_exempt
# def TypeUserApi(request, id=0):
#     if request.method == 'GET':
#         if id == 0:
#             type_users = TypeUser.objects.all()
#             type_users_serializer = TypeUserSerializer(type_users, many=True)
#             return JsonResponse(type_users_serializer.data, safe=False)
#         else:
#             type_user = TypeUser.objects.get(TypeUserId=id)
#             type_user_serializer = TypeUserSerializer(type_user)
#             return JsonResponse(type_user_serializer.data, safe=False)

#     elif request.method == 'POST':
#         type_user_data = JSONParser().parse(request)
#         type_user_serializer = TypeUserSerializer(data=type_user_data)
#         if type_user_serializer.is_valid():
#             type_user_serializer.save()
#             return JsonResponse('Added Successfully', safe=False)
#         return JsonResponse('Failed to add', safe=False)

#     elif request.method == 'PUT':
#         type_user_data = JSONParser().parse(request)
#         type_user = TypeUser.objects.get(TypeUserId=type_user_data['TypeUserId'])
#         type_user_serializer = TypeUserSerializer(type_user, data=type_user_data)
#         if type_user_serializer.is_valid():
#             type_user_serializer.save()
#             return JsonResponse('Update Successfully', safe=False)
#         return JsonResponse('Failed to update', safe=False)

#     elif request.method == 'DELETE':
#         type_user = TypeUser.objects.get(TypeUserId=id)
#         type_user.delete()
#         return JsonResponse('DELETE', safe=False)