from django.http import JsonResponse
from django.conf import settings
from ..data.repositories.UrlRepository import UrlRepository
from ..utils.generate_short_code import generate_short_code
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes


@permission_classes([IsAuthenticated])
class UrlShortenService:

    @staticmethod
    def create_short_url(original_url, user=None):
        short_code = generate_short_code()
      
        if UrlRepository.exists_by_short_code(short_code):
            short_code = generate_short_code()

        url = UrlRepository.save(original_url, short_code, user)
        if isinstance(url, JsonResponse):
            return url
        
        return f"{settings.BACKEND_URL}/{short_code}"