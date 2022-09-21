"""eyyou URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import path, include

# Se comentare para el deployment - OJO

# from drf_yasg.views import get_schema_view
# from drf_yasg import openapi

from video.api.router import router_video
from comment.api.router import router_comment
from users.api.router import router_user
from follow.api.router import router_follow
from notification.api.router import router_notification

# Se comentare para el deployment - OJO
  
# schema_view = get_schema_view(
#     openapi.Info(
#         title="Heyou - API",
#         default_version='v1',
#         description="Api DOC de Heyou",
#         terms_of_service="https://www.nuwapps.com/",
#         contact=openapi.Contact(email="soporte@nuwapps.com"),
#         license=openapi.License(name="BSD License"),
#     ),
#     public=True,
#     #    permission_classes=[permissions.AllowAny],
# )

urlpatterns = [
    path('admin/', admin.site.urls),

    path("api/", include(router_user.urls)),
    path('api/', include('users.api.router')),
    path('api/', include(router_video.urls)),
    path('api/', include('video.api.router')),
    path('api/', include(router_comment.urls)),
    path("api/", include(router_follow.urls)),
    path("api/", include("follow.api.router")),
    path("api/", include(router_notification.urls)),
    
# Se comenta para el deployment - OJO
    # path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    # path('redocs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
