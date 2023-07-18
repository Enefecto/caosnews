from django.urls import path
from API import views

urlpatterns = [
    path('users/', views.UserApi),
    path('users/<int:id>/', views.UserApi),
    path('noticias/', views.NoticiasApi),
    path('noticias/<int:id>/', views.NoticiasApi),
]