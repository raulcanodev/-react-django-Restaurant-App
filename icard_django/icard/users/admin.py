from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    model = User
    fieldsets = BaseUserAdmin.fieldsets 
    # + (
    #     (None, {'fields': ('avatar',)}),
    # )
    # Esto no funciona si no se instala Pillow y se modifica la db