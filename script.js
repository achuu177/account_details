
$(document).ready(function() {
    $('#accountForm').on('submit', function(event) {
        var isValid = true;

        // Validate Name
        var name = $('#name').val();
        if (name.length < 3 || name.length > 50) {
            alert("Name must be between 3 and 50 characters.");
            isValid = false;
        }

        // Validate Email
        var email = $('#email').val();
        if (!email) {
            alert("Email is required.");
            isValid = false;
        }

        // Validate Phone
        var phone = $('#phone').val();
        if (phone.length < 10 || phone.length > 14) {
            alert("Phone must be between 10 and 14 digits.");
            isValid = false;
        }

        // Validate Age
        var age = parseInt($('#age').val());
        if (isNaN(age) || age < 18 || age > 120) {
            alert("Age must be between 18 and 120.");
            isValid = false;
        }

        // Validate Gender
        var gender = $('#gender').val();
        if (gender.length < 4 || gender.length > 15) {
            alert("Gender must be between 4 and 15 characters.");
            isValid = false;
        }

        
        if (!isValid) {
            event.preventDefault();
        }
    });
});
