from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model
from equideo.models import Lesson, Horse, HorseRiders
User = get_user_model()


class UserSerializer(serializers.HyperlinkedModelSerializer):

    password = serializers.CharField(
        write_only=True,
        required=True,
        help_text='Leave empty if no change needed',
        style={'input_type': 'password', 'placeholder': 'Password'}
    )

    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'password',
                  'first_name', 'last_name', 'phone_number', 'licence_number']

    def create(self, validated_data):
        validated_data['password'] = make_password(
            validated_data.get('password'))
        return super(UserSerializer, self).create(validated_data)


class LessonSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Lesson
        fields = ['title', 'start_time', 'end_time', 'max_rider',
                  'gallop_level', 'reccurency', 'available_during_holidays']


class HorseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Horse
        fields = ['name', 'birth_date', 'is_healthy',
                  'is_here', 'hair', 'weight', 'height']


class HorseRiderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = HorseRiders
        fields = ['rider', 'horse', 'lesson']
