from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static 

from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from users.api.router import router_user
from categories.api.router import router_category

schema_view = get_schema_view(
   openapi.Info(
      title="iCard - APIDoc",
      default_version='v1',
      description="Documentation for iCard API",
      terms_of_service="https://www.raulcano.dev/",
      contact=openapi.Contact(email="rawraul@outlook.com"),
      license=openapi.License(name="Raul License"),
   ),
   public=True,
#    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
   path('admin/', admin.site.urls),
   path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   path('redocs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
   path('api/', include('users.api.router')),
   path('api/', include(router_user.urls)),
   path('api/', include(router_category.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)