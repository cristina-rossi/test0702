document.querySelector('#INPUT_TASK').insertAdjacentHTML('beforeend',`                                 

    
		<form>		
    		
  		<!-- HOME -->
    		  <inputdivider> Plate home position</inputdivider>
		  <inputcolumn>
     		    <!-- plate position (wrt headset eye level) -->      
		    <div class="form-control">  
<name>   </name>	 
<inputs>  </inputs>      
<name>   </name>	 
<inputs>  </inputs> 
<name>   </name>	 
<inputs>  </inputs>  
			<name>Position of plate at trial start [meters]</name>
   			<inputs>
   			<label for="PLATE_X">X:</label>
			<input id="PLATE_X" name="setupScript,platePositionX" type="number" value="0" />
			<label for="PLATE_Y">Y:</label>
			<input id="PLATE_Y" name="setupScript,platePositionY" type="number" value="-0.3" />
			<label for="PLATE_Z">Z:</label>
			<input id="PLATE_Z" name="setupScript,platePositionZ" type="number" value="0.5" />
   			</inputs>
            <note>(relative to headset center eye)</note> 

</div></inputcolumn>

	
		   <figurecolumn>
			<img src="website/inputpage/figures/plateHomePosition.png"  style="width:100%">
		   </figurecolumn>
 

    		  <inputdivider> Hand home position</inputdivider>
		  <inputcolumn> 
		    <div class="form-control">        
            <!-- Hand Home -->
<name> </name>	 
<inputs></inputs> 
			<name>Return to home position to start trial:</name> 


   			<inputs>
			<input id="HOME_L_H" name="setupScript,lefthandStartingInBoundFlag" type="hidden" value="FALSE">
			<input id="HOME_L" name="setupScript,lefthandStartingInBoundFlag" type="checkbox" value="TRUE" checked>	
			<label for="HOME_L">Left hand</label>	


 
			<input id="HOME_R_H" name="setupScript,righthandStartingInBoundFlag" type="hidden" value="FALSE">
			<input id="HOME_R" name="setupScript,righthandStartingInBoundFlag" type="checkbox" value="TRUE" checked>	
			<label for="HOME_R">Right hand</label>	  
 


	</inputs>      
 		
   			
<name> </name>	 
<inputs></inputs>  
            <name> &nbsp;&nbsp; - - > Left hand home position [meters] </name>		

<inputs>
   			<label for="LHOME_POS_X">X:</label>
			<input id="LHOME_POS_X" name="setupScript,lefthandStartingInBoundPositionX" type="number" value="-0.13" />
			<label for="LHOME_POS_Y">Y:</label>
			<input id="LHOME_POS_Y" name="setupScript,lefthandStartingInBoundPositionY" type="number" value="-0.1" />
			<label for="LHOME_POS_Z">Z:</label>
			<input id="LHOME_POS_Z" name="setupScript,lefthandStartingInBoundPositionZ" type="number" value="0" />
   			</inputs>  
        	
   			
<name> </name>	 
<inputs></inputs> 
            <name> &nbsp;&nbsp; - - > Right hand home position [meters] </name>		
   			 
  
   			<inputs>
   			<label for="RHOME_POS_X">X:</label>
			<input id="RHOME_POS_X" name="setupScript,righthandStartingInBoundPositionX" type="number" value="0.13" />
			<label for="RHOME_POS_Y">Y:</label>
			<input id="RHOME_POS_Y" name="setupScript,righthandStartingInBoundPositionY" type="number" value="-0.1" />
			<label for="RHOME_POS_Z">Z:</label>
			<input id="RHOME_POS_Z" name="setupScript,righthandStartingInBoundPositionZ" type="number" value="0" />
   			</inputs>  


<name> </name>	 
<inputs></inputs> 
            <name> &nbsp;&nbsp; - - > Home sphere radius [meters] </name>	
 
   			<inputs>
   			<label for="LHOME_R">Left home radius:</label>
			<input id="LHOME_R" name="setupScript,lefthandStartingInBoundSizeRadius" type="number" value="0.1" />
    
   			<label for="RHOME_R">Right home radius:</label>
			<input id="RHOME_R" name="setupScript,righthandStartingInBoundSizeRadius" type="number" value="0.1" />
   			</inputs>  
 
<name> </name>	 <inputs></inputs>  

  <name> &nbsp;&nbsp; - - > Required time in home [seconds]   </name>		
   			
        	  	    
			<inputs>
			<input id="THOME" name="trialScript,stage2_handPositionTime" type="number" value="0.1" /> 
   			<label for="THOME"> </label>
</inputs>

  <name> </name>	 <inputs></inputs>  

  <name>Safeguard against plate penetration: </name>		
   			
       
   			<inputs>	    	  	    
			<input id="SHOME_L_H" name="setupScript,lefthandStartingOutBoundFlag" type="hidden" value="FALSE">
			<input id="SHOME_L" name="setupScript,lefthandStartingOutBoundFlag" type="checkbox" value="TRUE" checked>	
			<label for="SHOME_L">Left hand bones</label>	
			<input id="SHOMEE_R_H" name="setupScript,righthandStartingOutBoundFlag" type="hidden" value="FALSE">
			<input id="SHOME_R" name="setupScript,righthandStartingOutBoundFlag" type="checkbox" value="TRUE" checked>	
			<label for="SHOME_R">Right hand bones</label>	  
</inputs>



 





  <name> </name>	 <inputs></inputs>  
   		 
   		  	<note> (home position is relative to plate starting position)</note> 
   		  	<note> (plate appears & trial starts when selected hands in home position for required time)</note>  
   		  	<note> </note>  

		    </div>
		   </inputcolumn> 

		   <figurecolumn>
			<img src="website/inputpage/figures/handHomePosition.png"  style="width:100%">
		   </figurecolumn>


 

<!-- Expandable Home Shape -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableHomeShape')">
        Expand home position shape
        </button>
 
        <inputcolumn>
        <div class="expwindow" id="expandableHomeShape"> 
<note> </note> 

            <name>Left hand home position shape</name>

 
   	 

			<inputs>
			<input id="LHOME_SHAPE_SPHERE" name="setupScript,lefthandStartingInBoundShape" type="radio" value="Sphere"  checked >
			<label for="LHOME_SHAPE_SPHERE">Sphere</label> 
			<input id="LHOME_SHAPE_CUBE" name="setupScript,lefthandStartingInBoundShape" type="radio" value="Cube" >
			<label for="LHOME_SHAPE_CUBE">Cube</label>  
   			</inputs>




            <note>If "cube" selected, specify size below: </note> 
			<name>Left hand home cube size[meters]</name>
   			<inputs> 
			<label for="LHOME_SIZEX">X:</label>
			<input id="LHOME_SIZEX" name="setupScript,lefthandStartingInBoundSizeX" type="number" value="0.1" />
			<label for="LHOME_SIZEY">Y:</label>
			<input id="LHOME_SIZEY" name="setupScript,lefthandStartingInBoundSizeY" type="number" value="0.1" />
			<label for="LHOME_SIZEZ">Z:</label>
			<input id="LHOME_SIZEZ" name="setupScript,lefthandStartingInBoundSizeZ" type="number" value="0.1" />   
   			</inputs>
 
            <name>Right hand home position shape</name>
			<inputs>
			<input id="RHOME_SHAPE_SPHERE" name="setupScript,righthandStartingInBoundShape" type="radio" value="Sphere"  checked>
			<label for="RHOME_SHAPE_SPHERE">Sphere</label> 
			<input id="RHOME_SHAPE_CUBE" name="setupScript,righthandStartingInBoundShape" type="radio" value="Cube">
			<label for="RHOME_SHAPE_CUBE">Cube</label>  
   			</inputs>

            <note>If "cube" selected, specify size below: </note> 
			<name>Right hand home cube size[meters]</name>
   			<inputs> 
			<label for="RHOME_SIZEX">X:</label>
			<input id="RHOME_SIZEX" name="setupScript,righthandStartingInBoundSizeX" type="number" value="0.1" />
			<label for="RHOME_SIZEY">Y:</label>
			<input id="RHOME_SIZEY" name="setupScript,righthandStartingInBoundSizeY" type="number" value="0.1" />
			<label for="RHOME_SIZEZ">Z:</label>
			<input id="RHOME_SIZEZ" name="setupScript,righthandStartingInBoundSizeZ" type="number" value="0.1" />   
   			</inputs>
	 

      </div> 
     </inputcolumn> <!-- expand/collapse the window -->


  <!-- Expandable  expandableHomeSafeguard -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableHomeSafeguard')">
        Expand bone-level safeguard boundary 
        </button>
 
        <inputcolumn>
        <div class="expwindow" id="expandableHomeSafeguard">	




<note> </note> 
   		  	<note>Plate appears & trial starts when all bones in selected hands meet the conditions below:</note>  
   		  	<note> </note>  

            <name>All left hand bones must be: </name>		
   			<inputs>
			<input id="LOFFLIMITS_POS_X" name="setupScript,lefthandStartingOutBoundPositionX" type="number" value="0" />
   			<label for="LOFFLIMITS_POS_X">meters</label>

			<input id="LOFFLIMITS_XLEFT" name="setupScript,lefthandStartingOutBoundDirectionX" type="radio" value="left" >
			<label for="LOFFLIMITS_XLEFT">left of</label> 
			<input id="LOFFLIMITS_XRIGHT" name="setupScript,lefthandStartingOutBoundDirectionX" type="radio" value="right">
			<label for="LOFFLIMITS_XRIGHT">right of</label>  
			<input id="LOFFLIMITS_XNONE" name="setupScript,lefthandStartingOutBoundDirectionX" type="radio" value="none"  checked>
			<label for="LOFFLIMITS_XNONE">none</label> 
   			</inputs>


            <name> </name>	
   			<inputs>
			<input id="LOFFLIMITS_POS_Y" name="setupScript,lefthandStartingOutBoundPositionY" type="number" value="0.005" />
   			<label for="LOFFLIMITS_POS_Y">meters</label>

			<input id="LOFFLIMITS_YLEFT" name="setupScript,lefthandStartingOutBoundDirectionY" type="radio" value="above" >
			<label for="LOFFLIMITS_YLEFT">above</label> 
			<input id="LOFFLIMITS_YRIGHT" name="setupScript,lefthandStartingOutBoundDirectionY" type="radio" value="below" checked>
			<label for="LOFFLIMITS_YRIGHT">below</label>  
			<input id="LOFFLIMITS_YNONE" name="setupScript,lefthandStartingOutBoundDirectionY" type="radio" value="none"  >
			<label for="LOFFLIMITS_YNONE">none</label> 
<label>  &nbsp;  &nbsp;  &nbsp;   <i> (wrt plate start pos.)</i></label>
   			</inputs>

            <name> </name>	

   			<inputs>
			<input id="LOFFLIMITS_POS_Z" name="setupScript,lefthandStartingOutBoundPositionZ" type="number" value="0" />
   			<label for="LOFFLIMITS_POS_Z">meters</label>

			<input id="LOFFLIMITS_ZLEFT" name="setupScript,lefthandStartingOutBoundDirectionZ" type="radio" value="infront" >
			<label for="LOFFLIMITS_ZLEFT">in front of</label> 
			<input id="LOFFLIMITS_ZRIGHT" name="setupScript,lefthandStartingOutBoundDirectionZ" type="radio" value="behind">
			<label for="LOFFLIMITS_ZRIGHT">behind</label>  
			<input id="LOFFLIMITS_ZNONE" name="setupScript,lefthandStartingOutBoundDirectionZ" type="radio" value="none"  checked>
			<label for="LOFFLIMITS_ZNONE">none</label> 
   			</inputs>
 
            <name> </name>	
   			<inputs> 
			<input id="LOFFLIMITS_CH" name="setupScript,lefthandStartingOutBoundMeetAllConditions" type="hidden" value="FALSE">
			<input id="LOFFLIMITS_C" name="setupScript,lefthandStartingOutBoundMeetAllConditions" type="checkbox" value="TRUE" >	
			<label for="LOFFLIMITS_C">ALL conditions must be met (versus ANY)</label> 
   			</inputs>



	<note> </note>  

            <name>All right hand bones must be: </name>		
   			<inputs>
			<input id="ROFFLIMITS_POS_X" name="setupScript,righthandStartingOutBoundPositionX" type="number" value="0" />
   			<label for="ROFFLIMITS_POS_X">meters</label>

			<input id="ROFFLIMITS_XLEFT" name="setupScript,righthandStartingOutBoundDirectionX" type="radio" value="left" >
			<label for="ROFFLIMITS_XLEFT">left of</label> 
			<input id="ROFFLIMITS_XRIGHT" name="setupScript,righthandStartingOutBoundDirectionX" type="radio" value="right">
			<label for="ROFFLIMITS_XRIGHT">right of</label>  
			<input id="ROFFLIMITS_XNONE" name="setupScript,righthandStartingOutBoundDirectionX" type="radio" value="none"  checked>
			<label for="ROFFLIMITS_XNONE">none</label> 	</inputs>


            <name> </name>	
   			<inputs>
			<input id="ROFFLIMITS_POS_Y" name="setupScript,righthandStartingOutBoundPositionY" type="number" value="0.005" />
   			<label for="ROFFLIMITS_POS_Y">meters</label>

			<input id="ROFFLIMITS_YLEFT" name="setupScript,righthandStartingOutBoundDirectionY" type="radio" value="above" >
			<label for="ROFFLIMITS_YLEFT">above</label> 
			<input id="ROFFLIMITS_YRIGHT" name="setupScript,righthandStartingOutBoundDirectionY" type="radio" value="below" checked>
			<label for="ROFFLIMITS_YRIGHT">below</label>  
			<input id="ROFFLIMITS_YNONE" name="setupScript,righthandStartingOutBoundDirectionY" type="radio" value="none"  >
			<label for="ROFFLIMITS_YNONE">none</label> 
<label>  &nbsp;  &nbsp;  &nbsp;   <i> (wrt plate start pos.)</i></label>
   			</inputs>

            <name> </name>	

   			<inputs>
			<input id="ROFFLIMITS_POS_Z" name="setupScript,righthandStartingOutBoundPositionZ" type="number" value="0" />
   			<label for="ROFFLIMITS_POS_Z">meters</label>

			<input id="ROFFLIMITS_ZLEFT" name="setupScript,righthandStartingOutBoundDirectionZ" type="radio" value="infront" >
			<label for="ROFFLIMITS_ZLEFT">in front of</label> 
			<input id="ROFFLIMITS_ZRIGHT" name="setupScript,righthandStartingOutBoundDirectionZ" type="radio" value="behind">
			<label for="ROFFLIMITS_ZRIGHT">behind</label>  
			<input id="ROFFLIMITS_ZNONE" name="setupScript,righthandStartingOutBoundDirectionZ" type="radio" value="none"  checked>
			<label for="ROFFLIMITS_ZNONE">none</label>   
   			</inputs>
 
            <name> </name>	
   			<inputs> 
			<input id="ROFFLIMITS_CH" name="setupScript,righthandStartingOutBoundMeetAllConditions" type="hidden" value="FALSE">
			<input id="ROFFLIMITS_C" name="setupScript,righthandStartingOutBoundMeetAllConditions" type="checkbox" value="TRUE" >	
			<label for="ROFFLIMITS_C">ALL conditions must be met (versus ANY)</label> 
   			</inputs>




            <name> </name>




 
       

      </div> 
     </inputcolumn> <!-- expand/collapse the window -->






        <!-- TARGET-->
    		  <inputdivider> Target </inputdivider>	
		  <inputcolumn>
		    <div class="form-control">      
            <note>For a success, plate must reach "target position":</note> 
      
			<name>Target position [meters]</name>
   			<inputs>
			<label for="TARGET_X">X:</label>
			<input id="TARGET_X" name="setupScript,targetLocalPositionX" type="number" value="0" />
			<label for="TARGET_Y">Y:</label>
			<input id="TARGET_Y" name="setupScript,targetLocalPositionY" type="number" value="0.3" />
			<label for="TARGET_Z">Z:</label>
			<input id="TARGET_Z" name="setupScript,targetLocalPositionZ" type="number" value="0" />
   			</inputs>
            <note>(relative to plate starting position)</note> 
		     
      
     		    <!-- target collider size  -->		
   		    <note></note>     
   		    <note>Specifically, the distance between plate center and target position must be less than "target size":</note> 
			<name>Target size [meters]</name>
   			<inputs> 
			<label for="TARGETSIZE_X">X:</label>
			<input id="TARGETSIZE_X" name="setupScript,targetSizeX" type="number" value="0.1" />
			<label for="TARGETSIZE_Y">Y:</label>
			<input id="TARGETSIZE_Y" name="setupScript,targetSizeY" type="number" value="0.1" />
			<label for="TARGETSIZE_Z">Z:</label>
			<input id="TARGETSIZE_Z" name="setupScript,targetSizeZ" type="number" value="0.1" />   
   			</inputs>
		    
      
     		    <!-- max plate tilt for success -->       	
   		    <note></note>     
   		    <note>The plate tilt/rotation must also be less than:</note> 
			<name>Max plate tilt at target [deg]</name>
   			<inputs> 
			<label for="MAXTILT_X">X (front-back):</label>
			<input id="MAXTILT_X" name="targetScript,maxTiltForSuccessX" type="number" value="180" />
			<label for="MAXTILT_Y">Y (flat rotation):</label>
			<input id="MAXTILT_Y" name="targetScript,maxTiltForSuccessY" type="number" value="180" />
			<label for="MAXTILT_Z">Z (left-right):</label>
			<input id="MAXTILT_Z" name="targetScript,maxTiltForSuccessZ" type="number" value="30" />
   			</inputs> 
      	
   		    <note></note>     
   		    <note>For a success, these conditions must remain true for:</note> 	
			<name>Time in target for success [seconds]</name>
			<inputs>
			<label for="TIME_IN_TARGET"></label>
			<input id="TIME_IN_TARGET" name="targetScript,timeInTargetForSuccess" type="number" value="0.1" />
			</inputs>

	
   		    <note></note>     
            <note>Trial fails after contact with target if the above conditions are not met</note> 
      		<note>    (<-- plate too tilted / exits target region before "time in target for success") </note> 
      		 	
   		    <note></note>     	
   		    <note></note>     
            <note>Additional failure criteria can be specified below: </note> 
      		

			<name>Workspace radius [meters]</name>
			<inputs>
			<label for="WORKSPACE_RADIUS"></label>
			<input id="WORKSPACE_RADIUS" name="setupScript,taskWorkspaceBoundSizeRadius" type="number" value="0.3" />
			</inputs>
            <note>(relative to plate starting position; trial fails if plate exits the workspace at any point)</note> 
		    </div>

 
        </inputcolumn>   
  
		   <figurecolumn>
			<img src="website/inputpage/figures/targetPositionCriteria.png"  style="width:100%">
		   </figurecolumn>
      <!-- Expandable Workspace -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableWorkspace')">
        &nbsp;Expand failure criteria -> workspace
        </button>
 
        <inputcolumn>
        <div class="expwindow" id="expandableWorkspace">	 
            <name>Workspace shape</name>
			<inputs>
			<input id="WORKSPACE_SHAPE_SPHERE" name="setupScript,taskWorkspaceBoundShape" type="radio" value="Sphere"  checked>
			<label for="WORKSPACE_SHAPE_SPHERE">Sphere</label> 
			<input id="WORKSPACE_SHAPE_CUBE" name="setupScript,taskWorkspaceBoundShape" type="radio" value="Cube">
			<label for="WORKSPACE_SHAPE_CUBE">Cube</label>  
   			</inputs>

            <note>If "cube" selected, specify size below: </note> 
			<name>Workspace cube size[meters]</name>
   			<inputs> 
			<label for="WORKSPACE_SIZEX">X:</label>
			<input id="WORKSPACE_SIZEX" name="setupScript,taskWorkspaceBoundSizeX" type="number" value="0.3" />
			<label for="WORKSPACE_SIZEY">Y:</label>
			<input id="WORKSPACE_SIZEY" name="setupScript,taskWorkspaceBoundSizeY" type="number" value="0.3" />
			<label for="WORKSPACE_SIZEZ">Z:</label>
			<input id="WORKSPACE_SIZEZ" name="setupScript,taskWorkspaceBoundSizeZ" type="number" value="0.3" />   
   			</inputs>

      </div>  <!-- expand/collapse the window -->
     </inputcolumn>

 <!-- Expandable gamearea -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableGamearea')">
        &nbsp;Expand failure criteria -> falls
        </button>
 
        <inputcolumn>
        <div class="expwindow" id="expandableGamearea">	 
			<name>Game boundary position [meters]</name>
   			<inputs> 
			<label for="GAMEAREA_L">Left:</label>
			<input id="GAMEAREA_L" name="setupScript,gameBoundLocalPositionLeft" type="number" value="0.5" />
			<label for="GAMEAREA_R">Right:</label>
			<input id="GAMEAREA_R" name="setupScript,gameBoundLocalPositionRight" type="number" value="0.5" />
   			</inputs>

			<name> </name>
   			<inputs> 
			<label for="GAMEAREA_F">Front:</label>
			<input id="GAMEAREA_F" name="setupScript,gameBoundLocalPositionFront" type="number" value="0.5" />
			<label for="GAMEAREA_B">Back:</label>
			<input id="GAMEAREA_B" name="setupScript,gameBoundLocalPositionBack" type="number" value="0.5" />
   			</inputs>

			<name> </name>
   			<inputs> 
			<label for="GAMEAREA_U">Top:</label>
			<input id="GAMEAREA_U" name="setupScript,gameBoundLocalPositionTop" type="number" value="0.8" />
			<label for="GAMEAREA_D">Bottom:</label>
			<input id="GAMEAREA_D" name="setupScript,gameBoundLocalPositionBottom" type="number" value="1" />

			<input id="GAMEAREA_GH" name="setupScript,gameBoundBottomIsGround" type="hidden" value="FALSE">
			<input id="GAMEAREA_G" name="setupScript,gameBoundBottomIsGround" type="checkbox" value="TRUE" checked>	
			<label for="GAMEAREA_G">Match bottom to ground </label>	 
   			</inputs>
        <note>Relative to plate starting position </note>

      </div>  <!-- expand/collapse the window -->
     </inputcolumn>


 <!-- Expandable time limits -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableTimelimits')">
        &nbsp;Expand failure criteria -> time limits
        </button>
 
        <inputcolumn>
        <div class="expwindow" id="expandableTimelimits">	 
			<name>Time limit whole trial [seconds]</name>
   			<inputs> 
			<label for="MAXTIME_T"></label>
			<input id="MAXTIME_T" name="trialScript,trial_maxTime" type="number" value="60" />
   			</inputs>

			<name>Time limit by stage [seconds]</name>
   			<inputs> 
			<label for="MAXTIME_2">Return home: </label>
			<input id="MAXTIME_2" name="trialScript,stage2_maxTime" type="number" value="60" />
			<label for="MAXTIME_3">Contact plate: </label>
			<input id="MAXTIME_3" name="trialScript,stage3_maxTime" type="number" value="60" />
			<label for="MAXTIME_4">Reach target: </label>
			<input id="MAXTIME_4" name="trialScript,stage4_maxTime" type="number" value="60" />
   			</inputs>
        <note>Going over time limit will trigger a failed trial. </note>

      </div>  <!-- expand/collapse the window -->
     </inputcolumn>





 
	</form>

     
  
      

  `);

