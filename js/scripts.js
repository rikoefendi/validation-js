// form validation - vanilla js
var inputs = document.querySelectorAll('input');

validation = {
	complete: function(elem) {
		if(elem.className.indexOf('complete') > -1) {
			elem.classList.remove('novalidate');
		} else {
			elem.classList.remove('novalidate');
			elem.className += ' complete';
		}
	},
	novalidate: function(elem) {
		if(elem.className.indexOf('novalidate') > -1) {
			elem.classList.remove('complete');
		} else {
			elem.classList.remove('complete');
			elem.className += ' novalidate';
		}
	},
	check: function() {
		for(var i = 0; i < inputs.length; i++) {
			inputs[i].onkeypress = function(e){
				if(this.className.indexOf('numb') > -1){
					return event.charCode >= 48 && event.charCode <= 57;
				}
			};
			inputs[i].onkeyup = function () {
				this.value == '' ? validation.novalidate(this) : validation.complete(this);
			}
		}
	}
}

validation.check();

// imitation of sending form
document.querySelector('.send-form').addEventListener('click', function(){
	var inputsCompleted = document.querySelectorAll('input.complete');
	if(inputs.length == inputsCompleted.length){
		location.reload();
	} else {
		return false;
	}
});