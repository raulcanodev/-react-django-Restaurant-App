from re import S
from rest_framework.serializers import ModelSerializer
from products.models import Product

# Import the CategorySerializer that is in /categories to show the category data in the response
from categories.api.serializers import CategorySerializer

# Create a serializer class for the Product model that will be used in the viewset in views.py
class ProductSerializer(ModelSerializer):
    # This will allow us to show the category data in the response
    category_data = CategorySerializer(source='category', read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'title', 'imagen', 'price', 'active', 'category', 'category_data']