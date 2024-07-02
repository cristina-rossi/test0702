document.querySelector('#INPUT_ADAPT').insertAdjacentHTML('beforeend', `                                 
            

    
		<form>

		<inputcolumn>
  
  	 
  		<!-- adaptation gain -->
    		  <inputdivider> Perturbation and paradigm </inputdivider>
		  <div class="form-control">           
			<name>Perturbation magnitude: gain at adaptation plateau [%]</name>
   			<inputs>    </inputs>      
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Left hand: </name>
   			<inputs>
   			<label for="L_GAIN_X">X:</label>
			<input id="L_GAIN_X" name="trialScript,leftHandGainX" type="number" value="0" />
			<label for="L_GAIN_Y">Y:</label>
			<input id="L_GAIN_Y" name="trialScript,leftHandGainY" type="number" value="0" />
			<label for="L_GAIN_Z">Z:</label>
			<input id="L_GAIN_Z" name="trialScript,leftHandGainZ" type="number" value="0" />
   			</inputs>  
            <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Right hand: </name>    
   			<inputs>
   			<label for="R_GAIN_X">X:</label>
			<input id="R_GAIN_X" name="trialScript,rightHandGainX" type="number" value="0" />
			<label for="R_GAIN_Y">Y:</label>
			<input id="R_GAIN_Y" name="trialScript,rightHandGainY" type="number" value="-50" />
			<label for="R_GAIN_Z">Z:</label>
			<input id="R_GAIN_Z" name="trialScript,rightHandGainZ" type="number" value="0" />
   			</inputs> 
   		        <note>-100% means hand will not move at all, 100% means not perturbed, 200% means it will move twice as fast</note>              
   		        <note>Hand gain will be applied wrt to "hand origin" position (no shift when hand is at 0,0,0).</note>           
   		        <note>"Hand origin" position is the position where hand makes contact with plate,</note>        
   		        <note>Computed as the median of selected (e.g., baseline) trials:</note>   
			
            <name></name><inputs></inputs>
                 
           

		  
			<name>Number of baseline trials:</name>
            <inputs>
			<input id="NT_BL" name="trialScript,paradigmBaseline" type="number" value="30" />
   			<label for="NT_BL"> (no perturbation) </label>
   			</inputs> 
			<name>Number of adaptation trials - gradual portion:</name>
            <inputs>
			<input id="NT_AG" name="trialScript,paradigmGradual" type="number" value="60" />
   			<label for="NT_AG"> (perturbation lineraly increases from zero to value specified above) </label>
   			</inputs> 
            <note> set "gradual portion = 0" for abrupt schedule paradigms. </note>
			<name>Number of adaptation trials - full perturbation portion:</name>
            <inputs>
			<input id="NT_AP" name="trialScript,paradigmFullPerturbation" type="number" value="60" />
   			<label for="NT_AP"> (perturbation equals value specified above) </label>
   			</inputs> 
			<name>Number of washout trials:</name>
            <inputs>
			<input id="NT_AP" name="trialScript,paradigmWashout" type="number" value="60" />
   			<label for="NT_AP"> (no perturbation) </label>
   			</inputs> 	

<name> </name>
	<inputs></inputs> 	    
   		
	<name>Manual override with trials.csv:</name>
   		
	<inputs>	    	  	    
			<input id="NTOH" name="trialScript,paradigmManual" type="hidden" value="FALSE">
			<input id="NTO" name="trialScript,paradigmManual" type="checkbox" value="TRUE">	
			<label for="NTO">Override</label>	 
   			</inputs> 
   		        <note>You can provide trial-by-trial gain perturbation values using a .csv file.</note>   
<note>Name of file: trials.csv</note>
<note> Fill as follows:</note>
   		        <note>First column = trialScript</note>
<note> Second column = leftHandGainY (or desired hand and direction)</note>   
<note> From 3rd to last column = value of gain on each trial"</note>   
<note> (i.e., 3rd column -> trial 1, 2nd column -> trial 2, etc...)</note>  
<note> Check the "override" box above to use the trials.csv file</note>    
		   
</div>
                                                                      
                                                                      

    		  <inputdivider> Origin for gain perturbation </inputdivider>
	  <div class="form-control">  


 <note>The gain perturbation scales the distance traveled by the hand(s) from their "origin" position.</note>
 <note>The "origin" position should approximately be the hand position at the start of the trial - when they first lift the plate.</note>
 <note></note>
 <note>By default, the origin position is computed as follows:</note>
 <note>&nbsp;&nbsp;&nbsp;1) For each trial, take median hand position when in home</note>
 <note>&nbsp;&nbsp;&nbsp;2) take the median of quantity (1) across trials 1 to 30, and use this origin position for all adaptation trials </note>
 <note></note>
 <note>Expand below to define a different computation for "origin".</note>
                                                                      
    
   <br>    

    <!-- Expandable Gain Origin -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'gainOriginOptions')">
        Expand gain origin computation options
        </button>

        <div class="expwindow" id="gainOriginOptions"> 
<br>  
<name style="vertical-align: top;">For each trial, compute "origin position" as:</name>
<inputs>
			
   			

         <br>     
<label>
<!-- &nbsp;&nbsp;&nbsp;	--> 
<!--   <span style='font-size:25px;'>&#9679;</span> --> 
<!--  <span style='font-size:15px;'>&#9677;</span> 	--> 
<span style='font-size:15px;'>&#8594;</span>
 &nbsp;Hand position when in home:</label><br> 
 <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
			<input id="GAINORIGIN_WITHIN_HD" name="trialScript,gainOriginComputationWithinTrial" type="radio" value="homePositionMedian" checked >
			<label for="GAINORIGIN_WITHIN_HD">Median</label> 
			<input id="GAINORIGIN_WITHIN_HM" name="trialScript,gainOriginComputationWithinTrial" type="radio" value="homePositionMean">
			<label for="GAINORIGIN_WITHIN_HM">Mean</label> 
			<input id="GAINORIGIN_WITHIN_HS" name="trialScript,gainOriginComputationWithinTrial" type="radio" value="homePositionStart">
			<label for="GAINORIGIN_WITHIN_HS">First</label> 
			<input id="GAINORIGIN_WITHIN_HE" name="trialScript,gainOriginComputationWithinTrial" type="radio" value="homePositionEnd">
			<label for="GAINORIGIN_WITHIN_HE">Last position</label> 



    <br>

  <br>

		<span style='font-size:15px;'>&#8594;</span> 	
<input style='margin-left: 0px;' id="GAINORIGIN_WITHIN_P" name="trialScript,gainOriginComputationWithinTrial" type="radio" value="plateContact"  >
<label for="GAINORIGIN_WITHIN_P">Hand position upon plate contact</label> 		

               <br>

  <br>

		<span style='font-size:15px;'>&#8594;</span> 	
<input style='margin-left: 0px;' id="GAINORIGIN_WITHIN_F" name="trialScript,gainOriginComputationWithinTrial" type="radio" value="fixedPosition">
<label for="GAINORIGIN_WITHIN_F">Predefined position: </label> 		

<!--  <label for="GAINORIGIN_WITHIN_F">Predefined position: </label> 	--> 
<br>
            <label for="GAINORIGIN_WITHIN_FLX">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Left [meters], &nbsp;  X:</label>
			<input id="GAINORIGIN_WITHIN_FLX" name="trialScript,leftGainOriginFixedPositionX" type="number" value="0" />
			<label for="GAINORIGIN_WITHIN_FLY">Y:</label>
			<input id="GAINORIGIN_WITHIN_FLY" name="trialScript,leftGainOriginFixedPositionY" type="number" value="0" />
			<label for="GAINORIGIN_WITHIN_FLZ">Z:</label>
			<input id="GAINORIGIN_WITHIN_FLZ" name="trialScript,leftGainOriginFixedPositionZ" type="number" value="0" />

<br> 
            <label for="GAINORIGIN_WITHIN_FRX">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Right [meters], X:</label>
			<input id="GAINORIGIN_WITHIN_FRX" name="trialScript,rightGainOriginFixedPositionX" type="number" value="0" />
			<label for="GAINORIGIN_WITHIN_FRY">Y:</label>
			<input id="GAINORIGIN_WITHIN_FRY" name="trialScript,rightGainOriginFixedPositionY" type="number" value="0" />
			<label for="GAINORIGIN_WITHIN_FRZ">Z:</label>
			<input id="GAINORIGIN_WITHIN_FRZ" name="trialScript,rightGainOriginFixedPositionZ" type="number" value="0" />

   			</inputs>

    
	




      

   <br>      <br>    <br>      <br>  
<name style="vertical-align: top;">Constant or updated across trials?</name>
<inputs>
			
   			

         <br>     
<label>
<span style='font-size:15px;'>&#8594;</span>
 &nbsp;Origin is constant across adaptation trials, and set to the </label><br> 
 <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
			<input id="GAINORIGIN_BETWEEN_HD" name="trialScript,gainOriginComputationBetweenTrials" type="radio" value="median" checked >
			<label for="GAINORIGIN_BETWEEN_HD">Median</label> 
			<input id="GAINORIGIN_BETWEEN_HM" name="trialScript,gainOriginComputationBetweenTrials" type="radio" value="mean">
			<label for="GAINORIGIN_BETWEEN_HM">Mean</label> 


         <br>     
 
   			
   			<label for="GAIN_TRIAL_I"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of the "origin positions" computed in trials </label>
			<input id="GAIN_TRIAL_I" name="trialScript,gainOriginComputationTrialRangeStart" type="number" value="1" />
   			<label for="GAIN_TRIAL_F">to</label>
			<input id="GAIN_TRIAL_F" name="trialScript,gainOriginComputationTrialRangeEnd" type="number" value="30" />
   	

    <br>

  <br>

		<span style='font-size:15px;'>&#8594;</span> 	
<input style='margin-left: 0px;' id="GAINORIGIN_BETWEEN_R" name="trialScript,gainOriginComputationBetweenTrials" type="radio" value="resetEachTrial"  >
<label for="GAINORIGIN_BETWEEN_R">Origin is re-computed for each adaptation trial,</label> 		

               <br>
 
   		 
   			<label for="GAINORIGIN_TRANSITION_T"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and updated smoothly over </label>
			<input id="GAINORIGIN_TRANSITION_T" name="trialScript,gainOriginTransitionTime" type="number" value="0.1" />   
            <label> [Seconds]</label>
   	 


  <br>



 
    
        </div>

                                                                                 
           
	<!-- END OF Expandable Gain Origin --> 



		  </div> 

        <inputdivider> Gain change smoothing  </inputdivider>
		  <div class="form-control">  
                                          
                                                                      
            <name>Parameters for smoothing gain changes:</name><inputs></inputs>
            <note>When there is a sharp change in gain from one trial to the next,</note>   
            <note>(e.g., baseline to abrupt adaptation, or adaptation to washout),</note>        
            <note>gain change smoothing can avoid sharp jumps in hand position.</note>       
            <note></note>
             <note>By default, gain change is smoothed as follows:</note>
             <note>&nbsp;&nbsp;&nbsp;1) The gain change begins when hands are in their home position</note>
             <note>&nbsp;&nbsp;&nbsp;&nbsp; (because is close to the origin, the perturbation effect is close to zero, reducing potential jumps in hand position) </note>
             <note>&nbsp;&nbsp;&nbsp;2) The gain is changed smoothly over 0.1 seconds. </note>
             <note></note>
             <note>Expand below to define different parameters for the change in gain.</note>
  
<!-- Expandable Gain Change -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'gainChangeOptions')">
        Expand gain change parameters
        </button>

        <div class="expwindow" id="gainChangeOptions"> 

            <name>Change gain smoothly over time [seconds]:</name>
   			<inputs> 
			<input id="GAIN_TRANSITION_T" name="trialScript,gainTransitionTime" type="number" value="0.1" />   			
   			</inputs>
       
            <name>Begin gain change when:</name> 
            <inputs>
            <input id="GAIN_TRANSITION_STARTPOS" name="setupScript,handGainResetBoundMatchHandStartingFlag" type="radio" value="TRUE"  checked >
            <label for="GAIN_TRANSITION_STARTPOS">Both hands are in home position</label> 
             <input id="GAIN_TRANSITION_STARTPOSF" name="setupScript,handGainResetBoundMatchHandStartingFlag" type="radio" value="FALSE" >
            <label for="GAIN_TRANSITION_STARTPOSF">Other - expand below to define</label>  
            </inputs>

            <note>(Typically, begin gain change when hands are close to origin.</note>    
            <note>This minimizes sharp jumps, because no position offset is present at origin)</note>   
    <note>("Home position" is that defined in "Task" tab, including the "bone-level safeguard boundary".</note>
            <note>If this is selected, gain change occurs at the same time as trial start & plate appearance.</note>
            <note>Alternatively, define below alternative hand position condition & bone-level safeguard boundary that will trigger gain change)</note>
           


 

 
		
 	






    		<!-- Expandable Hand Condition 1-->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'handPositionConditions')">
        Expand hand position conditions
        </button>
 
    
        <div class="expwindow" id="handPositionConditions"> 
            
  
	     
            <!-- Hand Home -->
<name> </name>	 
<inputs></inputs> 
			<name>Position condition must be met by:</name> 


   			<inputs>
			<input id="HOME_L_H" name="setupScript,lefthandGainResetInBoundFlag" type="hidden" value="FALSE">
			<input id="HOME_L" name="setupScript,lefthandGainResetInBoundFlag" type="checkbox" value="TRUE" checked>	
			<label for="HOME_L">Left hand</label>	


 
			<input id="HOME_R_H" name="setupScript,righthandGainResetInBoundFlag" type="hidden" value="FALSE">
			<input id="HOME_R" name="setupScript,righthandGainResetInBoundFlag" type="checkbox" value="TRUE" checked>	
			<label for="HOME_R">Right hand</label>	  
 


	</inputs> 
<name> </name>	 
<inputs></inputs>  

 <note>Gain change begins when selected hands are positioned within respective "gain change trigger region" defined below:</note>	
   			
<name> </name>	 
<inputs></inputs>  
            <name>Left hand gain change trigger region: </name>		<inputs></inputs>  

<name> </name>	 
<inputs></inputs>  	
            <name>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>	


<inputs>
   			<label for="LHOME_POS_X">X:</label>
			<input id="LHOME_POS_X" name="setupScript,lefthandGainResetInBoundPositionX" type="number" value="-0.13" />
			<label for="LHOME_POS_Y">Y:</label>
			<input id="LHOME_POS_Y" name="setupScript,lefthandGainResetInBoundPositionY" type="number" value="-0.1" />
			<label for="LHOME_POS_Z">Z:</label>
			<input id="LHOME_POS_Z" name="setupScript,lefthandGainResetInBoundPositionZ" type="number" value="0" />
   			</inputs>  
          
<name> </name>	 
<inputs></inputs>  
            <name style="vertical-align: top;">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Shape 
</name>	 
			
<inputs>
			<input id="LHOME_SHAPE_SPHERE" name="setupScript,lefthandGainResetInBoundShape" type="radio" value="Sphere"  checked >
			<label for="LHOME_SHAPE_SPHERE">Sphere</label> 
   			<label for="LHOME_R">&nbsp;&nbsp;&nbsp;&nbsp; Radius [meters]:</label>
			<input id="LHOME_R" name="setupScript,lefthandGainResetInBoundSizeRadius" type="number" value="0.1" />
 <br>
			<input id="LHOME_SHAPE_CUBE" name="setupScript,lefthandGainResetInBoundShape" type="radio" value="Cube" >
			<label for="LHOME_SHAPE_CUBE">Cube</label> 
            <label for="LHOME_SIZEX">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Size [meters], X:</label>
			<input id="LHOME_SIZEX" name="setupScript,lefthandGainResetInBoundSizeX" type="number" value="0.1" />
			<label for="LHOME_SIZEY">Y:</label>
			<input id="LHOME_SIZEY" name="setupScript,lefthandGainResetInBoundSizeY" type="number" value="0.1" />
			<label for="LHOME_SIZEZ">Z:</label>
			<input id="LHOME_SIZEZ" name="setupScript,lefthandGainResetInBoundSizeZ" type="number" value="0.1" />   
   			</inputs>



	
<name> </name>	 
<inputs></inputs>  
            <name>Right hand gain change trigger region: </name>		<inputs></inputs>  

<name> </name>	 
<inputs></inputs>  	
            <name>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>	


<inputs>
   			<label for="RHOME_POS_X">X:</label>
			<input id="RHOME_POS_X" name="setupScript,righthandGainResetInBoundPositionX" type="number" value="0.13" />
			<label for="RHOME_POS_Y">Y:</label>
			<input id="RHOME_POS_Y" name="setupScript,righthandGainResetInBoundPositionY" type="number" value="-0.1" />
			<label for="RHOME_POS_Z">Z:</label>
			<input id="RHOME_POS_Z" name="setupScript,righthandGainResetInBoundPositionZ" type="number" value="0" />
   			</inputs>  
          
<name> </name>	 
<inputs></inputs>  
            <name style="vertical-align: top;">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Shape 
</name>	 
			
<inputs>
			<input id="RHOME_SHAPE_SPHERE" name="setupScript,righthandGainResetInBoundShape" type="radio" value="Sphere"  checked >
			<label for="RHOME_SHAPE_SPHERE">Sphere</label> 
   			<label for="RHOME_R">&nbsp;&nbsp;&nbsp;&nbsp; Radius [meters]:</label>
			<input id="RHOME_R" name="setupScript,righthandGainResetInBoundSizeRadius" type="number" value="0.1" />
 <br>
			<input id="RHOME_SHAPE_CUBE" name="setupScript,righthandGainResetInBoundShape" type="radio" value="Cube" >
			<label for="RHOME_SHAPE_CUBE">Cube</label> 
            <label for="RHOME_SIZEX">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Size [meters], X:</label>
			<input id="RHOME_SIZEX" name="setupScript,righthandGainResetInBoundSizeX" type="number" value="0.1" />
			<label for="RHOME_SIZEY">Y:</label>
			<input id="RHOME_SIZEY" name="setupScript,righthandGainResetInBoundSizeY" type="number" value="0.1" />
			<label for="RHOME_SIZEZ">Z:</label>
			<input id="RHOME_SIZEZ" name="setupScript,righthandGainResetInBoundSizeZ" type="number" value="0.1" />   
   			</inputs>






  <name> </name>	 <inputs></inputs>  
   		 
   		  	<note> (Trigger region position is relative to plate starting position)</note> 
   		
   		  	<note> </note>  

		    </div>
		


    		<!-- END Expandable Hand Condition 1-->
 


    		<!--  Expandable Hand Condition 3-->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableHandCond3')">
        Expand bone-level safeguard boundary 
        </button>
 

        <div class="expwindow" id="expandableHandCond3">	



  <name>Safeguard condition must be met by: </name>		
   			
       
   			<inputs>	    	  	    
			<input id="SHOME_L_H" name="setupScript,lefthandGainResetOutBoundFlag" type="hidden" value="FALSE">
			<input id="SHOME_L" name="setupScript,lefthandGainResetOutBoundFlag" type="checkbox" value="TRUE" checked>	
			<label for="SHOME_L">Left hand bones</label>	
			<input id="SHOMEE_R_H" name="setupScript,righthandGainResetOutBoundFlag" type="hidden" value="FALSE">
			<input id="SHOME_R" name="setupScript,righthandGainResetOutBoundFlag" type="checkbox" value="TRUE" checked>	
			<label for="SHOME_R">Right hand bones</label>	  
</inputs>




<note> </note> 
   		  	<note>Gain change starts when all bones in selected hands meet the conditions below:</note>  
   		  	<note> </note>  

            <name>All left hand bones must be: </name>		
   			<inputs>
			<input id="LOFFLIMITS_POS_X" name="setupScript,lefthandGainResetOutBoundPositionX" type="number" value="0" />
   			<label for="LOFFLIMITS_POS_X">meters</label>

			<input id="LOFFLIMITS_XLEFT" name="setupScript,lefthandGainResetOutBoundDirectionX" type="radio" value="left" >
			<label for="LOFFLIMITS_XLEFT">left of</label> 
			<input id="LOFFLIMITS_XRIGHT" name="setupScript,lefthandGainResetOutBoundDirectionX" type="radio" value="right">
			<label for="LOFFLIMITS_XRIGHT">right of</label>  
			<input id="LOFFLIMITS_XNONE" name="setupScript,lefthandGainResetOutBoundDirectionX" type="radio" value="none"  checked>
			<label for="LOFFLIMITS_XNONE">none</label> 
   			</inputs>


            <name> </name>	
   			<inputs>
			<input id="LOFFLIMITS_POS_Y" name="setupScript,lefthandGainResetOutBoundPositionY" type="number" value="0.005" />
   			<label for="LOFFLIMITS_POS_Y">meters</label>

			<input id="LOFFLIMITS_YLEFT" name="setupScript,lefthandGainResetOutBoundDirectionY" type="radio" value="above" >
			<label for="LOFFLIMITS_YLEFT">above</label> 
			<input id="LOFFLIMITS_YRIGHT" name="setupScript,lefthandGainResetOutBoundDirectionY" type="radio" value="below" checked>
			<label for="LOFFLIMITS_YRIGHT">below</label>  
			<input id="LOFFLIMITS_YNONE" name="setupScript,lefthandGainResetOutBoundDirectionY" type="radio" value="none"  >
			<label for="LOFFLIMITS_YNONE">none</label> 
<label>  &nbsp;  &nbsp;  &nbsp;   <i> (wrt plate start pos.)</i></label>
   			</inputs>

            <name> </name>	

   			<inputs>
			<input id="LOFFLIMITS_POS_Z" name="setupScript,lefthandGainResetOutBoundPositionZ" type="number" value="0" />
   			<label for="LOFFLIMITS_POS_Z">meters</label>

			<input id="LOFFLIMITS_ZLEFT" name="setupScript,lefthandGainResetOutBoundDirectionZ" type="radio" value="infront" >
			<label for="LOFFLIMITS_ZLEFT">in front of</label> 
			<input id="LOFFLIMITS_ZRIGHT" name="setupScript,lefthandGainResetOutBoundDirectionZ" type="radio" value="behind">
			<label for="LOFFLIMITS_ZRIGHT">behind</label>  
			<input id="LOFFLIMITS_ZNONE" name="setupScript,lefthandGainResetOutBoundDirectionZ" type="radio" value="none"  checked>
			<label for="LOFFLIMITS_ZNONE">none</label> 
   			</inputs>
 
            <name> </name>	
   			<inputs> 
			<input id="LOFFLIMITS_CH" name="setupScript,lefthandGainResetOutBoundMeetAllConditions" type="hidden" value="FALSE">
			<input id="LOFFLIMITS_C" name="setupScript,lefthandGainResetOutBoundMeetAllConditions" type="checkbox" value="TRUE" >	
			<label for="LOFFLIMITS_C">ALL conditions must be met (versus ANY)</label> 
   			</inputs>



	<note> </note>  

            <name>All right hand bones must be: </name>		
   			<inputs>
			<input id="ROFFLIMITS_POS_X" name="setupScript,righthandGainResetOutBoundPositionX" type="number" value="0" />
   			<label for="ROFFLIMITS_POS_X">meters</label>

			<input id="ROFFLIMITS_XLEFT" name="setupScript,righthandGainResetOutBoundDirectionX" type="radio" value="left" >
			<label for="ROFFLIMITS_XLEFT">left of</label> 
			<input id="ROFFLIMITS_XRIGHT" name="setupScript,righthandGainResetOutBoundDirectionX" type="radio" value="right">
			<label for="ROFFLIMITS_XRIGHT">right of</label>  
			<input id="ROFFLIMITS_XNONE" name="setupScript,righthandGainResetOutBoundDirectionX" type="radio" value="none"  checked>
			<label for="ROFFLIMITS_XNONE">none</label> 	</inputs>


            <name> </name>	
   			<inputs>
			<input id="ROFFLIMITS_POS_Y" name="setupScript,righthandGainResetOutBoundPositionY" type="number" value="0.005" />
   			<label for="ROFFLIMITS_POS_Y">meters</label>

			<input id="ROFFLIMITS_YLEFT" name="setupScript,righthandGainResetOutBoundDirectionY" type="radio" value="above" >
			<label for="ROFFLIMITS_YLEFT">above</label> 
			<input id="ROFFLIMITS_YRIGHT" name="setupScript,righthandGainResetOutBoundDirectionY" type="radio" value="below" checked>
			<label for="ROFFLIMITS_YRIGHT">below</label>  
			<input id="ROFFLIMITS_YNONE" name="setupScript,righthandGainResetOutBoundDirectionY" type="radio" value="none"  >
			<label for="ROFFLIMITS_YNONE">none</label> 
<label>  &nbsp;  &nbsp;  &nbsp;   <i> (wrt plate start pos.)</i></label>
   			</inputs>

            <name> </name>	

   			<inputs>
			<input id="ROFFLIMITS_POS_Z" name="setupScript,righthandGainResetOutBoundPositionZ" type="number" value="0" />
   			<label for="ROFFLIMITS_POS_Z">meters</label>

			<input id="ROFFLIMITS_ZLEFT" name="setupScript,righthandGainResetOutBoundDirectionZ" type="radio" value="infront" >
			<label for="ROFFLIMITS_ZLEFT">in front of</label> 
			<input id="ROFFLIMITS_ZRIGHT" name="setupScript,righthandGainResetOutBoundDirectionZ" type="radio" value="behind">
			<label for="ROFFLIMITS_ZRIGHT">behind</label>  
			<input id="ROFFLIMITS_ZNONE" name="setupScript,righthandGainResetOutBoundDirectionZ" type="radio" value="none"  checked>
			<label for="ROFFLIMITS_ZNONE">none</label>   
   			</inputs>
 
            <name> </name>	
   			<inputs> 
			<input id="ROFFLIMITS_CH" name="setupScript,righthandGainResetOutBoundMeetAllConditions" type="hidden" value="FALSE">
			<input id="ROFFLIMITS_C" name="setupScript,righthandGainResetOutBoundMeetAllConditions" type="checkbox" value="TRUE" >	
			<label for="ROFFLIMITS_C">ALL conditions must be met (versus ANY)</label> 
   			</inputs>




            <name> </name>




</div>
</div>
<br><br>
</div>
                                                                      
                                                                      
                                                                      

	</inputcolumn> 
	<figurecolumn>
    		<img src="website/inputpage/figures/adapt.png"  style="width:100%">
	</figurecolumn>

 
	</form>

     
  
      

  `);



