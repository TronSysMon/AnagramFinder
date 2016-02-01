/* Parker Baine | 29 Jan 2016 */

/*================================================================================*/

function func_AF_ParseInputString(str_psParsePhrase)
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

function areAnagrams(s1, s2)
{
	//Check for NULL
	if((s1)&&(s2))
	{
		
		//Parse and scrub input
		var str_tempS1 = func_AF_ParseInputString(s1);
		var str_tempS2 = func_AF_ParseInputString(s2);
		
		//Check the length of both strings
		var i_s1Len = str_tempS1.length;
		var i_s2Len = str_tempS2.length;
				
		//Make sure both strings are same len, else break
		if(i_s1Len == i_s2Len)
		{	
		
			//Convert input strings to arrays of chars
			var arr_s1Chars = str_tempS1.split('');
			var arr_s2Chars = str_tempS2.split('');
			
			//Set up comparison lengths
			var i_inputLen = ((i_s1Len + i_s2Len) / 2);
			var i_matchCount = 0;
		
			//Nested loop through both arrays
			for (i_s1Count = 0; i_s1Count < arr_s1Chars.length; i_s1Count++) 
			{ 
				for (i_s2Count = 0; i_s2Count < arr_s2Chars.length; i_s2Count++)
				{
					if(arr_s1Chars[i_s1Count] ==  arr_s2Chars[i_s2Count])
					{
						//If a match is found
						//1) increment the match count
						i_matchCount++;
						
						//2) set the current array element equal to blank
						arr_s2Chars[i_s2Count] = "";
						
						//3) break out of the inner loop
						break;
					}
				}
			}
			
			//Compare match count to input length(s)
			if(i_matchCount == i_inputLen)
			{
				//true is both integers are equal
				return true;
			}
			else
			{
				//false is integers are not equal
				return false;
			}
			
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;		
	}

}

/*================================================================================*/

