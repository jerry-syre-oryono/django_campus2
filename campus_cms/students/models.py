from django.db import models
from django.contrib.auth.models import User
from departments.models import Department

class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    roll_number = models.CharField(max_length=10, unique=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    year = models.IntegerField()
    
    def __str__(self):
        return f"{self.user.get_full_name()} ({self.roll_number})"