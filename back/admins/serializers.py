from rest_framework.serializers import ModelSerializer
from .models import Note


class NoteSeriliazer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
