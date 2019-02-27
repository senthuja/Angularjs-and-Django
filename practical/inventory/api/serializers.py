from rest_framework import serializers

class InventorySerializer(serializers.Serializer):
   
    class Meta:
    	model = Inventory
    	fields=('id', 'name', 'description', 'unit_price', 'number_of_unit_available')


class MovieMiniSerializer(serializers.ModelSerializer):

	class Meta:
		model = Inventory
		fields=('id', 'name')
       