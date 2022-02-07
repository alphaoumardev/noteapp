from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import NoteSeriliazer
from .models import Note


# Create your views here.

@api_view(['GET'])
def newRoute(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
def getNotes(request):
    if request.method == 'GET':
        notes = Note.objects.all().order_by("-update")
        seriliazer = NoteSeriliazer(notes, many=True)
        return Response(seriliazer.data)
    if request.method == 'POST':
        data = request.data
        note = Note.objects.create(body=data['body'])
        seriliazer = NoteSeriliazer(note, many=False)
        return Response(seriliazer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def operation_pk(request, pk):
    if request.method == 'GET':
        notes = Note.objects.get(id=pk)
        seriliazer = NoteSeriliazer(notes, many=False)
        return Response(seriliazer.data)
    if request.method == 'PUT':
        data = request.data
        notes = Note.objects.get(id=pk)
        seriliazer = NoteSeriliazer(instance=notes, data=data)
        if seriliazer.is_valid():
            seriliazer.save()
        return Response(seriliazer.data)
    if request.method == 'DELETE':
        notes = Note.objects.get(id=pk)
        notes.delete()
        return Response("The note is deleted")

# @api_view(['POST'])
# def createNote(request):
#
#
#
# @api_view(['PUT'])
# def updateNote(request, pk):
#
#
#
# @api_view(['DELETE'])
# def deleteNote(request, pk):
#
