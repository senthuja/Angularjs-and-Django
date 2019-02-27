from django.db import models

class Inventory(models.Model):
	name = models.CharField(max_length=50, null=True, blank=True)
	description = models.TextField(max_length=250)
	unit_price = models.IntegerField()
	number_of_unit_available = models.IntegerField()

	def __str__(self):
		return self.name