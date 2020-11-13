from django.test import TestCase
import unittest

# Create your tests here.

from django.test import Client
import logging
from datetime import datetime
logger = logging.getLogger("logger")
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient
from rest_framework.request import Request
from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework.test import APIRequestFactory, RequestsClient



class TestUser(unittest.TestCase):
    
    def setUp(self):
        self.client = APIClient()


    def test_login(self):
        result = self.client.login(username='admin',password='admin')
        self.assertEqual(result, True)

    def test_register(self):
        request = self.client.post('/auth/signup/',
            {
                "password": "thisisaPassWord123?",
                "email": "emailtest@gmail.com",
                "first_name": "Test",
                "last_name": "User",
                "username": "tu1984",
                "phone_number": "0699999990",
                "licence_number": "6018474A",
                "is_admin": True,
                "is_superuser": False,
                "is_active": True
            }
        )

        self.assertEqual(request.status_code, 200)
        
    def test_put_user(self):
        request = self.client.put('/clients/3/',
            {
                "password": "PassWord123?Updated",
                "email": "updatedemailtest@gmail.com",
                "first_name": "UpdatedTest",
                "last_name": "UpdatedUser",
                "phone_number": "0699999990",
            }
        )

        self.assertEqual(request.status_code, 200)

    def test_get_user(self):
        request = self.client.get('/clients/3/')
        self.assertEqual(request.json()["first_name"], "UpdatedTest")
        self.assertEqual(request.status_code, 200)
    
    def test_delete_user(self):
        request = self.client.delete('/clients/3/')

        self.assertEqual(request.status_code, 200)

    


    


