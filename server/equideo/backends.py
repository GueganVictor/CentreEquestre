from django.contrib.auth import get_user_model
from django.contrib.auth.backends import BaseBackend
from django.conf import settings
from django.contrib.auth.hashers import check_password
from rest_framework import exceptions
import re
import logging

logger = logging.getLogger("logger")

class NewBackend(BaseBackend):
    """
    
    """
    def authenticate(self, request, username, password):
        logger.error("aled")
        my_user_model = get_user_model()
        try:
            if  re.match(r"^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$", username):
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
        logger.error("error")
        my_user_model = get_user_model()
        try:
            return my_user_model.objects.get(pk=user_id)
        except my_user_model.DoesNotExist:
            return None