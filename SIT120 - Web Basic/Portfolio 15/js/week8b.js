window.onload = function displayStudentTable(){
    var txt;
    var avg =0;
    for ( i = 0; i < studentList.length; i++) {
        var x;
        var z = studentList[i].wam;
        if(z < 30){
           x = "High Distinction"; 
        }else if(z < 40 && z > 30){
           x = "Distinction"; 
        }else if(z < 50 && z > 40){
            x = "Credit"; 
        }else if(z < 60 && z > 50){
            x = "Pass"; 
        }
        else if(z > 60){
            x = "Fail"; 
        }
        if ( x == "Fail") {
            txt += "<tr style='background-color:red;'><td>"  + studentList[i].sid +  "</td><td>" + studentList[i].name +  "</td><td>" +  studentList[i].wam +  "</td><td>" + x+  "</td>"
        } else {
        txt += "<tr style='background-color:green;'><td>"  + studentList[i].sid +  "</td><td>" + studentList[i].name +  "</td><td>" +  studentList[i].wam +  "</td><td>" + x+  "</td>"
        }
        avg += studentList[i].wam;
    }
    
    document.body.innerHTML = "<table>" + 
        "<thead>"+
            "<tr>"+
                "<td>"  +
                    "SID"+
                "</td>"+
                "<td>"  +
                    "Name"+
                "</td>"+
                "<td>"  +
                    "WAM"+
                "</td>"+
                "<td>"  +
                    "Grade"+
                "</td>"+
            "</td>"+
        "</thead>"+
        "<tbody>"+ txt +  "</tbody>"+
        "<tfoot>"+
            "<tr>"+
            "<td>"+  ""  +"</td>"+
            "<td>"+   "" +"</td>"+
            "<td>"+  "" +"</td>"+
                "<td>"+ avg/studentList.length  +"</td>"+
            "</td>"+
        "</tfoot>"+
        "</table>";

}