from rest_framework import viewsets
from rest_framework import permissions
from equideo.serializers import UserSerializer, LessonSerializer, HorseRiderSerializer, HorseSerializer
from equideo.models import Lesson, Horse, HorseRiders
from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework.response import Response
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
import re
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GetUserViewSet(viewsets.ViewSet):
    
    def retrieve(self, request, username=None):
        if  re.match(r"^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$", username):
                user = User.objects.get(phone_number=username)
        elif re.match(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", username):
            user = User.objects.get(email=username)
        else :
            user = User.objects.get(username=username)
            
        serializer = UserSerializer(user)
        return Response(serializer.data)


class LessonViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Lessons to be viewed or edited.
    """
    queryset = Lesson.objects.all().order_by('-start_time')
    serializer_class = LessonSerializer
    permission_classes = [permissions.IsAuthenticated]


class HorseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Lessons to be viewed or edited.
    """
    queryset = Horse.objects.all().order_by('-name')
    serializer_class = HorseSerializer
    permission_classes = [permissions.IsAuthenticated]


class HorseRiderViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Lessons to be viewed or edited.
    """
    queryset = HorseRiders.objects.all()
    serializer_class = HorseRiderSerializer
    permission_classes = [permissions.IsAuthenticated]