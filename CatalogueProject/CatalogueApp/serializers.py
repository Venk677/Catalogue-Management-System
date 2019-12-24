from rest_framework import serializers
from .models import Brand, Category, Product


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id', 'name']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'parent_category', 'get_breadcrumbs']


class ProductSerializer(serializers.ModelSerializer):
    brand = BrandSerializer()
    category= CategorySerializer()
    specification = serializers.JSONField()
    class Meta:
        model= Product
        fields = ['id', 'name', 'brand', 'category','specification']

class ProductCreateSerializer(serializers.ModelSerializer):
    specification = serializers.JSONField()
    class Meta:
        model= Product
        fields = ['id', 'name', 'brand', 'category','specification']