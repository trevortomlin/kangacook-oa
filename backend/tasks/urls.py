from django.urls import path
from .views import get_all_tasks, add_task, check_task, delete_task

urlpatterns = [
    path('tasks/', get_all_tasks, name='get_all_tasks'),
    path('tasks/add/', add_task, name='add_task'),
    path('tasks/check/<int:pk>/', check_task, name='check_task'),
    path('tasks/delete/<int:pk>/', delete_task, name='delete_task'),
]
