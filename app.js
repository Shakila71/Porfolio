(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


function sendEmail(){
    Email.send({
Host : "smtp.gmail.com",
Username : "shakilaubaidullah@gmail.com",
Password : "$$mark$$",
To : 'Shakilaubaidullahdm@gmail.com',
From : document.getElementById("email").value,
Subject : "Email from portfolio",
Body : "Name:" +document.getElementById("name").value 
+ "<br> Email:" + document.getElementById("email").value
+ "<br> Message:" + document.getElementById("message").value
}).then(
message => alert("message sent successfully")
);
                                }


















/*
var link = document.createElement('a');
link.href = url;
link.download = 'file.pdf';
link.dispatchEvent(new MouseEvent('click'));*/