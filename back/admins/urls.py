from django.urls import path
from . import views

urlpatterns = [
    path('', views.newRoute, name="routes"),
    path('notes/', views.getNotes, name="Notes"),
    path('notes/<str:pk>/', views.operation_pk, name="Operations"),
]
