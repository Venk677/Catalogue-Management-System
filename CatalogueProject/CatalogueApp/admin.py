from django.contrib import admin
from .models import Category, Brand, Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand', 'category', 'specification','date_created', 'date_modified',)

@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('name',  'date_created', 'date_modified',)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'parent_category' ,'date_created', 'date_modified',)