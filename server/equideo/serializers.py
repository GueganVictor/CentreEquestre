from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model
from equideo.models import Lesson, Horse, HorseRiders
from allauth.account import app_settings as allauth_settings
from allauth.utils import email_address_exists
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
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


from django.core.validators import RegexValidator
class RegisterSerializer(serializers.Serializer):
    
    license_regex = RegexValidator(r'^[0-9]{7}([A-z])$', "Merci d'entrer un numéro de licence correct (7 chiffres 1 lettre)")
    phone_regex = RegexValidator(r'^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$', ("Merci d'entrer un numéro de téléphone français correct (format +33 ou 0x)"))

    password = serializers.CharField(write_only=True)
    email = serializers.EmailField(max_length=255)
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=30)
    username = serializers.CharField(max_length=60)
    date_joined = serializers.DateTimeField()
    phone_number = serializers.CharField(validators=[phone_regex], max_length=15)
    licence_number = serializers.CharField(validators=[license_regex], max_length=8)

    is_admin = serializers.BooleanField(default=False)
    is_superuser = serializers.BooleanField(default=False)
    is_active = serializers.BooleanField(default=True)


    def validate_username(self, username):
        username = get_adapter().clean_username(username)
        return username

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if email and email_address_exists(email):
            raise serializers.ValidationError("A user is already registered with this e-mail address.")
        return email

    def validate_password1(self, password):
        return get_adapter().clean_password(password)

    def validate(self, data):
        # if data['password1'] != data['password2']:
        #     raise serializers.ValidationError("The two password fields didn't match.")
        return data

    def custom_signup(self, request, user):
        pass

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', '')
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        self.custom_signup(request, user)
        setup_user_email(request, user, [])
        return user
