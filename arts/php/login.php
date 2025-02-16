<?php 
    include "service/database.php";
    session_start();

    $login_message ="";

    if(isset($_SESSION['is_login'])){
        header("Location: dashboard.php");
    }

    if(isset($_POST['login'])){
        $username = $_POST['username'];
        $password = $_POST['password'];
        $hash_password = hash('sha256', $password);

        $sql = "SELECT * FROM users WHERE username='$username' AND password='$hash_password'";


        $result = $db->query($sql);

        if($result->num_rows > 0){
            $data = $result->fetch_assoc();
            $_SESSION["username"] = $data["username"];
            $_SESSION["is_login"] = true;

           
           header("Location: index.html");
            
        }else{
            $login_message = "Akun tidak ditemukan";
        }

        $db->close();
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
<header>
    <h2>Belajar PHP & Database</h2>
    <a href="index.php">Home</a>
    <a href="login.php">Login</a>
    <a href="register.php">Register</a>
    </header>

    <h2>MASUK AKUN</h2>
    <i><?= $login_message?></i>
    <form action="login.php" method="POST">
        <input type="text" placeholder="username" name="username"/>
        <input type="text" placeholder="password" name="password"/>
        <button type="submit" name="login">MASUK Sekarang</button>
    </form>

    <footer>
    <hr />
    <i>Dibuat Oleh @Alfa</i>
</footer>
</body>
</html>