<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    
    function generateOTP($length = 6) {
        $characters = '0123456789';
        $otp = '';
        $max = strlen($characters) - 1;
    
        for ($i = 0; $i < $length; $i++) {
            $otp .= $characters[random_int(0, $max)];
        }
    
        return $otp;
    }
    
    // Example usage
    $otp = generateOTP(); // This will generate a 6-digit OTP
    
    // Send email (you need to configure your mail server for this to work)
    $to = "$name"; // Replace with the recipient's email address
    $subject = "New Feedback Submission";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";

    // Uncomment the following line to send the email (requires a properly configured mail server)
    // mail($to, $subject, $message);

    // For the sake of this example, we'll just print the email message
    echo "your auto generated OTP: ";
    echo "Generated OTP: "$otp;

} else {
    echo "Invalid request";
}
?>