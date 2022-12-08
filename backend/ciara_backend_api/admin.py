from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import User
# Register your models here.

class User(admin.ModelAdmin):
    list = ('name', 'role')

    admin.site.register(User)