(function () {
    emailjs.init("user_ijYh2h4cYQnIX45YC59Dh");
})();

function sendEmail(from_name, from_email, subject, email_message) {
    var template_params = {
        "from_name": from_name,
        "from_email": from_email,
        "subject": subject,
        "email_message": email_message
    };

    var service_id = "default_service";
    var template_id = "contactemailtemplate";
    emailjs.send(service_id, template_id, template_params);
}

$('#send_message').click(function () {
    $(this).prop('disabled', true);
    setTimeout(function () {
        $('#send_message').prop('disabled', false)
    }, 3000);
    var from_email = $('input[name="from_email"]').val(),
        from_name = $('input[name="from_name"]').val(),
        subject = $('input[name="subject"]').val(),
        email_message = $('#email_message').val();
    if (!from_email || !email_message || !subject || !from_name){
        $("#danger_alert").removeClass('hidden');
        setTimeout(function () {
            $('#danger_alert').addClass('hidden');
        }, 3000);
        return;
    }
    sendEmail(from_name, from_email, subject, email_message);
    $("#success_alert").removeClass('hidden');
    setTimeout(function () {
        $('#success_alert').addClass('hidden');
        $('#contact_form').find("input[type=text], textarea").val("");
    }, 3000);
});
