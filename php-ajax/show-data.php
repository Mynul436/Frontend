<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax </title>
</head>

<body>
    <table id="main" border="0" cellspacing="0">
        <tr>
            <td id="header">
                <h1>PHP with Ajax</h1>
            </td>

        </tr>

        <tr>
            <td id="table-load">
                <input type="button" id="load-button" value="Load Data">
                
            </td>
        </tr>
        <tr>
            <td id="table-data">
                <table border="1" width="100%" cellspacing="0" cesspadding="10px">
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Name
                        </th>
                    </tr>
                    <tr>
                        <td align="center">1</td>
                        <td> Mynul Islam</td>
                    </tr>

                </table>
            </td>
        </tr>

    </table>

<script type="text/javascript" src="js/jquery.js"></script>
<script>

    jQuery.noConflict();
    jQuery(document).ready(function($){
        console.log("sadf");
        $("#load-button").click(function(e){
          //  console.log("page lode");
            $.ajax({
                url : "ajax-load.php",
                type :"POST",
                success :function(data){
                    $("#table-data").html(data);
                }
            });

            alert("asdf");
        })

    })
</script>


</body>

</html>