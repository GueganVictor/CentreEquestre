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
    queryset = User.objects.all()
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

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
import jwt
from datetime import datetime, timedelta
from django.conf import settings

class CustomObtainAuthToken(ObtainAuthToken):
    
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)

        dt = datetime.now() + timedelta(days=60)

        

        user = User.objects.filter(username=request.data.get('username')).first()
        if(user is None):
            raise exceptions.AuthenticationFailed('user not found')
        if (not user.check_password(request.data.get('password'))):
            raise exceptions.AuthenticationFailed('wrong password')

        token = jwt.encode({
            'id': user.id,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, algorithm='HS256')

        return Response({'token': token.decode('utf-8'), 'id': user.id})