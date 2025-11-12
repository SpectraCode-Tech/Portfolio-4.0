    (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "UD0t6YHM8tNkV2OKP",
            });
        })();

        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_s37epmw', 'template_9nyfcch', this)
                    .then(() => {
                        alert('Message Sent Successfully');
                    }, (error) => {
                        alert('FAILED...', error);
                    });
                    document.getElementById('Name').value ='';
                    document.getElementById('Email').value ='';
                    document.getElementById('Message').value ='';
            });
        }
