from django.shortcuts import render, redirect, get_object_or_404
from .models import Student
from django.db.models import Count

# Dashboard
def dashboard(request):
    total_students = Student.objects.count()
    courses = Student.objects.values('course').annotate(count=Count('course'))

    return render(request, 'dashboard.html', {
        'total': total_students,
        'courses': courses
    })

# Home + Search
def home(request):
    query = request.GET.get('q')

    if query:
        students = Student.objects.filter(name__icontains=query)
    else:
        students = Student.objects.all()

    return render(request, 'home.html', {'students': students})

# Create
def add_student(request):
    if request.method == 'POST':
        Student.objects.create(
            name=request.POST['name'],
            age=request.POST['age'],
            course=request.POST['course'],
            email=request.POST['email']
        )
        return redirect('home')

    return render(request, 'add_student.html')

# Update
def update_student(request, id):
    student = get_object_or_404(Student, id=id)

    if request.method == 'POST':
        student.name = request.POST['name']
        student.age = request.POST['age']
        student.course = request.POST['course']
        student.email = request.POST['email']
        student.save()
        return redirect('home')

    return render(request, 'update_student.html', {'student': student})

# Delete
def delete_student(request, id):
    student = get_object_or_404(Student, id=id)
    student.delete()
    return redirect('home')