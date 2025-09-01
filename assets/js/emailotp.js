function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementById('otpverify')[0];
    
    let otp_val = Math.floor(Math.random() * 10000);
    let emailbody = `<h2>Your OTP is </h2>${otp_val}`;

    Email.send({
        SecureToken : "99e3195b-a15a-4a6e-be76-abc9f5e648c4",
        To : email.value,
        From : "muhmmadalpiann3@mail.com",
        Subject : "Notifikation Alert",
        Body : emailbody,
    }).then(

      message => {
        if (message === "OK") {
            alert("OTP Send to your email" + email.value);

            otpverify.style.display = "flex";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp_btn');

            otp_btn.addEventListener('click', () => {
                if (otp_inp.value == otp_val) {
                    alert("Email adrres Verifed");
                }
                else {
                    alert("invalid OTP");
                }
            })
        }
      }

    );
}