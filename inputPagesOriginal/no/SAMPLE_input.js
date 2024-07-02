document.querySelector('#INPUT_HANDS').insertAdjacentHTML('beforeend', `                                 

    
		<form>
  
		    <div class="form-control">        <!-- strings  -->
			<label for="STRING_0">Insert A String:</label>
			<input id="STRING_0" name="csvString" type="text" value="ciao some string" />
		    </div>
		
		    <div class="form-control">        <!-- numbers  -->
			<label for="NUMBER_0">Insert A Number:</label>
			<input id="NUMBER_0" name="csvNumber" type="number" value="-4.56" />
		    </div>
		
		    <div class="form-control">        <!-- longer strings???  -->
			<label for="LONGTEXT_0">Enter a Message</label>
			<textarea id="LONGTEXT_0" name="csvLongText" rows="6" cols="65"></textarea>
		    </div>
		
		    <div class="form-control">        <!-- logical  -->
			<label for="LOGICAL_0">Check the logical box:</label>			    
			<input id="LOGICAL_0H" name="csvLogical" type="hidden" value="wasNotChecked">
			<input id="LOGICAL_0" name="csvLogical" type="checkbox" value="wasChecked" checked>
		    </div>

		    <div class="form-control">        <!-- multiple choice, radio buttons  -->
			Language Choice: &nbsp;&nbsp;
			<input id="MULTIPLECHOICE_0_A" name="csvMultiplechoice0" type="radio" value="selectedA">
			<label for="MULTIPLECHOICE_0_A">Choice A</label> &nbsp;&nbsp;&nbsp;&nbsp; 
			<input id="MULTIPLECHOICE_0_B" name="csvMultiplechoice0" type="radio" value="selectedB"  checked>
			<label for="MULTIPLECHOICE_0_B">Choice B   </label> &nbsp;&nbsp;&nbsp;&nbsp; 
			<input id="MULTIPLECHOICE_0_C" name="csvMultiplechoice0" type="radio" value="selectedC">
			<label for="MULTIPLECHOICE_0_C">Choice C   </label>
		    </div>		
		 
		
		</form> 

  `);

