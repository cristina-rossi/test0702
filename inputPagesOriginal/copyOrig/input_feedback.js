document.querySelector('#INPUT_FEEDBACK').insertAdjacentHTML('beforeend', `                                  

    
		<form>

		<inputcolumn>
  
  		<!-- colors -->
    		  <inputdivider> Colors </inputdivider>
		  <div class="form-control">        
			<name>Target mesh success color:</name>
   			<inputs>
   			<label for="TARGET_COLOR_S_R">R:</label>
			<input id="TARGET_COLOR_S_R" name="targetScript,targetMeshColorSuccessR" type="number" value="0" />
   			<label for="TARGET_COLOR_S_G">G:</label>
			<input id="TARGET_COLOR_S_G" name="targetScript,targetMeshColorSuccessG" type="number" value="0.75" />
   			<label for="TARGET_COLOR_S_B">B:</label>
			<input id="TARGET_COLOR_S_B" name="targetScript,targetMeshColorSuccessB" type="number" value="0.4" />
   			<label for="TARGET_COLOR_S_A">Alpha:</label>
			<input id="TARGET_COLOR_S_A" name="targetScript,targetMeshColorSuccessAlpha" type="number" value="0.5" />
   			</inputs>            
			<name>Target mesh failure color:</name>
   			<inputs>
   			<label for="TARGET_COLOR_U_R">R:</label>
			<input id="TARGET_COLOR_U_R" name="targetScript,targetMeshColorUnsuccessR" type="number" value="1" />
   			<label for="TARGET_COLOR_U_G">G:</label>
			<input id="TARGET_COLOR_U_G" name="targetScript,targetMeshColorUnsuccessG" type="number" value="0" />
   			<label for="TARGET_COLOR_U_B">B:</label>
			<input id="TARGET_COLOR_U_B" name="targetScript,targetMeshColorUnsuccessB" type="number" value="0" />
   			<label for="TARGET_COLOR_U_A">Alpha:</label>
			<input id="TARGET_COLOR_U_A" name="targetScript,targetMeshColorUnsuccessAlpha" type="number" value="0.5" />
   			</inputs>    
   		        <note>Target color changes online based on success criteria</note>   
      
			<name>Particle effect success color:</name>
   			<inputs>
   			<label for="EFFECT_COLOR_S_R">R:</label>
			<input id="EFFECT_COLOR_S_R" name="plateAndGrapeScript,plateGrapeColorSuccessR" type="number" value="0" />
   			<label for="EFFECT_COLOR_S_G">G:</label>
			<input id="EFFECT_COLOR_S_G" name="plateAndGrapeScript,plateGrapeColorSuccessG" type="number" value="0.75" />
   			<label for="EFFECT_COLOR_S_B">B:</label>
			<input id="EFFECT_COLOR_S_B" name="plateAndGrapeScript,plateGrapeColorSuccessB" type="number" value="0.4" />
   			<label for="EFFECT_COLOR_S_A">Alpha:</label>
			<input id="EFFECT_COLOR_S_A" name="plateAndGrapeScript,plateGrapeColorSuccessAlpha" type="number" value="0.5" />
   			</inputs>            
			<name>Particle effect failure color:</name>
   			<inputs>
   			<label for="EFFECT_COLOR_U_R">R:</label>
			<input id="EFFECT_COLOR_U_R" name="plateAndGrapeScript,plateGrapeColorUnsuccessR" type="number" value="1" />
   			<label for="EFFECT_COLOR_U_G">G:</label>
			<input id="EFFECT_COLOR_U_G" name="plateAndGrapeScript,plateGrapeColorUnsuccessG" type="number" value="0" />
   			<label for="EFFECT_COLOR_U_B">B:</label>
			<input id="EFFECT_COLOR_U_B" name="plateAndGrapeScript,plateGrapeColorUnsuccessB" type="number" value="0" />
   			<label for="EFFECT_COLOR_U_A">Alpha:</label>
			<input id="EFFECT_COLOR_U_A" name="plateAndGrapeScript,plateGrapeColorUnsuccessAlpha" type="number" value="0.5" />
   			</inputs>    
   		        <note>Particle effect appears on plate upon trial change</note>    
		   </div>


  		<!-- message -->
    		  <inputdivider> Messages </inputdivider>
		 

<div class="form-control">  
<name>Display feedback message?</name> 


   			<inputs>
			<input id="OMH" name="trialScript,stage5_displayMessageFlag" type="hidden" value="FALSE">
			<input id="OM" name="trialScript,stage5_displayMessageFlag" type="checkbox" value="TRUE" checked>	
			<label for="OM">Yes</label>	 
 


	</inputs>       

<name> </name> <inputs> </inputs>    
			<name>Success:</name>   
   			<inputs>      
			<label for="SUCC"></label>
<textarea id="SUCC" name="messagesScript,successText" rows="1" cols="50">success!</textarea>
   			</inputs>         	
<name> </name> <inputs> </inputs>
			<name>Failure:</name>   
   			<inputs>    </inputs>      
  
			<name>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
- - -> Plate too tilted:</name>
  
		

   			<inputs>      
			<label for="FAIL1"></label>
			<textarea id="FAIL1" name="messagesScript,fail1Text" rows="1" cols="50">failed</textarea>
   			</inputs>      
<name> </name> <inputs> </inputs>
			<name>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
- - -> Plate exited target:</name>
   			<inputs>      
			<label for="FAIL2"></label>
<textarea id="FAIL2" name="messagesScript,fail2Text" rows="1" cols="50">
failed
</textarea>
   			</inputs>   
<name> </name> <inputs> </inputs>           
			<name>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
- - -> Plate fell:</name>
   			<inputs>      
			<label for="FAIL3"></label>
			<textarea id="FAIL3" name="messagesScript,fail3Text" rows="1" cols="50">failed</textarea>
   			</inputs>        
<name> </name> <inputs> </inputs>  
			<name>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
- - -> Time limit reached:</name>
   			<inputs>      
			<label for="FAIL4"></label>
<textarea id="FAIL4" name="messagesScript,fail4Text" rows="1" cols="50">too slow</textarea>
   			</inputs> 
<name> </name> <inputs> </inputs>
			<name>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
- - -> Workspace exited:</name>   
   			<inputs>      
			<label for="FAIL5"></label>
<textarea id="FAIL5" name="messagesScript,fail5Text" rows="1" cols="50">failed</textarea>
   			</inputs>  
<name> </name> <inputs> </inputs> 
			<name>Message duration [seconds]:</name>
   			<inputs>
   			<label for="FAIL_TIME"></label>
			<input id="FAIL_TIME" name="trialScript,stage5_outcomeMessageDuration" type="number" value="1" />
   			</inputs> 
<name> </name> <inputs> </inputs>  



<!-- Expandable Feedback Message Position -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableOutcomeMessagePositions')">
        Expand message appearance
        </button>
  
        <div class="expwindow" id="expandableOutcomeMessagePositions"> 

 
           <name> Success: </name> <inputs></inputs>	   
           
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGSUCC_POS_X">X:</label>
			<input id="MSGSUCC_POS_X" name="setupScript,successMessagePositionX" type="number" value="0.4" />
			<label for="MSGSUCC_POS_Y">Y:</label>
			<input id="MSGSUCC_POS_Y" name="setupScript,successMessagePositionY" type="number" value="0.3" />
			<label for="MSGSUCC_POS_Z">Z:</label>
			<input id="MSGSUCC_POS_Z" name="setupScript,successMessagePositionZ" type="number" value="0.6" />
   			</inputs>  	   
           
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGSUCC_POS_X">Width [meters]:</label>
			<input id="MSGSUCC_POS_X" name="setupScript,successMessageSizeX" type="number" value="0.55" />
			<label for="MSGSUCC_POS_Y">Height [meters]:</label>
			<input id="MSGSUCC_POS_Y" name="setupScript,successMessageSizeY" type="number" value="0.4" />
			<label for="MSGSUCC_POS_Z">Font Size:</label>
			<input id="MSGSUCC_POS_Z" name="setupScript,successMessageFontSize" type="number" value="1" />
   			</inputs>  
          

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGSUCC_TYPE_B" name="setupScript,successMessageType" type="radio" value="cartoon"  checked >
  		    <label for="MSGSUCC_TYPE_B">Cartoon</label> 
		    <input id="MSGSUCC_TYPE_B2" name="setupScript,successMessageType" type="radio" value="rectangle" >
		    <label for="MSGSUCC_TYPE_B2">Rectangle</label>                 
		    <input id="MSGSUCC_TYPE_B0" name="setupScript,successMessageType" type="radio" value="none" >
  		    <label for="MSGSUCC_TYPE_B0">None</label>                 
   	        <label for="MSGSUCC_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGSUCC_ROT_B" name="setupScript,successMessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGSUCC_COLOR_B_R">R:</label>
			<input id="MSGSUCC_COLOR_B_R" name="setupScript,successMessageBackgroundColorR" type="number" value="0" />
   			<label for="MSGSUCC_COLOR_B_G">G:</label>
			<input id="MSGSUCC_COLOR_B_G" name="setupScript,successMessageBackgroundColorG" type="number" value="0.6" />
   			<label for="MSGSUCC_COLOR_B_B">B:</label>
			<input id="MSGSUCC_COLOR_B_B" name="setupScript,successMessageBackgroundColorB" type="number" value="0" />
   			<label for="MSGSUCC_COLOR_B_A">Alpha:</label>
			<input id="MSGSUCC_COLOR_B_A" name="setupScript,successMessageBackgroundColorAlpha" type="number" value="1" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGSUCC_COLOR_T_R">R:</label>
			<input id="MSGSUCC_COLOR_T_R" name="setupScript,successMessageTextColorR" type="number" value="1" />
   			<label for="MSGSUCC_COLOR_T_G">G:</label>
			<input id="MSGSUCC_COLOR_T_G" name="setupScript,successMessageTextColorG" type="number" value="1" />
   			<label for="MSGSUCC_COLOR_T_B">B:</label>
			<input id="MSGSUCC_COLOR_T_B" name="setupScript,successMessageTextColorB" type="number" value="1" />
   			<label for="MSGSUCC_COLOR_T_A">Alpha:</label>
			<input id="MSGSUCC_COLOR_T_A" name="setupScript,successMessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGSUCC_TOFF_X">X [meters]:</label>
			<input id="MSGSUCC_TOFF_X" name="setupScript,successMessageTextOffsetX" type="number" value="0.03" />
			<label for="MSGSUCC_TOFF_Y">Y [meters]:</label>
			<input id="MSGSUCC_TOFF_Y" name="setupScript,successMessageTextOffsetY" type="number" value="0.015" />
			<label for="MSGSUCC_TOFF_R">Rotation [deg]:</label>
			<input id="MSGSUCC_TOFF_R" name="setupScript,successMessageTextRotationZ" type="number" value="15" />
   			</inputs>  
   			

<name> </name> <inputs> </inputs>  


           <name> Failure - Plate too tilted: </name> <inputs></inputs>	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGFAIL1_POS_X">X:</label>
			<input id="MSGFAIL1_POS_X" name="setupScript,fail1MessagePositionX" type="number" value="0.4" />
			<label for="MSGFAIL1_POS_Y">Y:</label>
			<input id="MSGFAIL1_POS_Y" name="setupScript,fail1MessagePositionY" type="number" value="0.3" />
			<label for="MSGFAIL1_POS_Z">Z:</label>
			<input id="MSGFAIL1_POS_Z" name="setupScript,fail1MessagePositionZ" type="number" value="0.6" />
   			</inputs>  	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGFAIL1_POS_X">Width [meters]:</label>
			<input id="MSGFAIL1_POS_X" name="setupScript,fail1MessageSizeX" type="number" value="0.55" />
			<label for="MSGFAIL1_POS_Y">Height [meters]:</label>
			<input id="MSGFAIL1_POS_Y" name="setupScript,fail1MessageSizeY" type="number" value="0.4" />
			<label for="MSGFAIL1_POS_Z">Font Size:</label>
			<input id="MSGFAIL1_POS_Z" name="setupScript,fail1MessageFontSize" type="number" value="1" />
   			</inputs>  


            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGFAIL1_TYPE_B" name="setupScript,fail1MessageType" type="radio" value="cartoon"  checked >
  		    <label for="MSGFAIL1_TYPE_B">Cartoon</label> 
		    <input id="MSGFAIL1_TYPE_B2" name="setupScript,fail1MessageType" type="radio" value="rectangle" >
		    <label for="MSGFAIL1_TYPE_B2">Rectangle</label>                        
		    <input id="MSGFAIL1_TYPE_B0" name="setupScript,fail1MessageType" type="radio" value="none" >
  		    <label for="MSGFAIL1_TYPE_B0">None</label>          
   	        <label for="MSGFAIL1_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGFAIL1_ROT_B" name="setupScript,fail1MessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGFAIL1_COLOR_B_R">R:</label>
			<input id="MSGFAIL1_COLOR_B_R" name="setupScript,fail1MessageBackgroundColorR" type="number" value="0.7" />
   			<label for="MSGFAIL1_COLOR_B_G">G:</label>
			<input id="MSGFAIL1_COLOR_B_G" name="setupScript,fail1MessageBackgroundColorG" type="number" value="0" />
   			<label for="MSGFAIL1_COLOR_B_B">B:</label>
			<input id="MSGFAIL1_COLOR_B_B" name="setupScript,fail1MessageBackgroundColorB" type="number" value="0" />
   			<label for="MSGFAIL1_COLOR_B_A">Alpha:</label>
			<input id="MSGFAIL1_COLOR_B_A" name="setupScript,fail1MessageBackgroundColorAlpha" type="number" value="1" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGFAIL1_COLOR_T_R">R:</label>
			<input id="MSGFAIL1_COLOR_T_R" name="setupScript,fail1MessageTextColorR" type="number" value="1" />
   			<label for="MSGFAIL1_COLOR_T_G">G:</label>
			<input id="MSGFAIL1_COLOR_T_G" name="setupScript,fail1MessageTextColorG" type="number" value="1" />
   			<label for="MSGFAIL1_COLOR_T_B">B:</label>
			<input id="MSGFAIL1_COLOR_T_B" name="setupScript,fail1MessageTextColorB" type="number" value="1" />
   			<label for="MSGFAIL1_COLOR_T_A">Alpha:</label>
			<input id="MSGFAIL1_COLOR_T_A" name="setupScript,fail1MessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGFAIL1_TOFF_X">X [meters]:</label>
			<input id="MSGFAIL1_TOFF_X" name="setupScript,fail1MessageTextOffsetX" type="number" value="0.03" />
			<label for="MSGFAIL1_TOFF_Y">Y [meters]:</label>
			<input id="MSGFAIL1_TOFF_Y" name="setupScript,fail1MessageTextOffsetY" type="number" value="0.015" />
			<label for="MSGFAIL1_TOFF_R">Rotation [deg]:</label>
			<input id="MSGFAIL1_TOFF_R" name="setupScript,fail1MessageTextRotationZ" type="number" value="15" />
   			</inputs>  

<name> </name> <inputs> </inputs>  


           <name> Failure - Plate exited target: </name> <inputs></inputs>	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGFAIL2_POS_X">X:</label>
			<input id="MSGFAIL2_POS_X" name="setupScript,fail2MessagePositionX" type="number" value="0.4" />
			<label for="MSGFAIL2_POS_Y">Y:</label>
			<input id="MSGFAIL2_POS_Y" name="setupScript,fail2MessagePositionY" type="number" value="0.3" />
			<label for="MSGFAIL2_POS_Z">Z:</label>
			<input id="MSGFAIL2_POS_Z" name="setupScript,fail2MessagePositionZ" type="number" value="0.6" />
   			</inputs>  	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGFAIL2_POS_X">Width [meters]:</label>
			<input id="MSGFAIL2_POS_X" name="setupScript,fail2MessageSizeX" type="number" value="0.55" />
			<label for="MSGFAIL2_POS_Y">Height [meters]:</label>
			<input id="MSGFAIL2_POS_Y" name="setupScript,fail2MessageSizeY" type="number" value="0.4" />
			<label for="MSGFAIL2_POS_Z">Font Size:</label>
			<input id="MSGFAIL2_POS_Z" name="setupScript,fail2MessageFontSize" type="number" value="0.7" />
   			</inputs>  


            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGFAIL2_TYPE_B" name="setupScript,fail2MessageType" type="radio" value="cartoon"  checked >
  		    <label for="MSGFAIL2_TYPE_B">Cartoon</label> 
		    <input id="MSGFAIL2_TYPE_B2" name="setupScript,fail2MessageType" type="radio" value="rectangle" >
		    <label for="MSGFAIL2_TYPE_B2">Rectangle</label>                          
		    <input id="MSGFAIL2_TYPE_B0" name="setupScript,fail2MessageType" type="radio" value="none" >
  		    <label for="MSGFAIL2_TYPE_B0">None</label>        
   	        <label for="MSGFAIL2_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGFAIL2_ROT_B" name="setupScript,fail2MessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGFAIL2_COLOR_B_R">R:</label>
			<input id="MSGFAIL2_COLOR_B_R" name="setupScript,fail2MessageBackgroundColorR" type="number" value="0.7" />
   			<label for="MSGFAIL2_COLOR_B_G">G:</label>
			<input id="MSGFAIL2_COLOR_B_G" name="setupScript,fail2MessageBackgroundColorG" type="number" value="0" />
   			<label for="MSGFAIL2_COLOR_B_B">B:</label>
			<input id="MSGFAIL2_COLOR_B_B" name="setupScript,fail2MessageBackgroundColorB" type="number" value="0" />
   			<label for="MSGFAIL2_COLOR_B_A">Alpha:</label>
			<input id="MSGFAIL2_COLOR_B_A" name="setupScript,fail2MessageBackgroundColorAlpha" type="number" value="1" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGFAIL2_COLOR_T_R">R:</label>
			<input id="MSGFAIL2_COLOR_T_R" name="setupScript,fail2MessageTextColorR" type="number" value="1" />
   			<label for="MSGFAIL2_COLOR_T_G">G:</label>
			<input id="MSGFAIL2_COLOR_T_G" name="setupScript,fail2MessageTextColorG" type="number" value="1" />
   			<label for="MSGFAIL2_COLOR_T_B">B:</label>
			<input id="MSGFAIL2_COLOR_T_B" name="setupScript,fail2MessageTextColorB" type="number" value="1" />
   			<label for="MSGFAIL2_COLOR_T_A">Alpha:</label>
			<input id="MSGFAIL2_COLOR_T_A" name="setupScript,fail2MessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGFAIL2_TOFF_X">X [meters]:</label>
			<input id="MSGFAIL2_TOFF_X" name="setupScript,fail2MessageTextOffsetX" type="number" value="0.03" />
			<label for="MSGFAIL2_TOFF_Y">Y [meters]:</label>
			<input id="MSGFAIL2_TOFF_Y" name="setupScript,fail2MessageTextOffsetY" type="number" value="0.015" />
			<label for="MSGFAIL2_TOFF_R">Rotation [deg]:</label>
			<input id="MSGFAIL2_TOFF_R" name="setupScript,fail2MessageTextRotationZ" type="number" value="15" />
   			</inputs>  

<name> </name> <inputs> </inputs>  



           <name> Failure - Plate fell: </name> <inputs></inputs>	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGFAIL3_POS_X">X:</label>
			<input id="MSGFAIL3_POS_X" name="setupScript,fail3MessagePositionX" type="number" value="0.4" />
			<label for="MSGFAIL3_POS_Y">Y:</label>
			<input id="MSGFAIL3_POS_Y" name="setupScript,fail3MessagePositionY" type="number" value="0.3" />
			<label for="MSGFAIL3_POS_Z">Z:</label>
			<input id="MSGFAIL3_POS_Z" name="setupScript,fail3MessagePositionZ" type="number" value="0.6" />
   			</inputs>  	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGFAIL3_POS_X">Width [meters]:</label>
			<input id="MSGFAIL3_POS_X" name="setupScript,fail3MessageSizeX" type="number" value="0.55" />
			<label for="MSGFAIL3_POS_Y">Height [meters]:</label>
			<input id="MSGFAIL3_POS_Y" name="setupScript,fail3MessageSizeY" type="number" value="0.4" />
			<label for="MSGFAIL3_POS_Z">Font Size:</label>
			<input id="MSGFAIL3_POS_Z" name="setupScript,fail3MessageFontSize" type="number" value="1" />
   			</inputs>  


            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGFAIL3_TYPE_B" name="setupScript,fail3MessageType" type="radio" value="cartoon"  checked >
  		    <label for="MSGFAIL3_TYPE_B">Cartoon</label> 
		    <input id="MSGFAIL3_TYPE_B2" name="setupScript,fail3MessageType" type="radio" value="rectangle" >
		    <label for="MSGFAIL3_TYPE_B2">Rectangle</label>                              
		    <input id="MSGFAIL3_TYPE_B0" name="setupScript,fail3MessageType" type="radio" value="none" >
  		    <label for="MSGFAIL3_TYPE_B0">None</label>    
   	        <label for="MSGFAIL3_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGFAIL3_ROT_B" name="setupScript,fail3MessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGFAIL3_COLOR_B_R">R:</label>
			<input id="MSGFAIL3_COLOR_B_R" name="setupScript,fail3MessageBackgroundColorR" type="number" value="0.7" />
   			<label for="MSGFAIL3_COLOR_B_G">G:</label>
			<input id="MSGFAIL3_COLOR_B_G" name="setupScript,fail3MessageBackgroundColorG" type="number" value="0" />
   			<label for="MSGFAIL3_COLOR_B_B">B:</label>
			<input id="MSGFAIL3_COLOR_B_B" name="setupScript,fail3MessageBackgroundColorB" type="number" value="0" />
   			<label for="MSGFAIL3_COLOR_B_A">Alpha:</label>
			<input id="MSGFAIL3_COLOR_B_A" name="setupScript,fail3MessageBackgroundColorAlpha" type="number" value="1" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGFAIL3_COLOR_T_R">R:</label>
			<input id="MSGFAIL3_COLOR_T_R" name="setupScript,fail3MessageTextColorR" type="number" value="1" />
   			<label for="MSGFAIL3_COLOR_T_G">G:</label>
			<input id="MSGFAIL3_COLOR_T_G" name="setupScript,fail3MessageTextColorG" type="number" value="1" />
   			<label for="MSGFAIL3_COLOR_T_B">B:</label>
			<input id="MSGFAIL3_COLOR_T_B" name="setupScript,fail3MessageTextColorB" type="number" value="1" />
   			<label for="MSGFAIL3_COLOR_T_A">Alpha:</label>
			<input id="MSGFAIL3_COLOR_T_A" name="setupScript,fail3MessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGFAIL3_TOFF_X">X [meters]:</label>
			<input id="MSGFAIL3_TOFF_X" name="setupScript,fail3MessageTextOffsetX" type="number" value="0.03" />
			<label for="MSGFAIL3_TOFF_Y">Y [meters]:</label>
			<input id="MSGFAIL3_TOFF_Y" name="setupScript,fail3MessageTextOffsetY" type="number" value="0.015" />
			<label for="MSGFAIL3_TOFF_R">Rotation [deg]:</label>
			<input id="MSGFAIL3_TOFF_R" name="setupScript,fail3MessageTextRotationZ" type="number" value="15" />
   			</inputs>  
<name> </name> <inputs> </inputs>  



           <name> Failure - Time limit reached: </name> <inputs></inputs>	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGFAIL4_POS_X">X:</label>
			<input id="MSGFAIL4_POS_X" name="setupScript,fail4MessagePositionX" type="number" value="0.4" />
			<label for="MSGFAIL4_POS_Y">Y:</label>
			<input id="MSGFAIL4_POS_Y" name="setupScript,fail4MessagePositionY" type="number" value="0.3" />
			<label for="MSGFAIL4_POS_Z">Z:</label>
			<input id="MSGFAIL4_POS_Z" name="setupScript,fail4MessagePositionZ" type="number" value="0.6" />
   			</inputs>  	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGFAIL4_POS_X">Width [meters]:</label>
			<input id="MSGFAIL4_POS_X" name="setupScript,fail4MessageSizeX" type="number" value="0.55" />
			<label for="MSGFAIL4_POS_Y">Height [meters]:</label>
			<input id="MSGFAIL4_POS_Y" name="setupScript,fail4MessageSizeY" type="number" value="0.4" />
			<label for="MSGFAIL4_POS_Z">Font Size:</label>
			<input id="MSGFAIL4_POS_Z" name="setupScript,fail4MessageFontSize" type="number" value="1" />
   			</inputs>  


            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGFAIL4_TYPE_B" name="setupScript,fail4MessageType" type="radio" value="cartoon"  checked >
  		    <label for="MSGFAIL4_TYPE_B">Cartoon</label> 
		    <input id="MSGFAIL4_TYPE_B2" name="setupScript,fail4MessageType" type="radio" value="rectangle" >
		    <label for="MSGFAIL4_TYPE_B2">Rectangle</label>                      
		    <input id="MSGFAIL4_TYPE_B0" name="setupScript,fail4MessageType" type="radio" value="none" >
  		    <label for="MSGFAIL4_TYPE_B0">None</label>            
   	        <label for="MSGFAIL4_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGFAIL4_ROT_B" name="setupScript,fail4MessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGFAIL4_COLOR_B_R">R:</label>
			<input id="MSGFAIL4_COLOR_B_R" name="setupScript,fail4MessageBackgroundColorR" type="number" value="0.7" />
   			<label for="MSGFAIL4_COLOR_B_G">G:</label>
			<input id="MSGFAIL4_COLOR_B_G" name="setupScript,fail4MessageBackgroundColorG" type="number" value="0" />
   			<label for="MSGFAIL4_COLOR_B_B">B:</label>
			<input id="MSGFAIL4_COLOR_B_B" name="setupScript,fail4MessageBackgroundColorB" type="number" value="0" />
   			<label for="MSGFAIL4_COLOR_B_A">Alpha:</label>
			<input id="MSGFAIL4_COLOR_B_A" name="setupScript,fail4MessageBackgroundColorAlpha" type="number" value="1" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGFAIL4_COLOR_T_R">R:</label>
			<input id="MSGFAIL4_COLOR_T_R" name="setupScript,fail4MessageTextColorR" type="number" value="1" />
   			<label for="MSGFAIL4_COLOR_T_G">G:</label>
			<input id="MSGFAIL4_COLOR_T_G" name="setupScript,fail4MessageTextColorG" type="number" value="1" />
   			<label for="MSGFAIL4_COLOR_T_B">B:</label>
			<input id="MSGFAIL4_COLOR_T_B" name="setupScript,fail4MessageTextColorB" type="number" value="1" />
   			<label for="MSGFAIL4_COLOR_T_A">Alpha:</label>
			<input id="MSGFAIL4_COLOR_T_A" name="setupScript,fail4MessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGFAIL4_TOFF_X">X [meters]:</label>
			<input id="MSGFAIL4_TOFF_X" name="setupScript,fail4MessageTextOffsetX" type="number" value="0.03" />
			<label for="MSGFAIL4_TOFF_Y">Y [meters]:</label>
			<input id="MSGFAIL4_TOFF_Y" name="setupScript,fail4MessageTextOffsetY" type="number" value="0.015" />
			<label for="MSGFAIL4_TOFF_R">Rotation [deg]:</label>
			<input id="MSGFAIL4_TOFF_R" name="setupScript,fail4MessageTextRotationZ" type="number" value="15" />
   			</inputs>  

<name> </name> <inputs> </inputs>  



           <name> Failure - Workspace exited: </name> <inputs></inputs>	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGFAIL5_POS_X">X:</label>
			<input id="MSGFAIL5_POS_X" name="setupScript,fail5MessagePositionX" type="number" value="0.4" />
			<label for="MSGFAIL5_POS_Y">Y:</label>
			<input id="MSGFAIL5_POS_Y" name="setupScript,fail5MessagePositionY" type="number" value="0.3" />
			<label for="MSGFAIL5_POS_Z">Z:</label>
			<input id="MSGFAIL5_POS_Z" name="setupScript,fail5MessagePositionZ" type="number" value="0.6" />
   			</inputs>  	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGFAIL5_POS_X">Width [meters]:</label>
			<input id="MSGFAIL5_POS_X" name="setupScript,fail5MessageSizeX" type="number" value="0.55" />
			<label for="MSGFAIL5_POS_Y">Height [meters]:</label>
			<input id="MSGFAIL5_POS_Y" name="setupScript,fail5MessageSizeY" type="number" value="0.4" />
			<label for="MSGFAIL5_POS_Z">Font Size:</label>
			<input id="MSGFAIL5_POS_Z" name="setupScript,fail5MessageFontSize" type="number" value="1" />
   			</inputs>  


            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGFAIL5_TYPE_B" name="setupScript,fail5MessageType" type="radio" value="cartoon"  checked >
  		    <label for="MSGFAIL5_TYPE_B">Cartoon</label> 
		    <input id="MSGFAIL5_TYPE_B2" name="setupScript,fail5MessageType" type="radio" value="rectangle" >
		    <label for="MSGFAIL5_TYPE_B2">Rectangle</label>                  
		    <input id="MSGFAIL5_TYPE_B0" name="setupScript,fail5MessageType" type="radio" value="none" >
  		    <label for="MSGFAIL5_TYPE_B0">None</label>    
   	        <label for="MSGFAIL5_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGFAIL5_ROT_B" name="setupScript,fail5MessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGFAIL5_COLOR_B_R">R:</label>
			<input id="MSGFAIL5_COLOR_B_R" name="setupScript,fail5MessageBackgroundColorR" type="number" value="0.7" />
   			<label for="MSGFAIL5_COLOR_B_G">G:</label>
			<input id="MSGFAIL5_COLOR_B_G" name="setupScript,fail5MessageBackgroundColorG" type="number" value="0" />
   			<label for="MSGFAIL5_COLOR_B_B">B:</label>
			<input id="MSGFAIL5_COLOR_B_B" name="setupScript,fail5MessageBackgroundColorB" type="number" value="0" />
   			<label for="MSGFAIL5_COLOR_B_A">Alpha:</label>
			<input id="MSGFAIL5_COLOR_B_A" name="setupScript,fail5MessageBackgroundColorAlpha" type="number" value="1" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGFAIL5_COLOR_T_R">R:</label>
			<input id="MSGFAIL5_COLOR_T_R" name="setupScript,fail5MessageTextColorR" type="number" value="1" />
   			<label for="MSGFAIL5_COLOR_T_G">G:</label>
			<input id="MSGFAIL5_COLOR_T_G" name="setupScript,fail5MessageTextColorG" type="number" value="1" />
   			<label for="MSGFAIL5_COLOR_T_B">B:</label>
			<input id="MSGFAIL5_COLOR_T_B" name="setupScript,fail5MessageTextColorB" type="number" value="1" />
   			<label for="MSGFAIL5_COLOR_T_A">Alpha:</label>
			<input id="MSGFAIL5_COLOR_T_A" name="setupScript,fail5MessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGFAIL5_TOFF_X">X [meters]:</label>
			<input id="MSGFAIL5_TOFF_X" name="setupScript,fail5MessageTextOffsetX" type="number" value="0.03" />
			<label for="MSGFAIL5_TOFF_Y">Y [meters]:</label>
			<input id="MSGFAIL5_TOFF_Y" name="setupScript,fail5MessageTextOffsetY" type="number" value="0.015" />
			<label for="MSGFAIL5_TOFF_R">Rotation [deg]:</label>
			<input id="MSGFAIL5_TOFF_R" name="setupScript,fail5MessageTextRotationZ" type="number" value="15" />
   			</inputs>  
		
 	</div> 

 
  </div>
     













 

     
  		<!-- bird sound -->
    		  <inputdivider> Bird sound </inputdivider>
 
		  <div class="form-control">        
			<name>Volume [0 to 1]:</name>
   			<inputs>      
			<label for="BIRDVOL"></label>
			<input id="BIRDVOL" name="setupScript,targetBirdVolume" type="number" value="1" />
   			</inputs>      
   		        <note>Change sounds by replacing failure and success mp3 files in Resources</note>    


 
	<name>Change bird:</name> 
	<inputs>
		<input id="CHANGEBIRD_ANY" name="trialScript,changeBirdAnyCondition" type="radio" value="TRUE"  checked >
		<label for="CHANGEBIRD_ANY">After every trial</label> 
		<input id="CHANGEBIRD_ANYF" name="trialScript,changeBirdAnyCondition" type="radio" value="FALSE" >
		<label for="CHANGEBIRD_ANYF">For selected conditions (expand below) </label>  
   	</inputs>

 

<!-- Expandable Change Bird Condition -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableChangeBird')">
        Expand conditions for changing bird
        </button>
 
        <inputcolumn>
        <div class="expwindow" id="expandableChangeBird"> 
 
 <name>Change bird for conditions:</name> <inputs></inputs>  
 
 <name> </name> <inputs> 
 <input id="OMH" name="trialScript,changeBirdOnSuccess" type="hidden" value="FALSE">
<input id="OM" name="trialScript,changeBirdOnSuccess" type="checkbox" value="TRUE" checked>	
<label for="OM">Success</label>	 
 </inputs>  

 
 <name> </name> <inputs> 
 <input id="OMH" name="trialScript,changeBirdOnFailure1" type="hidden" value="FALSE">
<input id="OM" name="trialScript,changeBirdOnFailure1" type="checkbox" value="TRUE" checked>	
<label for="OM">Failure - Plate too tilted</label>	 
 </inputs>  


 <name> </name> <inputs> 
 <input id="OMH" name="trialScript,changeBirdOnFailure2" type="hidden" value="FALSE">
<input id="OM" name="trialScript,changeBirdOnFailure2" type="checkbox" value="TRUE" checked>	
<label for="OM">Failure - Plate exited target</label>	 
 </inputs>  


 <name> </name> <inputs> 
 <input id="OMH" name="trialScript,changeBirdOnFailure3" type="hidden" value="FALSE">
<input id="OM" name="trialScript,changeBirdOnFailure3" type="checkbox" value="TRUE" checked>	
<label for="OM">Failure - Plate fell</label>	 
 </inputs>  
	    


 <name> </name> <inputs> 
 <input id="OMH" name="trialScript,changeBirdOnFailure4" type="hidden" value="FALSE">
<input id="OM" name="trialScript,changeBirdOnFailure4" type="checkbox" value="TRUE" checked>	
<label for="OM">Failure - Time limit reached</label>	 
 </inputs>  



 <name> </name> <inputs> 
 <input id="OMH" name="trialScript,changeBirdOnFailure5" type="hidden" value="FALSE">
<input id="OM" name="trialScript,changeBirdOnFailure5" type="checkbox" value="TRUE" checked>	
<label for="OM">Failure - Workspace exited</label>	 
 </inputs>  
 
		
 	</div>
  	</inputcolumn>

 


		   </div>
     


	</inputcolumn>  

	<figurecolumn>
    		<img src="website/inputpage/figures/feedback.png"  style="width:100%">
	</figurecolumn>
 
	</form>

     
  
      

  `);


