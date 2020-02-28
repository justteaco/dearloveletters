from django.contrib import admin
from .models import LoveLetter, Comment, Like

# Register your models here.
admin.site.register(LoveLetter)
admin.site.register(Comment)
admin.site.register(Like)