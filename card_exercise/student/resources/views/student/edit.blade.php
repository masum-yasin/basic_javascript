<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Student Informatin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
   <div class="container mt-5">
    <h1>Studnet Form</h1>
    <form method="post" action="{{route('student.update', $students->id)}}">
        @csrf
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Student Name</label>
          <input type="text" class="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" value="{{old('name', $students->name)}}">
         
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Department</label>
          <input type="text" class="form-control" name="department", id="exampleInputPassword1" value="{{old('department',$students->Department)}}">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Class Rool</label>
          <input type="number" class="form-control" name="roll" id="exampleInputPassword1" value="{{old('roll', $students->Class_Rool)}}">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Phone Number</label>
          <input type="number" name="phone" class="form-control" id="exampleInputPassword1" value="{{old('phone', $students->phone)}}">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Email</label>
          <input type="email" name="email" class="form-control" id="exampleInputPassword1" value="{{old('email', $students->email)}}">
        </div>
        
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
   </div>
</body>
</html>