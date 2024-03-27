from django.urls import path
from rest_framework.routers import DefaultRouter
from users.api.views import UserApiViewSet, UserView

from rest_framework_simplejwt.views import TokenObtainPairView



router_user = DefaultRouter()

# Registramos la ruta de la API de usuarios
router_user.register(prefix='users', viewset=UserApiViewSet, basename='users')

urlpatterns = [
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/me/', UserView.as_view(), name='me'),
    
]