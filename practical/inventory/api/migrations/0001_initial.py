# Generated by Django 2.1.4 on 2019-02-20 09:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Inventory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50, null=True)),
                ('description', models.TextField(max_length=250)),
                ('unit_price', models.IntegerField()),
                ('number_of_unit_available', models.IntegerField()),
            ],
        ),
    ]