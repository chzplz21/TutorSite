jQuery(document).ready(function($) {
	
	$("#menuBarContainer").on( "click",  showDropdown );

	function showDropdown() {
		
		$('#menuBarDropDown').toggle();
	}
	

	
	

	$(window).resize(function(){
		if ($(window).width() >= 950){	
			
			$('#menuBarDropDown').css("display", "none");
			
		}	
});
	

	
});