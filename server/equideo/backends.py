from django.contrib.auth import get_user_model
from django.contrib.auth.backends import BaseBackend
from django.conf import settings
from django.contrib.auth.hashers import check_password
from rest_framework import exceptions
import re


class NewBackend(BaseBackend):
    """
    
    """
    def authenticate(self, request, username, password):
        my_user_model = get_user_model()
        try:
            if  re.match(r"^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$", "username"):
                user = my_user_model.objects.get(phone_number=username)
            elif re.match(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", username):
                user = my_user_model.objects.get(email=username)
            else :
                user = my_user_model.objects.get(username=username)
                if not user.is_superuser:
                    return None #if the user is not superuser and using username

            
            if user.check_password(password):
                return user # return user on valid credentials
        except my_user_model.DoesNotExist:
            raise exceptions.AuthenticationFailed('No such user')
        except:
            return None # return None in case of other exceptions

    def get_user(self, user_id):
        my_user_model = get_user_model()
        try:
            return my_user_model.objects.get(pk=user_id)
        except my_user_model.DoesNotExist:
            return None


from allauth.account.adapter import DefaultAccountAdapter
from allauth.account.utils import user_field

class UserAdapter(DefaultAccountAdapter):
    def save_user(self, request, user, form, commit=True):
        data = form.cleaned_data
        user_field(user, 'first_name',data.get('first_name'))
        user_field(user, 'last_name',data.get('last_name'))
        user_field(user, 'phone_number',data.get('phone_number'))
        user_field(user, 'licence_number',data.get('licence_number'))
        
        return super().save_user(request, user, form, commit=commit)

from rest_framework.authentication import SessionAuthentication 

class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening

         

         # accounts.utils
import datetime
import jwt
from django.conf import settings


def generate_access_token(user):

    access_token_payload = {
        'user_id': user.id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, minutes=5),
        'iat': datetime.datetime.utcnow(),
    }
    access_token = jwt.encode(access_token_payload,
                              settings.SECRET_KEY, algorithm='HS256').decode('utf-8')
    return access_token


def generate_refresh_token(user, token_version):
    refresh_token_payload = {
        'user_id': user.id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7),
        'iat': datetime.datetime.utcnow()
    }
    refresh_token = jwt.encode(
        refresh_token_payload, settings.REFRESH_TOKEN_SECRET, algorithm='HS256').decode('utf-8')

    return refresh_token