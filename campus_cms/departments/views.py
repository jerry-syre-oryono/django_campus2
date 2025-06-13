from django.shortcuts import render
from .models import Department

def list_departments(request):
    departments = Department.objects.all()
    return render(request, 'departments/list.html', {'departments': departments})