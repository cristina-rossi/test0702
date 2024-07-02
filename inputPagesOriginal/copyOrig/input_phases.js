document.querySelector('#INPUT_PHASES').insertAdjacentHTML('beforeend', `                                 

    
	<form>
	<inputcolumn>

        
        


	<!-- Start -->
	  <inputdivider> Intertrial interval </inputdivider>
	  <div class="form-control">  
   			<name>Base time delay between trials [Seconds]:</name>
<input id="INTERTRIAL_TIME" name="trialScript,stage1_baseDelay" type="number" value="0.35" />
 		</div>
        




	<!-- Start -->
	  <inputdivider> Start of paradigm </inputdivider>
	  <div class="form-control">  
   			<note>initial delay with message at the very start of paradigm</note>
 		
<name> </name> <inputs> </inputs>    
			<name>Message:</name>   
   			<inputs>      
			<label for="M_START"></label>
<textarea id="M_START" name="messagesScript,startText" rows="2" cols="50">Welcome!
(Loading...)!</textarea>
   			</inputs>         	
<name> </name> <inputs> </inputs>
    
			<name>Duration [seconds]:</name>
   			<inputs>
   			<label for="STARTMSG_TIME"></label>
			<input id="STARTMSG_TIME" name="startScript,experimentStartTimeDelay" type="number" value="5" />
   			</inputs>  


 <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableStartMessage')">
        Expand start message appearance
        </button>
  
        <div class="expwindow" id="expandableStartMessage"> 

 
           <name> Start of paradigm: </name> <inputs></inputs>	   
           
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGSTART_POS_X">X:</label>
			<input id="MSGSTART_POS_X" name="setupScript,startMessagePositionX" type="number" value="0" />
			<label for="MSGSTART_POS_Y">Y:</label>
			<input id="MSGSTART_POS_Y" name="setupScript,startMessagePositionY" type="number" value="1" />
			<label for="MSGSTART_POS_Z">Z:</label>
			<input id="MSGSTART_POS_Z" name="setupScript,startMessagePositionZ" type="number" value="4" />
   			</inputs>  	   
           
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGSTART_POS_X">Width [meters]:</label>
			<input id="MSGSTART_POS_X" name="setupScript,startMessageSizeX" type="number" value="10" />
			<label for="MSGSTART_POS_Y">Height [meters]:</label>
			<input id="MSGSTART_POS_Y" name="setupScript,startMessageSizeY" type="number" value="5" />
			<label for="MSGSTART_POS_Z">Font Size:</label>
			<input id="MSGSTART_POS_Z" name="setupScript,startMessageFontSize" type="number" value="5" />
   			</inputs>  
          

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGSTART_TYPE_B" name="setupScript,startMessageType" type="radio" value="cartoon"   >
  		    <label for="MSGSTART_TYPE_B">Cartoon</label> 
		    <input id="MSGSTART_TYPE_B2" name="setupScript,startMessageType" type="radio" value="rectangle" checked>
		    <label for="MSGSTART_TYPE_B2">Rectangle</label>   
		    <input id="MSGSTART_TYPE_B0" name="setupScript,startMessageType" type="radio" value="none" >
  		    <label for="MSGSTART_TYPE_B0">None</label>                   
   	        <label for="MSGSTART_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGSTART_ROT_B" name="setupScript,startMessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGSTART_COLOR_B_R">R:</label>
			<input id="MSGSTART_COLOR_B_R" name="setupScript,startMessageBackgroundColorR" type="number" value="0.2" />
   			<label for="MSGSTART_COLOR_B_G">G:</label>
			<input id="MSGSTART_COLOR_B_G" name="setupScript,startMessageBackgroundColorG" type="number" value="0.65" />
   			<label for="MSGSTART_COLOR_B_B">B:</label>
			<input id="MSGSTART_COLOR_B_B" name="setupScript,startMessageBackgroundColorB" type="number" value="0.3" />
   			<label for="MSGSTART_COLOR_B_A">Alpha:</label>
			<input id="MSGSTART_COLOR_B_A" name="setupScript,startMessageBackgroundColorAlpha" type="number" value="0.3" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGSTART_COLOR_T_R">R:</label>
			<input id="MSGSTART_COLOR_T_R" name="setupScript,startMessageTextColorR" type="number" value="1" />
   			<label for="MSGSTART_COLOR_T_G">G:</label>
			<input id="MSGSTART_COLOR_T_G" name="setupScript,startMessageTextColorG" type="number" value="0" />
   			<label for="MSGSTART_COLOR_T_B">B:</label>
			<input id="MSGSTART_COLOR_T_B" name="setupScript,startMessageTextColorB" type="number" value="0" />
   			<label for="MSGSTART_COLOR_T_A">Alpha:</label>
			<input id="MSGSTART_COLOR_T_A" name="setupScript,startMessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGSTART_TOFF_X">X [meters]:</label>
			<input id="MSGSTART_TOFF_X" name="setupScript,startMessageTextOffsetX" type="number" value="0" />
			<label for="MSGSTART_TOFF_Y">Y [meters]:</label>
			<input id="MSGSTART_TOFF_Y" name="setupScript,startMessageTextOffsetY" type="number" value="0" />
			<label for="MSGSTART_TOFF_R">Rotation [deg]:</label>
			<input id="MSGSTART_TOFF_R" name="setupScript,startMessageTextRotationZ" type="number" value="0" />
   			</inputs>  
   			

<name> </name> <inputs> </inputs>  

</div>

	  </div>
  
  	<!-- End -->
	  <inputdivider> End of paradigm </inputdivider>
	  <div class="form-control">  
   <note>Message at the very end of paradigm</note>
 		 	<name>Message:</name>
   			<inputs>      
			<label for="M_END"></label>
			<textarea id="M_END" name="messagesScript,endText" rows="1" cols="50">The end</textarea>
   			</inputs>      
<name> </name> <inputs> </inputs>
    
    
      
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableEndMessage')">
        Expand end message appearance
        </button>
  
        <div class="expwindow" id="expandableEndMessage"> 

           <name> End of paradigm: </name> <inputs></inputs>	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGEND_POS_X">X:</label>
			<input id="MSGEND_POS_X" name="setupScript,endMessagePositionX" type="number" value="0" />
			<label for="MSGEND_POS_Y">Y:</label>
			<input id="MSGEND_POS_Y" name="setupScript,endMessagePositionY" type="number" value="0.2" />
			<label for="MSGEND_POS_Z">Z:</label>
			<input id="MSGEND_POS_Z" name="setupScript,endMessagePositionZ" type="number" value="3.5" />
   			</inputs>  	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGEND_POS_X">Width [meters]:</label>
			<input id="MSGEND_POS_X" name="setupScript,endMessageSizeX" type="number" value="10" />
			<label for="MSGEND_POS_Y">Height [meters]:</label>
			<input id="MSGEND_POS_Y" name="setupScript,endMessageSizeY" type="number" value="5" />
			<label for="MSGEND_POS_Z">Font Size:</label>
			<input id="MSGEND_POS_Z" name="setupScript,endMessageFontSize" type="number" value="5" />
   			</inputs>  


            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGEND_TYPE_B" name="setupScript,endMessageType" type="radio" value="cartoon"   >
  		    <label for="MSGEND_TYPE_B">Cartoon</label> 
		    <input id="MSGEND_TYPE_B2" name="setupScript,endMessageType" type="radio" value="rectangle" checked>
		    <label for="MSGEND_TYPE_B2">Rectangle</label>    
		    <input id="MSGEND_TYPE_B0" name="setupScript,endMessageType" type="radio" value="none" >
  		    <label for="MSGEND_TYPE_B0">None</label>                  
   	        <label for="MSGEND_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGEND_ROT_B" name="setupScript,endMessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGEND_COLOR_B_R">R:</label>
			<input id="MSGEND_COLOR_B_R" name="setupScript,endMessageBackgroundColorR" type="number" value="0.2" />
   			<label for="MSGEND_COLOR_B_G">G:</label>
			<input id="MSGEND_COLOR_B_G" name="setupScript,endMessageBackgroundColorG" type="number" value="0.65" />
   			<label for="MSGEND_COLOR_B_B">B:</label>
			<input id="MSGEND_COLOR_B_B" name="setupScript,endMessageBackgroundColorB" type="number" value="0.3" />
   			<label for="MSGEND_COLOR_B_A">Alpha:</label>
			<input id="MSGEND_COLOR_B_A" name="setupScript,endMessageBackgroundColorAlpha" type="number" value="0.3" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGEND_COLOR_T_R">R:</label>
			<input id="MSGEND_COLOR_T_R" name="setupScript,endMessageTextColorR" type="number" value="1" />
   			<label for="MSGEND_COLOR_T_G">G:</label>
			<input id="MSGEND_COLOR_T_G" name="setupScript,endMessageTextColorG" type="number" value="0" />
   			<label for="MSGEND_COLOR_T_B">B:</label>
			<input id="MSGEND_COLOR_T_B" name="setupScript,endMessageTextColorB" type="number" value="0" />
   			<label for="MSGEND_COLOR_T_A">Alpha:</label>
			<input id="MSGEND_COLOR_T_A" name="setupScript,endMessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGEND_TOFF_X">X [meters]:</label>
			<input id="MSGEND_TOFF_X" name="setupScript,endMessageTextOffsetX" type="number" value="0" />
			<label for="MSGEND_TOFF_Y">Y [meters]:</label>
			<input id="MSGEND_TOFF_Y" name="setupScript,endMessageTextOffsetY" type="number" value="0" />
			<label for="MSGEND_TOFF_R">Rotation [deg]:</label>
			<input id="MSGEND_TOFF_R" name="setupScript,endMessageTextRotationZ" type="number" value="0" />
   			</inputs>  

<name> </name> <inputs> </inputs>  


</div>

   	  </div>

 <inputdivider> Break (pause between selected trials) </inputdivider>
		  <div class="form-control">          
			<name></name>
   			<inputs>	    
			<input id="BREAK_FLAG_H" name="trialScript,stage6_breakFlag" type="hidden" value="FALSE">
			<input id="BREAK_FLAG" name="trialScript,stage6_breakFlag" type="checkbox" value="TRUE" >
			<label for="BREAK_FLAG">Take break after trial</label>		
			</inputs>   

        <name></name>
   			<inputs>	    
			<input id="BREAK_FLAG_H" name="messagesScript,stage6_displayMessageFlag" type="hidden" value="FALSE">
			<input id="BREAK_FLAG" name="messagesScript,stage6_displayMessageFlag" type="checkbox" value="TRUE" >
			<label for="BREAK_FLAG">Display 'break' message during breaks</label>		
			</inputs>    

		
			<name>Message:</name>
   			<inputs>      
			<label for="M_BREAK"></label>
<textarea id="M_BREAK" name="messagesScript,breakText" rows="1" cols="50">
break
</textarea>
   			</inputs>   

			<name>Break duration [seconds]:</name>
   			<inputs>
   			<label for="BREAK_TIME"></label>
			<input id="BREAK_TIME" name="trialScript,stage6_breakDuration" type="number" value="30" />
   			</inputs>

   					<name>Bird at target</name>
   			<inputs>	    
			<input id="CHANGETARGETBIRDBREAK_FLAG_H" name="trialScript,changeBirdOnBreak" type="hidden" value="FALSE">
			<input id="CHANGETARGETBIRDBREAK_FLAG" name="trialScript,changeBirdOnBreak" type="checkbox" value="TRUE" checked>
			<label for="CHANGETARGETBIRDBREAK_FLAG">Change bird on break regardless of success</label>		
			</inputs> 
 <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableBreakMessage')">
        Expand break message appearance
        </button>
  
        <div class="expwindow" id="expandableBreakMessage"> 
           <name> Break: </name> <inputs></inputs>	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGBREAK_POS_X">X:</label>
			<input id="MSGBREAK_POS_X" name="setupScript,breakMessagePositionX" type="number" value="0.4" />
			<label for="MSGBREAK_POS_Y">Y:</label>
			<input id="MSGBREAK_POS_Y" name="setupScript,breakMessagePositionY" type="number" value="0.3" />
			<label for="MSGBREAK_POS_Z">Z:</label>
			<input id="MSGBREAK_POS_Z" name="setupScript,breakMessagePositionZ" type="number" value="0.6" />
   			</inputs>  	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGBREAK_POS_X">Width [meters]:</label>
			<input id="MSGBREAK_POS_X" name="setupScript,breakMessageSizeX" type="number" value="0.55" />
			<label for="MSGBREAK_POS_Y">Height [meters]:</label>
			<input id="MSGBREAK_POS_Y" name="setupScript,breakMessageSizeY" type="number" value="0.4" />
			<label for="MSGBREAK_POS_Z">Font Size:</label>
			<input id="MSGBREAK_POS_Z" name="setupScript,breakMessageFontSize" type="number" value="1" />
   			</inputs>  


            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGBREAK_TYPE_B" name="setupScript,breakMessageType" type="radio" value="cartoon"  checked >
  		    <label for="MSGBREAK_TYPE_B">Cartoon</label> 
		    <input id="MSGBREAK_TYPE_B2" name="setupScript,breakMessageType" type="radio" value="rectangle" >
		    <label for="MSGBREAK_TYPE_B2">Rectangle</label>                  
		    <input id="MSGBREAK_TYPE_B0" name="setupScript,breakMessageType" type="radio" value="none" >
  		    <label for="MSGBREAK_TYPE_B0">None</label>    
   	        <label for="MSGBREAK_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGBREAK_ROT_B" name="setupScript,breakMessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGBREAK_COLOR_B_R">R:</label>
			<input id="MSGBREAK_COLOR_B_R" name="setupScript,breakMessageBackgroundColorR" type="number" value="0" />
   			<label for="MSGBREAK_COLOR_B_G">G:</label>
			<input id="MSGBREAK_COLOR_B_G" name="setupScript,breakMessageBackgroundColorG" type="number" value="0.6" />
   			<label for="MSGBREAK_COLOR_B_B">B:</label>
			<input id="MSGBREAK_COLOR_B_B" name="setupScript,breakMessageBackgroundColorB" type="number" value="0.8" />
   			<label for="MSGBREAK_COLOR_B_A">Alpha:</label>
			<input id="MSGBREAK_COLOR_B_A" name="setupScript,breakMessageBackgroundColorAlpha" type="number" value="1" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGBREAK_COLOR_T_R">R:</label>
			<input id="MSGBREAK_COLOR_T_R" name="setupScript,breakMessageTextColorR" type="number" value="1" />
   			<label for="MSGBREAK_COLOR_T_G">G:</label>
			<input id="MSGBREAK_COLOR_T_G" name="setupScript,breakMessageTextColorG" type="number" value="1" />
   			<label for="MSGBREAK_COLOR_T_B">B:</label>
			<input id="MSGBREAK_COLOR_T_B" name="setupScript,breakMessageTextColorB" type="number" value="1" />
   			<label for="MSGBREAK_COLOR_T_A">Alpha:</label>
			<input id="MSGBREAK_COLOR_T_A" name="setupScript,breakMessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGBREAK_TOFF_X">X [meters]:</label>
			<input id="MSGBREAK_TOFF_X" name="setupScript,breakMessageTextOffsetX" type="number" value="0.03" />
			<label for="MSGBREAK_TOFF_Y">Y [meters]:</label>
			<input id="MSGBREAK_TOFF_Y" name="setupScript,breakMessageTextOffsetY" type="number" value="0.015" />
			<label for="MSGBREAK_TOFF_R">Rotation [deg]:</label>
			<input id="MSGBREAK_TOFF_R" name="setupScript,breakMessageTextRotationZ" type="number" value="15" />
   			</inputs>  

<name> </name> <inputs> </inputs>  



</div>

		   </div>
 		
 		  <inputdivider> Trial number display </inputdivider>
		  <div class="form-control">          
	<name>Base string:</name>
   			<inputs>      
			<label for="M_TRIAL"></label>
			<textarea id="M_TRIAL" name="messagesScript,trialNumberBaseText" rows="1" cols="50">Trial: </textarea>
   			</inputs>        
<name> </name> <inputs> </inputs>  
	        <name></name>
   			<inputs>	    
			<input id="TRIALN_AFLAG_H" name="messagesScript,trialNumberAuto" type="hidden" value="FALSE">
			<input id="TRIALN_AFLAG" name="messagesScript,trialNumberAuto" type="checkbox" value="TRUE" checked>
			<label for="TRIALN_AFLAG">Append trial number to string</label>		
			</inputs>   
			
<button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableTrialNMessage')">
        Expand trial number appearance
        </button>
  
        <div class="expwindow" id="expandableTrialNMessage"> 
           <name> Trial number display: </name> <inputs></inputs>	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGTRIALN_POS_X">X:</label>
			<input id="MSGTRIALN_POS_X" name="setupScript,trialNumberMessagePositionX" type="number" value="-0.5" />
			<label for="MSGTRIALN_POS_Y">Y:</label>
			<input id="MSGTRIALN_POS_Y" name="setupScript,trialNumberMessagePositionY" type="number" value="0.2" />
			<label for="MSGTRIALN_POS_Z">Z:</label>
			<input id="MSGTRIALN_POS_Z" name="setupScript,trialNumberMessagePositionZ" type="number" value="0.8" />
   			</inputs>  	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGTRIALN_POS_X">Width [meters]:</label>
			<input id="MSGTRIALN_POS_X" name="setupScript,trialNumberMessageSizeX" type="number" value="0" />
			<label for="MSGTRIALN_POS_Y">Height [meters]:</label>
			<input id="MSGTRIALN_POS_Y" name="setupScript,trialNumberMessageSizeY" type="number" value="0" />
			<label for="MSGTRIALN_POS_Z">Font Size:</label>
			<input id="MSGTRIALN_POS_Z" name="setupScript,trialNumberMessageFontSize" type="number" value="0.8" />
   			</inputs>  


            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGTRIALN_TYPE_B" name="setupScript,trialNumberMessageType" type="radio" value="cartoon"  >
  		    <label for="MSGTRIALN_TYPE_B">Cartoon</label> 
		    <input id="MSGTRIALN_TYPE_B2" name="setupScript,trialNumberMessageType" type="radio" value="rectangle" >
		    <label for="MSGTRIALN_TYPE_B2">Rectangle</label>  
		    <input id="MSGTRIALN_TYPE_B0" name="setupScript,trialNumberMessageType" type="radio" value="none"  checked >
  		    <label for="MSGTRIALN_TYPE_B0">None</label>               
   	        <label for="MSGTRIALN_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGTRIALN_ROT_B" name="setupScript,trialNumberMessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGTRIALN_COLOR_B_R">R:</label>
			<input id="MSGTRIALN_COLOR_B_R" name="setupScript,trialNumberMessageBackgroundColorR" type="number" value="0" />
   			<label for="MSGTRIALN_COLOR_B_G">G:</label>
			<input id="MSGTRIALN_COLOR_B_G" name="setupScript,trialNumberMessageBackgroundColorG" type="number" value="0" />
   			<label for="MSGTRIALN_COLOR_B_B">B:</label>
			<input id="MSGTRIALN_COLOR_B_B" name="setupScript,trialNumberMessageBackgroundColorB" type="number" value="0" />
   			<label for="MSGTRIALN_COLOR_B_A">Alpha:</label>
			<input id="MSGTRIALN_COLOR_B_A" name="setupScript,trialNumberMessageBackgroundColorAlpha" type="number" value="0" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGTRIALN_COLOR_T_R">R:</label>
			<input id="MSGTRIALN_COLOR_T_R" name="setupScript,trialNumberMessageTextColorR" type="number" value="0" />
   			<label for="MSGTRIALN_COLOR_T_G">G:</label>
			<input id="MSGTRIALN_COLOR_T_G" name="setupScript,trialNumberMessageTextColorG" type="number" value="0" />
   			<label for="MSGTRIALN_COLOR_T_B">B:</label>
			<input id="MSGTRIALN_COLOR_T_B" name="setupScript,trialNumberMessageTextColorB" type="number" value="0" />
   			<label for="MSGTRIALN_COLOR_T_A">Alpha:</label>
			<input id="MSGTRIALN_COLOR_T_A" name="setupScript,trialNumberMessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGTRIALN_TOFF_X">X [meters]:</label>
			<input id="MSGTRIALN_TOFF_X" name="setupScript,trialNumberMessageTextOffsetX" type="number" value="0" />
			<label for="MSGTRIALN_TOFF_Y">Y [meters]:</label>
			<input id="MSGTRIALN_TOFF_Y" name="setupScript,trialNumberMessageTextOffsetY" type="number" value="0" />
			<label for="MSGTRIALN_TOFF_R">Rotation [deg]:</label>
			<input id="MSGTRIALN_TOFF_R" name="setupScript,trialNumberMessageTextRotationZ" type="number" value="0" />
   			</inputs>  
<name> </name> <inputs> </inputs>  



          </div>
      
		
 	</div> 

	 
      
       

 
 








  
      
  	
	</inputcolumn> 
	<figurecolumn>
    		<img src="website/inputpage/paradigmSmall-01.png"  style="width:100%">
	</figurecolumn>

 
	</form>

     
  
      

  `);
