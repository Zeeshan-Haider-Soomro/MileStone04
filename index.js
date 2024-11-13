// listing element
var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePicture = document.getElementById("profile-picture");
    // type assertion 
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilePicture && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // picture elements
        var profilePictureFile = (_a = profilePicture.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // create resume output
        var resumeOutput = "<h2>Resume</h2>\n    ".concat(profilePictureUrl ? "<img src = \"".concat(profilePictureUrl, "\" alt =\"ProfilePicture\" class = \"profilePicture\">") : '', "\n    <p><strong>Name:</strong> <span id=\"edit-name\" class = \"editable\"> ").concat(name_1, " </span> </p>\n    <p><strong>Email:</strong> <span id=\"edit-email\" class = \"editable\"> ").concat(email, " </p>\n    <p><strong>Phone:</strong> <span id=\"edit-phone\" class = \"editable\">").concat(phone, " </p>\n    \n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p> \n    \n    <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\"> ").concat(experience, " </p>\n    \n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\"> ").concat(skills, " </p>\n    \n    \n    ");
        // display resume output
        var resumeOutputElement = document.getElementById("resume-output");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error("The resume output elements are missing");
        }
    }
    else {
        console.error("One or more output elements are missing");
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace content
            if (currentElement.tagName === "p" || currentElement.tagName === "Span") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}