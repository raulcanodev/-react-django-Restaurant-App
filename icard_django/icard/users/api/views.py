from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password
from users.models import User
from users.api.serializers import UserSerializer

class UserApiViewSet(ModelViewSet):
    permission_classes = [IsAdminUser] # Solo los administradores pueden acceder a esta ruta API
    serializer_class = UserSerializer

    queryset = User.objects.all() # Obtenemos todos los usuarios de la base de datos

    # Sobreescribimos el método create para encriptar la contraseña
    def create(self, request, *args, **kwargs):
        request.data['password'] = make_password(request.data['password']) # Encriptamos la contraseña
        return super().create(request, *args, **kwargs)

    # Sobreescribimos el método update para encriptar la contraseña
    def partial_update(self, request, *args, **kwargs):
        password = request.data['password']
        if password:
            request.data['password'] = make_password(password) # Encriptamos la contraseña
        else:
            request.data['password'] = request.user.password
            return super().update(request, *args, **kwargs)


class UserView(APIView):
    permission_classes = [IsAuthenticated] # Solo los usuarios autenticados pueden acceder a esta ruta API  
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)