const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});




document.addEventListener('DOMContentLoaded', function() {
    const formSelect = document.getElementById('form-select');
    const forms = document.querySelectorAll('.login-content');

    formSelect.addEventListener('change', function() {
        forms.forEach(form => form.style.display = 'none'); // Hide all forms
        document.getElementById(this.value).style.display = 'block'; // Show selected form
    });
});







document.querySelectorAll('.dropdown-item').forEach(function(item) {
    item.addEventListener('click', function(event) {
        var selectedOption = event.target.innerHTML;
        document.querySelector('.main-btn').innerHTML = selectedOption;
    });
});




function showForm(formId) {
	// Hide all forms
	document.querySelectorAll('.login-content').forEach(form => {
		form.style.display = 'none';
	});

	// Show the selected form
	document.getElementById(formId).style.display = 'block';
}


function updateDropdown(dropdownId, value) {
	const dropdownButton = document.getElementById(dropdownId);
	dropdownButton.innerHTML = `<i class="fa-solid fa-rupee-sign text-danger"></i> &nbsp;&nbsp;&nbsp;${value}`;
}









  