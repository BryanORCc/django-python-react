from django.shortcuts import render

from rest_framework import viewsets
from .models import TodoItem
from .serializers import TodoItemSerializer

# Create your views here.
def index(request):
    return render(request, 'index.html')

def todo_list(request):
    todos = TodoItem.objects.all()
    return render(request, 'todo_list.html', {'todos': todos})

class TodoItemViewSet(viewsets.ModelViewSet):
    queryset = TodoItem.objects.all()
    serializer_class = TodoItemSerializer

    def perform_create(self, serializer):
        # Accede a los datos enviados en la petición
        title = self.request.data.get('title')
        completed = self.request.data.get('completed')

        # Crea una nueva instancia del modelo
        todo_item = TodoItem(title=title, completed=completed)

        # Guarda el objeto en la base de datos
        todo_item.save()

        # Actualiza el serializador con los datos guardados
        serializer.instance = todo_item