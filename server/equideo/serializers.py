from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from equideo.models import Lesson, Horse, HorseRiders
from allauth.account import app_settings as allauth_settings
from allauth.utils import email_address_exists
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from django.contrib.auth import get_user_model
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
        fields = ['id', 'username', 'email', 'password',
                  'first_name', 'last_name', 'phone_number', 'licence_number', 'role', 'is_admin', 'is_superuser']

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'], None, 'pbkdf2_sha256')
        return super(UserSerializer, self).create(validated_data)


class LessonSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Lesson
        fields = ['id','title', 'start_time', 'end_time', 'max_rider',
                  'gallop_level', 'reccurency', 'available_during_holidays']


class HorseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Horse
        fields = ['id','name', 'birth_date', 'is_healthy',
                  'is_here', 'hair', 'weight', 'height']


class HorseRiderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = HorseRiders
        fields = ['id','rider', 'horse', 'lesson']


from django.core.validators import RegexValidator
class RegisterSerializer(serializers.Serializer):
    
    license_regex = RegexValidator(r'^[0-9]{7}([A-z])$', "Merci d'entrer un numéro de licence correct (7 chiffres 1 lettre)")
    phone_regex = RegexValidator(r'^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$', ("Merci d'entrer un numéro de téléphone français correct (format +33 ou 0x)"))

    password = serializers.CharField(write_only=True)
    email = serializers.EmailField(max_length=255)
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=30)
    username = serializers.CharField(max_length=60)
    phone_number = serializers.CharField(validators=[phone_regex], max_length=15)
    licence_number = serializers.CharField(validators=[license_regex], max_length=8, allow_blank=True)
    role = serializers.CharField(max_length=30)
    
    is_admin = serializers.BooleanField(default=False)
    is_superuser = serializers.BooleanField(default=False)
    is_active = serializers.BooleanField(default=True)

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
            'password': self.validated_data.get('password', ''),
            'email': self.validated_data.get('email', ''),
            'phone_number': self.validated_data.get('phone_number', ''),
            'licence_number': self.validated_data.get('licence_number', ''),
            'role': self.validated_data.get('role', ''),
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        setup_user_email(request, user, [])
        
        clearPassNoHash = self.cleaned_data['password']
        varhash = make_password(clearPassNoHash, None, 'pbkdf2_sha256')
        user.set_password(varhash)

        user.save()
        return user