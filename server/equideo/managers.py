from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    
    def create_user(self, email, first_name, last_name, username, phone_number, licence_number=None, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')
        
        user = self.model(
            email=self.normalize_email(email),
            first_name = first_name,
            last_name = last_name,
            username = username,
            phone_number = phone_number,
            licence_number = licence_number,
        )

        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            username = username,
            password=password,
            email = 'admin@admin.admin',
            first_name = "admin",
            last_name = "admin",
            phone_number = "0699999999",
        )
        user.is_admin = True
        user.is_superuser = True
        user.save()
        return user