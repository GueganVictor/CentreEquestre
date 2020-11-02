from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from .managers import UserManager
from django.core.validators import RegexValidator, MinValueValidator, MaxValueValidator

# Create your models here.
class User(AbstractBaseUser):

    license_regex = RegexValidator(r'^[0-9]{7}([A-z])$', "Merci d'entrer un numéro de licence correct (7 chiffres 1 lettre)")
    phone_regex = RegexValidator(r'^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$', ("Merci d'entrer un numéro de téléphone français correct (format +33 ou 0x)"))

    email = models.EmailField(verbose_name='email address',max_length=255,unique=True)
    first_name = models.CharField(verbose_name='first name', max_length=30)
    last_name = models.CharField(verbose_name='last name', max_length=30)
    username = models.CharField(verbose_name='username', max_length=60, blank=True, null=True, unique=True)
    date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    phone_number = models.CharField(validators=[phone_regex], unique=True, max_length=15)
    licence_number = models.CharField(validators=[license_regex], null=True, blank=True, max_length=8)

    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(verbose_name='active', default=True)
    
    USERNAME_FIELD = 'username'

    objects = UserManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, equideo):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin


class Lesson(models.Model):

    title = models.CharField(max_length=30, blank=True, null=True)
    start_time = models.DateTimeField()
    end_time =  models.DateTimeField()
    max_rider = models.IntegerField(validators=[MinValueValidator(1)])
    gallop_level = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(7)])
    reccurency = models.CharField(max_length=50, null=True, blank=True)
    available_during_holidays = models.BooleanField(default=False)
    
