from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import InventorySerializer
from .models import Inventory

class InventoryViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = InventorySerializer

	def list(self, request, *args, **kwargs):
		inventorys = Inventory.objects.all()
		serializer = MovieMiniSerializer(inventorys, many=True)
		return Response(serializer.data)