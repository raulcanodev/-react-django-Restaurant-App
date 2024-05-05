from rest_framework.routers import DefaultRouter
from products.api.views import ProductApiViewSet

# Create a router object
router_products = DefaultRouter()

# Register the viewset with the router
router_products.register(
    prefix='products',
    basename='products',
    viewset=ProductApiViewSet
)