document.querySelector('#INPUT_BETWEENTRIALS').insertAdjacentHTML('beforeend', `                                 

          

	<form>
	<inputcolumn>
 		 
  	
	<!-- Position hands in hand-target -->
	  <inputdivider> Hand home position appearance </inputdivider>
	  <div class="form-control">  
   			<note>Asks participant to place hands within target hand-meshes to start trial.</note>    
   			<note>Trial proceeds once the selected hands have collided with respective hand-targets:</note>
			<name>Left hand home visual mesh:</name>
   			<inputs>		    
                
                 
			<input id="LHOMEAPP_SHAPE_HAND" name="setupScript,lefthandStartingBoundMeshShape" type="radio" value="Hand"  checked >
			<label for="LHOMEAPP_SHAPE_HAND">Hand</label> 
			<input id="LHOMEAPP_SHAPE_SPHERE" name="setupScript,lefthandStartingBoundMeshShape" type="radio" value="Sphere"   >
			<label for="LHOMEAPP_SHAPE_SPHERE">Sphere</label> 
			<input id="LHOMEAPP_SHAPE_CUBE" name="setupScript,lefthandStartingBoundMeshShape" type="radio" value="Cube"   >
			<label for="LHOMEAPP_SHAPE_CUBE">Cube</label> 
			<input id="LHOMEAPP_SHAPE_NONE" name="setupScript,lefthandStartingBoundMeshShape" type="radio" value="None"   >
			<label for="LHOMEAPP_SHAPE_NONE">None</label> 


 
            <br>
			<input id="LHANDTARGETP_FLAG_H" name="setupScript,lefthandStartingBoundMeshPositionAuto" type="hidden" value="FALSE">
			<input id="LHANDTARGETP_FLAG" name="setupScript,lefthandStartingBoundMeshPositionAuto" type="checkbox" value="TRUE" checked>
			<label for="LHANDTARGETP_FLAG">Automatic position</label>		

			<input id="LHANDTARGETS_FLAG_H" name="setupScript,lefthandStartingBoundMeshSizeAuto" type="hidden" value="FALSE">
			<input id="LHANDTARGETS_FLAG" name="setupScript,lefthandStartingBoundMeshSizeAuto" type="checkbox" value="TRUE" checked>
			<label for="LHANDTARGETS_FLAG">Automatic size</label>	


	</inputs>  
			<name>Right hand home visual mesh:</name>
   			<inputs>		 

			<input id="RHOMEAPP_SHAPE_HAND" name="setupScript,righthandStartingBoundMeshShape" type="radio" value="Hand"  checked >
			<label for="RHOMEAPP_SHAPE_HAND">Hand</label> 
			<input id="RHOMEAPP_SHAPE_SPHERE" name="setupScript,righthandStartingBoundMeshShape" type="radio" value="Sphere"   >
			<label for="RHOMEAPP_SHAPE_SPHERE">Sphere</label> 
			<input id="RHOMEAPP_SHAPE_CUBE" name="setupScript,righthandStartingBoundMeshShape" type="radio" value="Cube"   >
			<label for="RHOMEAPP_SHAPE_CUBE">Cube</label> 
			<input id="RHOMEAPP_SHAPE_NONE" name="setupScript,righthandStartingBoundMeshShape" type="radio" value="None"   >
			<label for="RHOMEAPP_SHAPE_NONE">None</label> 


            <br>
			<input id="RHANDTARGETP_FLAG_H" name="setupScript,righthandStartingBoundMeshPositionAuto" type="hidden" value="FALSE">
			<input id="RHANDTARGETP_FLAG" name="setupScript,righthandStartingBoundMeshPositionAuto" type="checkbox" value="TRUE" checked>
			<label for="RHANDTARGETP_FLAG">Automatic position</label>	

			<input id="RHANDTARGETS_FLAG_H" name="setupScript,righthandStartingBoundMeshSizeAuto" type="hidden" value="FALSE">
			<input id="RHANDTARGETS_FLAG" name="setupScript,righthandStartingBoundMeshSizeAuto" type="checkbox" value="TRUE" checked>
			<label for="RHANDTARGETS_FLAG">Automatic size</label>		

   			</inputs>  




<button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableHandHomeVisual')">
        Expand to manually define position and size and mesh color
        </button>
  
        <div class="expwindow" id="expandableHandHomeVisual"> 
            
            
             
			<name>Left mesh position offset wrt to actual home [meters]:</name>
   			<inputs>
   			<label for="LHANDTARGET_POS_X">X:</label>
			<input id="LHANDTARGET_POS_X" name="setupScript,lefthandStartingBoundMeshLocalPositionX" type="number" value="0" />
			<label for="LHANDTARGET_POS_Y">Y:</label>
			<input id="LHANDTARGET_POS_Y" name="setupScript,lefthandStartingBoundMeshLocalPositionY" type="number" value="0" />
			<label for="LHANDTARGET_POS_Z">Z:</label>
			<input id="LHANDTARGET_POS_Z" name="setupScript,lefthandStartingBoundMeshLocalPositionZ" type="number" value="0" />
   			</inputs>   

            <name>Left mesh size [meters]:</name>
   			<inputs>
   			<label for="LHANDTARGET_SIZE_X">X:</label>
			<input id="LHANDTARGET_SIZE_X" name="setupScript,lefthandStartingBoundMeshSizeX" type="number" value="0.2" />
			<label for="LHANDTARGET_SIZE_Y">Y:</label>
			<input id="LHANDTARGET_SIZE_Y" name="setupScript,lefthandStartingBoundMeshSizeY" type="number" value="0.2" />
			<label for="LHANDTARGET_SIZE_Z">Z:</label>
			<input id="LHANDTARGET_SIZE_Z" name="setupScript,lefthandStartingBoundMeshSizeZ" type="number" value="0.2" />
   			</inputs>    
             
			<name>Right mesh position offset wrt to actual home [meters]:</name>
   			<inputs>
   			<label for="RHANDTARGET_POS_X">X:</label>
			<input id="RHANDTARGET_POS_X" name="setupScript,righthandStartingBoundMeshLocalPositionX" type="number" value="0" />
			<label for="RHANDTARGET_POS_Y">Y:</label>
			<input id="RHANDTARGET_POS_Y" name="setupScript,righthandStartingBoundMeshLocalPositionY" type="number" value="0" />
			<label for="RHANDTARGET_POS_Z">Z:</label>
			<input id="RHANDTARGET_POS_Z" name="setupScript,righthandStartingBoundMeshLocalPositionZ" type="number" value="0" />
   			</inputs>   

            <name>Right mesh size [meters]:</name>
   			<inputs>
   			<label for="RHANDTARGET_SIZE_X">X:</label>
			<input id="RHANDTARGET_SIZE_X" name="setupScript,righthandStartingBoundMeshSizeX" type="number" value="0.2" />
			<label for="RHANDTARGET_SIZE_Y">Y:</label>
			<input id="RHANDTARGET_SIZE_Y" name="setupScript,righthandStartingBoundMeshSizeY" type="number" value="0.2" />
			<label for="RHANDTARGET_SIZE_Z">Z:</label>
			<input id="RHANDTARGET_SIZE_Z" name="setupScript,righthandStartingBoundMeshSizeZ" type="number" value="0.2" />
   			</inputs>       


            <name>Hand home mesh success color:</name>
   			<inputs>
   			<label for="HANDTARGET_COLOR_S_R">R:</label>
			<input id="HANDTARGET_COLOR_S_R" name="setupScript,handStartingBoundMeshColorSuccessR" type="number" value="0" />
   			<label for="HANDTARGET_COLOR_S_G">G:</label>
			<input id="HANDTARGET_COLOR_S_G" name="setupScript,handStartingBoundMeshColorSuccessG" type="number" value="0.75" />
   			<label for="HANDTARGET_COLOR_S_B">B:</label>
			<input id="HANDTARGET_COLOR_S_B" name="setupScript,handStartingBoundMeshColorSuccessB" type="number" value="0.4" />
   			<label for="HANDTARGET_COLOR_S_A">Alpha:</label>
			<input id="HANDTARGET_COLOR_S_A" name="setupScript,handStartingBoundMeshColorSuccessAlpha" type="number" value="0.3" />
   			</inputs>            
			<name>Hand home mesh failure color:</name>
   			<inputs>
   			<label for="HANDTARGET_COLOR_U_R">R:</label>
			<input id="HANDTARGET_COLOR_U_R" name="setupScript,handStartingBoundMeshColorUnsuccessR" type="number" value="1" />
   			<label for="HANDTARGET_COLOR_U_G">G:</label>
			<input id="HANDTARGET_COLOR_U_G" name="setupScript,handStartingBoundMeshColorUnsuccessG" type="number" value="0" />
   			<label for="HANDTARGET_COLOR_U_B">B:</label>
			<input id="HANDTARGET_COLOR_U_B" name="setupScript,handStartingBoundMeshColorUnsuccessB" type="number" value="0" />
   			<label for="HANDTARGET_COLOR_U_A">Alpha:</label>
			<input id="HANDTARGET_COLOR_U_A" name="setupScript,handStartingBoundMeshColorUnsuccessAlpha" type="number" value="0.3" />
   			</inputs>    
<name></name><inputs>



                
            <label>Success color when:</label>   
			<input id="HANDTARGET_COLOR_CH" name="setupScript,handStartingBoundMeshColorHandsCoupled" type="radio" value="FALSE"  checked >
			<label for="HANDTARGET_COLOR_CH">Respective hand in home</label> 
			<input id="HANDTARGET_COLOR_C" name="setupScript,handStartingBoundMeshColorHandsCoupled" type="radio" value="TRUE"   >
			<label for="HANDTARGET_COLOR_C">Both hands in homes</label> 


</inputs>
			
            
</div>
                
        
		
</div>
	


<!-- Position hands in hand-target -->
	  <inputdivider> "Position hands in home" message </inputdivider>
	  <div class="form-control">  
          
<name>Display instruction message?</name> 


   			<inputs>
			<input id="OIMH" name="messagesScript,stage2_displayMessageFlag" type="hidden" value="FALSE">
			<input id="OIM" name="messagesScript,stage2_displayMessageFlag" type="checkbox" value="TRUE" checked>	
			<label for="OIM">Yes</label>	 
 


	</inputs>    
          
 			<name>Message shown:</name>
   			<inputs>      
			<label for="HANDTARGET_MSG"></label>
<textarea id="HANDTARGET_MSG" name="messagesScript,originText" rows="3" cols="50">
Position
your hands
to start
</textarea>
   			</inputs>  




<!-- Expandable Origin Message Position -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableOriginMessagePositions')">
        Expand message appearance
        </button>
  
        <div class="expwindow" id="expandableOriginMessagePositions"> 

 
           <name> Hand home message appearance: </name> <inputs></inputs>	   
           
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGHANDHOME_POS_X">X:</label>
			<input id="MSGHANDHOME_POS_X" name="setupScript,originMessagePositionX" type="number" value="0" />
			<label for="MSGHANDHOME_POS_Y">Y:</label>
			<input id="MSGHANDHOME_POS_Y" name="setupScript,originMessagePositionY" type="number" value="0.2" />
			<label for="MSGHANDHOME_POS_Z">Z:</label>
			<input id="MSGHANDHOME_POS_Z" name="setupScript,originMessagePositionZ" type="number" value="3.5" />
   			</inputs>  	   
           
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGHANDHOME_POS_X">Width [meters]:</label>
			<input id="MSGHANDHOME_POS_X" name="setupScript,originMessageSizeX" type="number" value="10" />
			<label for="MSGHANDHOME_POS_Y">Height [meters]:</label>
			<input id="MSGHANDHOME_POS_Y" name="setupScript,originMessageSizeY" type="number" value="5" />
			<label for="MSGHANDHOME_POS_Z">Font Size:</label>
			<input id="MSGHANDHOME_POS_Z" name="setupScript,originMessageFontSize" type="number" value="5" />
   			</inputs>  
          

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGHANDHOME_TYPE_B" name="setupScript,originMessageType" type="radio" value="cartoon"   >
  		    <label for="MSGHANDHOME_TYPE_B">Cartoon</label> 
		    <input id="MSGHANDHOME_TYPE_B2" name="setupScript,originMessageType" type="radio" value="rectangle" checked >
		    <label for="MSGHANDHOME_TYPE_B2">Rectangle</label>                 
		    <input id="MSGHANDHOME_TYPE_B0" name="setupScript,originMessageType" type="radio" value="none" >
  		    <label for="MSGHANDHOME_TYPE_B0">None</label>                 
   	        <label for="MSGHANDHOME_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGHANDHOME_ROT_B" name="setupScript,originMessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGHANDHOME_COLOR_B_R">R:</label>
			<input id="MSGHANDHOME_COLOR_B_R" name="setupScript,originMessageBackgroundColorR" type="number" value="0.2" />
   			<label for="MSGHANDHOME_COLOR_B_G">G:</label>
			<input id="MSGHANDHOME_COLOR_B_G" name="setupScript,originMessageBackgroundColorG" type="number" value="0.65" />
   			<label for="MSGHANDHOME_COLOR_B_B">B:</label>
			<input id="MSGHANDHOME_COLOR_B_B" name="setupScript,originMessageBackgroundColorB" type="number" value="0.3" />
   			<label for="MSGHANDHOME_COLOR_B_A">Alpha:</label>
			<input id="MSGHANDHOME_COLOR_B_A" name="setupScript,originMessageBackgroundColorAlpha" type="number" value="0.3" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGHANDHOME_COLOR_T_R">R:</label>
			<input id="MSGHANDHOME_COLOR_T_R" name="setupScript,originMessageTextColorR" type="number" value="1" />
   			<label for="MSGHANDHOME_COLOR_T_G">G:</label>
			<input id="MSGHANDHOME_COLOR_T_G" name="setupScript,originMessageTextColorG" type="number" value="0" />
   			<label for="MSGHANDHOME_COLOR_T_B">B:</label>
			<input id="MSGHANDHOME_COLOR_T_B" name="setupScript,originMessageTextColorB" type="number" value="0" />
   			<label for="MSGHANDHOME_COLOR_T_A">Alpha:</label>
			<input id="MSGHANDHOME_COLOR_T_A" name="setupScript,originMessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGHANDHOME_TOFF_X">X [meters]:</label>
			<input id="MSGHANDHOME_TOFF_X" name="setupScript,originMessageTextOffsetX" type="number" value="0" />
			<label for="MSGHANDHOME_TOFF_Y">Y [meters]:</label>
			<input id="MSGHANDHOME_TOFF_Y" name="setupScript,originMessageTextOffsetY" type="number" value="0" />
			<label for="MSGHANDHOME_TOFF_R">Rotation [deg]:</label>
			<input id="MSGHANDHOME_TOFF_R" name="setupScript,originMessageTextRotationZ" type="number" value="0" />
   			</inputs>  
   			

<name> </name> <inputs> </inputs>  
    
    </div>
  </div>








<!-- Contact plate Msg -->
	  <inputdivider> "Make contact with plate" message </inputdivider>
	  <div class="form-control">  
          
<name>Display instruction message?</name> 


   			<inputs>
			<input id="PIMH" name="messagesScript,stage3_displayMessageFlag" type="hidden" value="FALSE">
			<input id="PIM" name="messagesScript,stage3_displayMessageFlag" type="checkbox" value="TRUE" checked>	
			<label for="PIM">Yes</label>	 
 


	</inputs>    
          
 			<name>Message shown:</name>
   			<inputs>      
			<label for="PLATECONTACT_MSG"></label>
<textarea id="PLATECONTACT_MSG" name="messagesScript,contactText" rows="3" cols="50">
Make contact
with the plate
</textarea>
   			</inputs>  




<!-- Expandable Plate Contact Message Position -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandablePlateContactMessagePositions')">
        Expand message appearance
        </button>
  
        <div class="expwindow" id="expandablePlateContactMessagePositions"> 

 
           <name> Plate Contact message appearance: </name> <inputs></inputs>	   
           
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGCONTACT_POS_X">X:</label>
			<input id="MSGCONTACT_POS_X" name="setupScript,contactMessagePositionX" type="number" value="0" />
			<label for="MSGCONTACT_POS_Y">Y:</label>
			<input id="MSGCONTACT_POS_Y" name="setupScript,contactMessagePositionY" type="number" value="0.5" />
			<label for="MSGCONTACT_POS_Z">Z:</label>
			<input id="MSGCONTACT_POS_Z" name="setupScript,contactMessagePositionZ" type="number" value="3.5" />
   			</inputs>  	   
           
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGCONTACT_POS_X">Width [meters]:</label>
			<input id="MSGCONTACT_POS_X" name="setupScript,contactMessageSizeX" type="number" value="10" />
			<label for="MSGCONTACT_POS_Y">Height [meters]:</label>
			<input id="MSGCONTACT_POS_Y" name="setupScript,contactMessageSizeY" type="number" value="5" />
			<label for="MSGCONTACT_POS_Z">Font Size:</label>
			<input id="MSGCONTACT_POS_Z" name="setupScript,contactMessageFontSize" type="number" value="5" />
   			</inputs>  
          

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGCONTACT_TYPE_B" name="setupScript,contactMessageType" type="radio" value="cartoon"   >
  		    <label for="MSGCONTACT_TYPE_B">Cartoon</label> 
		    <input id="MSGCONTACT_TYPE_B2" name="setupScript,contactMessageType" type="radio" value="rectangle" checked >
		    <label for="MSGCONTACT_TYPE_B2">Rectangle</label>                 
		    <input id="MSGCONTACT_TYPE_B0" name="setupScript,contactMessageType" type="radio" value="none" >
  		    <label for="MSGCONTACT_TYPE_B0">None</label>                 
   	        <label for="MSGCONTACT_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGCONTACT_ROT_B" name="setupScript,contactMessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGCONTACT_COLOR_B_R">R:</label>
			<input id="MSGCONTACT_COLOR_B_R" name="setupScript,contactMessageBackgroundColorR" type="number" value="0.2" />
   			<label for="MSGCONTACT_COLOR_B_G">G:</label>
			<input id="MSGCONTACT_COLOR_B_G" name="setupScript,contactMessageBackgroundColorG" type="number" value="0.65" />
   			<label for="MSGCONTACT_COLOR_B_B">B:</label>
			<input id="MSGCONTACT_COLOR_B_B" name="setupScript,contactMessageBackgroundColorB" type="number" value="0.3" />
   			<label for="MSGCONTACT_COLOR_B_A">Alpha:</label>
			<input id="MSGCONTACT_COLOR_B_A" name="setupScript,contactMessageBackgroundColorAlpha" type="number" value="0.3" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGCONTACT_COLOR_T_R">R:</label>
			<input id="MSGCONTACT_COLOR_T_R" name="setupScript,contactMessageTextColorR" type="number" value="1" />
   			<label for="MSGCONTACT_COLOR_T_G">G:</label>
			<input id="MSGCONTACT_COLOR_T_G" name="setupScript,contactMessageTextColorG" type="number" value="0" />
   			<label for="MSGCONTACT_COLOR_T_B">B:</label>
			<input id="MSGCONTACT_COLOR_T_B" name="setupScript,contactMessageTextColorB" type="number" value="0" />
   			<label for="MSGCONTACT_COLOR_T_A">Alpha:</label>
			<input id="MSGCONTACT_COLOR_T_A" name="setupScript,contactMessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGCONTACT_TOFF_X">X [meters]:</label>
			<input id="MSGCONTACT_TOFF_X" name="setupScript,contactMessageTextOffsetX" type="number" value="0" />
			<label for="MSGCONTACT_TOFF_Y">Y [meters]:</label>
			<input id="MSGCONTACT_TOFF_Y" name="setupScript,contactMessageTextOffsetY" type="number" value="0" />
			<label for="MSGCONTACT_TOFF_R">Rotation [deg]:</label>
			<input id="MSGCONTACT_TOFF_R" name="setupScript,contactMessageTextRotationZ" type="number" value="0" />
   			</inputs>  
   			

<name> </name> <inputs> </inputs>  
    
    </div>
  </div>








	







<!-- Lift plate Msg -->
	  <inputdivider> "Lift plate to target" message </inputdivider>
	  <div class="form-control">  
          
<name>Display instruction message?</name> 


   			<inputs>
			<input id="LIMH" name="messagesScript,stage4_displayMessageFlag" type="hidden" value="FALSE">
			<input id="LIM" name="messagesScript,stage4_displayMessageFlag" type="checkbox" value="TRUE" checked>	
			<label for="LIM">Yes</label>	 
 


	</inputs>    
          
 			<name>Message shown:</name>
   			<inputs>      
			<label for="LIFTPLATE_MSG"></label>
<textarea id="LIFTPLATE_MSG" name="messagesScript,liftText" rows="3" cols="50">
Lift the plate
to the target
</textarea>
   			</inputs>  




<!-- Expandable Lift Plate Message Position -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableLiftPlateMessagePositions')">
        Expand message appearance
        </button>
  
        <div class="expwindow" id="expandableLiftPlateMessagePositions"> 

 
           <name> Lift Plate to Target message appearance: </name> <inputs></inputs>	   
           
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGLIFT_POS_X">X:</label>
			<input id="MSGLIFT_POS_X" name="setupScript,liftMessagePositionX" type="number" value="0" />
			<label for="MSGLIFT_POS_Y">Y:</label>
			<input id="MSGLIFT_POS_Y" name="setupScript,liftMessagePositionY" type="number" value="0.5" />
			<label for="MSGLIFT_POS_Z">Z:</label>
			<input id="MSGLIFT_POS_Z" name="setupScript,liftMessagePositionZ" type="number" value="3.5" />
   			</inputs>  	   
           
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGLIFT_POS_X">Width [meters]:</label>
			<input id="MSGLIFT_POS_X" name="setupScript,liftMessageSizeX" type="number" value="10" />
			<label for="MSGLIFT_POS_Y">Height [meters]:</label>
			<input id="MSGLIFT_POS_Y" name="setupScript,liftMessageSizeY" type="number" value="5" />
			<label for="MSGLIFT_POS_Z">Font Size:</label>
			<input id="MSGLIFT_POS_Z" name="setupScript,liftMessageFontSize" type="number" value="5" />
   			</inputs>  
          

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGLIFT_TYPE_B" name="setupScript,liftMessageType" type="radio" value="cartoon"   >
  		    <label for="MSGLIFT_TYPE_B">Cartoon</label> 
		    <input id="MSGLIFT_TYPE_B2" name="setupScript,liftMessageType" type="radio" value="rectangle" checked >
		    <label for="MSGLIFT_TYPE_B2">Rectangle</label>                 
		    <input id="MSGLIFT_TYPE_B0" name="setupScript,liftMessageType" type="radio" value="none" >
  		    <label for="MSGLIFT_TYPE_B0">None</label>                 
   	        <label for="MSGLIFT_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGLIFT_ROT_B" name="setupScript,liftMessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGLIFT_COLOR_B_R">R:</label>
			<input id="MSGLIFT_COLOR_B_R" name="setupScript,liftMessageBackgroundColorR" type="number" value="0.2" />
   			<label for="MSGLIFT_COLOR_B_G">G:</label>
			<input id="MSGLIFT_COLOR_B_G" name="setupScript,liftMessageBackgroundColorG" type="number" value="0.65" />
   			<label for="MSGLIFT_COLOR_B_B">B:</label>
			<input id="MSGLIFT_COLOR_B_B" name="setupScript,liftMessageBackgroundColorB" type="number" value="0.3" />
   			<label for="MSGLIFT_COLOR_B_A">Alpha:</label>
			<input id="MSGLIFT_COLOR_B_A" name="setupScript,liftMessageBackgroundColorAlpha" type="number" value="0.3" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGLIFT_COLOR_T_R">R:</label>
			<input id="MSGLIFT_COLOR_T_R" name="setupScript,liftMessageTextColorR" type="number" value="1" />
   			<label for="MSGLIFT_COLOR_T_G">G:</label>
			<input id="MSGLIFT_COLOR_T_G" name="setupScript,liftMessageTextColorG" type="number" value="0" />
   			<label for="MSGLIFT_COLOR_T_B">B:</label>
			<input id="MSGLIFT_COLOR_T_B" name="setupScript,liftMessageTextColorB" type="number" value="0" />
   			<label for="MSGLIFT_COLOR_T_A">Alpha:</label>
			<input id="MSGLIFT_COLOR_T_A" name="setupScript,liftMessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGLIFT_TOFF_X">X [meters]:</label>
			<input id="MSGLIFT_TOFF_X" name="setupScript,liftMessageTextOffsetX" type="number" value="0" />
			<label for="MSGLIFT_TOFF_Y">Y [meters]:</label>
			<input id="MSGLIFT_TOFF_Y" name="setupScript,liftMessageTextOffsetY" type="number" value="0" />
			<label for="MSGLIFT_TOFF_R">Rotation [deg]:</label>
			<input id="MSGLIFT_TOFF_R" name="setupScript,liftMessageTextRotationZ" type="number" value="0" />
   			</inputs>  
   			

<name> </name> <inputs> </inputs>  
    
    </div>
  </div>












	







<!-- Intertrial Msg -->
	  <inputdivider> Intertrial time delay message </inputdivider>
	  <div class="form-control">  
          
<name>Display instruction message?</name> 


   			<inputs>
			<input id="WIMH" name="messagesScript,stage1_displayMessageFlag" type="hidden" value="FALSE">
			<input id="WIM" name="messagesScript,stage1_displayMessageFlag" type="checkbox" value="TRUE" >	
			<label for="WIM">Yes</label>	 
 


	</inputs>    
          
 			<name>Message shown:</name>
   			<inputs>      
			<label for="BASE_MSG"></label>
<textarea id="BASE_MSG" name="messagesScript,baseText" rows="3" cols="50">
Wait
</textarea>
   			</inputs>  




<!-- Expandable Base Message Position -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableBaseMessagePositions')">
        Expand message appearance
        </button>
  
        <div class="expwindow" id="expandableBaseMessagePositions"> 

 
           <name>Intertrial wait message appearance: </name> <inputs></inputs>	   
           
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGBASE_POS_X">X:</label>
			<input id="MSGBASE_POS_X" name="setupScript,baseMessagePositionX" type="number" value="0" />
			<label for="MSGBASE_POS_Y">Y:</label>
			<input id="MSGBASE_POS_Y" name="setupScript,baseMessagePositionY" type="number" value="0.5" />
			<label for="MSGBASE_POS_Z">Z:</label>
			<input id="MSGBASE_POS_Z" name="setupScript,baseMessagePositionZ" type="number" value="3.5" />
   			</inputs>  	   
           
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGBASE_POS_X">Width [meters]:</label>
			<input id="MSGBASE_POS_X" name="setupScript,baseMessageSizeX" type="number" value="10" />
			<label for="MSGBASE_POS_Y">Height [meters]:</label>
			<input id="MSGBASE_POS_Y" name="setupScript,baseMessageSizeY" type="number" value="5" />
			<label for="MSGBASE_POS_Z">Font Size:</label>
			<input id="MSGBASE_POS_Z" name="setupScript,baseMessageFontSize" type="number" value="5" />
   			</inputs>  
          

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background shape </name>
   			<inputs>                
		    <input id="MSGBASE_TYPE_B" name="setupScript,baseMessageType" type="radio" value="cartoon"   >
  		    <label for="MSGBASE_TYPE_B">Cartoon</label> 
		    <input id="MSGBASE_TYPE_B2" name="setupScript,baseMessageType" type="radio" value="rectangle" checked >
		    <label for="MSGBASE_TYPE_B2">Rectangle</label>                 
		    <input id="MSGBASE_TYPE_B0" name="setupScript,baseMessageType" type="radio" value="none" >
  		    <label for="MSGBASE_TYPE_B0">None</label>                 
   	        <label for="MSGBASE_ROT_B">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotation [deg]:</label>
			<input id="MSGBASE_ROT_B" name="setupScript,baseMessageBackgroundRotationZ" type="number" value="0" />   			
   			</inputs>  

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Background color </name>
   			<inputs>
   			<label for="MSGBASE_COLOR_B_R">R:</label>
			<input id="MSGBASE_COLOR_B_R" name="setupScript,baseMessageBackgroundColorR" type="number" value="0.2" />
   			<label for="MSGBASE_COLOR_B_G">G:</label>
			<input id="MSGBASE_COLOR_B_G" name="setupScript,baseMessageBackgroundColorG" type="number" value="0.65" />
   			<label for="MSGBASE_COLOR_B_B">B:</label>
			<input id="MSGBASE_COLOR_B_B" name="setupScript,baseMessageBackgroundColorB" type="number" value="0.3" />
   			<label for="MSGBASE_COLOR_B_A">Alpha:</label>
			<input id="MSGBASE_COLOR_B_A" name="setupScript,baseMessageBackgroundColorAlpha" type="number" value="0.3" />
   			</inputs>   

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text color </name>
   			<inputs>
   			<label for="MSGBASE_COLOR_T_R">R:</label>
			<input id="MSGBASE_COLOR_T_R" name="setupScript,baseMessageTextColorR" type="number" value="1" />
   			<label for="MSGBASE_COLOR_T_G">G:</label>
			<input id="MSGBASE_COLOR_T_G" name="setupScript,baseMessageTextColorG" type="number" value="0" />
   			<label for="MSGBASE_COLOR_T_B">B:</label>
			<input id="MSGBASE_COLOR_T_B" name="setupScript,baseMessageTextColorB" type="number" value="0" />
   			<label for="MSGBASE_COLOR_T_A">Alpha:</label>
			<input id="MSGBASE_COLOR_T_A" name="setupScript,baseMessageTextColorAlpha" type="number" value="1" />
   			</inputs>    

            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Text offset </name>
   			<inputs>
   			<label for="MSGBASE_TOFF_X">X [meters]:</label>
			<input id="MSGBASE_TOFF_X" name="setupScript,baseMessageTextOffsetX" type="number" value="0" />
			<label for="MSGBASE_TOFF_Y">Y [meters]:</label>
			<input id="MSGBASE_TOFF_Y" name="setupScript,baseMessageTextOffsetY" type="number" value="0" />
			<label for="MSGBASE_TOFF_R">Rotation [deg]:</label>
			<input id="MSGBASE_TOFF_R" name="setupScript,baseMessageTextRotationZ" type="number" value="0" />
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

