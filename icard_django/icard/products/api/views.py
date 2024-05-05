from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend


from products.models import Product
from products.api.serializers import ProductSerializer

class ProductApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = ProductSerializer
    queryset = Product.objects.all() # This is the query that will be executed
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category', 'active'] # This will allow us to filter by category and active status