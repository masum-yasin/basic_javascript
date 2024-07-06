<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
  <div class="btn btn-warning p-3"><a href="{{route('student.create')}}">Student Insert</a></div>
   <div class="container mt-5">
    <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Student Name</th>
            <th scope="col">Student Department</th>
            <th scope="col">Student Roll</th>
            <th scope="col">Student Email</th>
            <th scope="col">Student Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
           @foreach ($students as $student)
               
        
          <tr>
            <td>{{$student->id}}</td>
            <td>{{$student->name}}</td>
            <td>{{$student->Department}}</td>
            <td>{{$student->Class_Roll}}</td>
            <td>{{$student->phone}}</td>
            <td>{{$student->email}}</td>
            <td>
                <a href="{{route('student.edit', $student->id)}}"><i class="btn btn-success p-2">Edit</i></a>
                <a href="{{route('student.delete', $student->id)}}"><i class="btn btn-success">Delete</i></a>
            </td>
          </tr>
          @endforeach
        
        </tbody>
      </table>
   </div>
</body>
</html>