from rest_framework import viewsets
from rest_framework import permissions
from equideo.serializers import UserSerializer, LessonSerializer, HorseRiderSerializer, HorseSerializer
from equideo.models import Lesson, Horse, HorseRiders
from django.contrib.auth import get_user_model
User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


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
