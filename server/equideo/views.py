from rest_framework import viewsets
from rest_framework import permissions
from equideo.serializers import UserSerializer, LessonSerializer
from equideo.models  import Lesson
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
