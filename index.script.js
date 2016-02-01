/* Parker Baine | 29 Jan 2016 */

/*================================================================================*/

//Document onload test for AnagramFinder
$(document).ready(function()
{
   //Test AnagramFinder, throw error if fails unit test
    if(!areAnagrams("abcdABCD1234!@#$","!@#$1234ABCDabcd"))
   {
	   alert("*AnagramFinder.js error*");
   }

});

/*================================================================================*/

//Parse and scrub string output values.
//Copy of func_AF_ParseInputString() from anagramFinder.js
//which is treated as if it were a private function.
function ParseInputString(str_psParsePhrase)
{
	var returnVal = "";
	
	if(str_psParsePhrase)
	{
		//Cast arguments as explicit string values
		var str_tempParsePhrase = String(str_psParsePhrase);
		
		//Get rid of all other whitespace
		str_tempParsePhrase = str_tempParsePhrase.replace(/\s+/g, "");
		
		//Trim whitespace
		str_tempParsePhrase = str_tempParsePhrase.trim();
		
		returnVal = str_tempParsePhrase;
		
	}	
	
	return returnVal;
}

/*================================================================================*/

//Compare button to run the AnagramFinder and update the output area
$("#AF_button_main_container_compare").click(function() 
{
	
	//Get the input values from the text boxes
	var s1 = $("#AF_textbox_main_container_s1").val();
	var s2 = $("#AF_textbox_main_container_s2").val();
	var results = "";
	
	//Run the AnagramFinder and test the results
	if(areAnagrams(s1,s2))
	{
	   results = "<p class='AF_p_main_container_right_results_match'><strong>==Match==</strong></p>";
	}
	else
	{
	   results = "<p class='AF_p_main_container_right_results_nomatch'><strong>==No Match==</strong></p>";
	}
	
	//Update the HTML output area with results
	$(".AF_div_main_container_right_results").html
	(
		results + 
		"<p class='AF_p_main_container_right_results_text'>First Phrase:</p>" +
		"<p class='AF_p_main_container_right_results_output'>" + 
		ParseInputString(s1) +
		"</p>" + 
		"<p class='AF_p_main_container_right_results_text'>Second Phrase:</p>" +
		"<p class='AF_p_main_container_right_results_output'>" + 
		ParseInputString(s2) +
		"</p>" + 
		""
	);
});

/*================================================================================*/

//Reset button to reset input and output
$("#AF_button_main_container_reset").click(function() 
{	
	$(".AF_div_main_container_right_results").html("<p>...</p>");
	$("#AF_textbox_main_container_s1").val("");
	$("#AF_textbox_main_container_s2").val("");
});

/*================================================================================*/

