<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            border: 5px solid red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: black;
  color: white;
        }
    </style>
</head>
<body>
    <h1>User Time Details: </h1>
    <h3>TimeZone :   <%= TimeZone %></h3>
    <h3>CurrentTime : <%= CurrentTime %></h3>
    <h3>CurrentDate :  <%=CurrentDate %></h3>
</body>
</html>
