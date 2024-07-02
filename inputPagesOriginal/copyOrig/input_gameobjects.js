document.querySelector('#INPUT_GAMEOBJECTS').insertAdjacentHTML('beforeend', `                                 

    
		<form>

		<inputcolumn>
  
  
  		<!-- Plate -->
    		  <inputdivider> Plate </inputdivider>
		  <div class="form-control">        
			<name>Plate size [meters]:</name>
   			<inputs>
   			<label for="PLATE_SCALE_X">X:</label>
			<input id="PLATE_SCALE_X" name="setupScript,plateSizeX" type="number" value="0.25" />
			<label for="PLATE_SCALE_Y">Y:</label>
			<input id="PLATE_SCALE_Y" name="setupScript,plateSizeY" type="number" value="0.02" />
			<label for="PLATE_SCALE_Z">Z:</label>
			<input id="PLATE_SCALE_Z" name="setupScript,plateSizeZ" type="number" value="0.25" />
   			</inputs>         
			<name>Plate physics:</name>
   			<inputs>
   			<label for="PLATE_MASS">Mass [kg]:</label>
			<input id="PLATE_MASS" name="setupScript,plateMass" type="number" value="1" />
			<label for="PLATE_DRAG">Y:</label>
			<input id="PLATE_DRAG" name="setupScript,plateDrag" type="number" value="0" />
			<label for="PLATE_ADRAG">Angular drag:</label>
			<input id="PLATE_ADRAG" name="setupScript,plateAngularDrag" type="number" value="0.05" />
   			</inputs>             
			<name>Plate-hands friction:</name>
   			<inputs>
   			<label for="PLATE_FRICTIOND">Dynamic coefficient:</label>
			<input id="PLATE_FRICTIOND" name="setupScript,frictionPlateHandsDynamic" type="number" value="0.6" />
			<label for="PLATE_FRICTIONS">Static coefficient:</label>
			<input id="PLATE_FRICTIONS" name="setupScript,frictionPlateHandsStatic" type="number" value="0.6" />
   			</inputs>              
		
		   </div>

     	<!-- Grape -->
    		  <inputdivider> Grape </inputdivider>
		  <div class="form-control">     
			<name>Grape local position wrt plate center [meters]:</name>
   			<inputs>
   			<label for="GRAPE_OFFSET_X">X:</label>
			<input id="GRAPE_OFFSET_X" name="setupScript,grapeLocalPositionX" type="number" value="0" />
			<label for="GRAPE_OFFSET_Y">Y:</label>
			<input id="GRAPE_OFFSET_Y" name="setupScript,grapeLocalPositionY" type="number" value="0.05" />
			<label for="GRAPE_OFFSET_Z">Z:</label>
			<input id="GRAPE_OFFSET_Z" name="setupScript,grapeLocalPositionZ" type="number" value="0" />
              	    
			<input id="GRAPE_OFFSETYAUTO_H" name="setupScript,grapeLocalPositionY_Auto" type="hidden" value="FALSE">
			<input id="GRAPE_OFFSETYAUTO" name="setupScript,grapeLocalPositionY_Auto" type="checkbox" value="TRUE" checked >
			<label for="GRAPE_OFFSETYAUTO">Set Y automatically (grape rests on plate)</label>	
   		     			
   			</inputs>         
			<name>Grape scale [relative]:</name>
   			<inputs>
   			<label for="GRAPE_SCALE_X">X:</label>
			<input id="GRAPE_SCALE_X" name="setupScript,grapeSizeX" type="number" value="0.1" />
			<label for="GRAPE_SCALE_Y">Y:</label>
			<input id="GRAPE_SCALE_Y" name="setupScript,grapeSizeY" type="number" value="0.08" />
			<label for="GRAPE_SCALE_Z">Z:</label>
			<input id="GRAPE_SCALE_Z" name="setupScript,grapeSizeZ" type="number" value="0.08" />
   			</inputs>         
			<name>Grape physics:</name>
   			<inputs>
   			<label for="GRAPE_MASS">Mass [kg]:</label>
			<input id="GRAPE_MASS" name="setupScript,grapeMass" type="number" value="1" />
			<label for="GRAPE_DRAG">Y:</label>
			<input id="GRAPE_DRAG" name="setupScript,grapeDrag" type="number" value="0" />
			<label for="GRAPE_ADRAG">Angular drag:</label>
			<input id="GRAPE_ADRAG" name="setupScript,grapeAngularDrag" type="number" value="0.05" />
   			</inputs>             
			<name>Grape-plate friction:</name>
   			<inputs>
   			<label for="GRAPE_FRICTIOND">Dynamic coefficient:</label>
			<input id="GRAPE_FRICTIOND" name="setupScript,frictionPlateGrapeDynamic" type="number" value="0.3" />
			<label for="GRAPE_FRICTIONS">Static coefficient:</label>
			<input id="GRAPE_FRICTIONS" name="setupScript,frictionPlateGrapeStatic" type="number" value="0.3" />
   			</inputs>          
			<name>Ignore grape-hand collision:</name>
   			<inputs>		    
			<input id="GRAPE_HANDS_IGNORE_H" name="grapeScript,grapeAlwaysIgnoreHands" type="hidden" value="FALSE">
			<input id="GRAPE_HANDS_IGNORE" name="grapeScript,grapeAlwaysIgnoreHands" type="checkbox" value="TRUE" >
			<label for="GRAPE_HANDS_IGNORE"></label>	
   			</inputs>    			
		   </div>


  		<!-- Plate stand -->
    		  <inputdivider> Plate stand </inputdivider>
		  <div class="form-control">        
			<name>Plate stand size [meters]:</name>
   			<inputs>
   			<label for="PLATESTAND_SCALE_X">X:</label>
			<input id="PLATESTAND_SCALE_X" name="setupScript,plateStandSizeX" type="number" value="0.1" />
			<label for="PLATESTAND_SCALE_Z">Z:</label>
			<input id="PLATESTAND_SCALE_Z" name="setupScript,plateStandSizeZ" type="number" value="0.1" />
   			</inputs>   
<note>Y Size is set automatically based on initial plate position</note>
 <name>Plate stand color </name>
   			<inputs>
   			<label for="PLATESTAND_COLOR_B_R">R:</label>
			<input id="PLATESTAND_COLOR_B_R" name="setupScript,plateStandColorR" type="number" value="0.4" />
   			<label for="PLATESTAND_COLOR_B_G">G:</label>
			<input id="PLATESTAND_COLOR_B_G" name="setupScript,plateStandColorG" type="number" value="0.2" />
   			<label for="PLATESTAND_COLOR_B_B">B:</label>
			<input id="PLATESTAND_COLOR_B_B" name="setupScript,plateStandColorB" type="number" value="0" />
   			<label for="PLATESTAND_COLOR_B_A">Alpha:</label>
			<input id="PLATESTAND_COLOR_B_A" name="setupScript,plateStandColorAlpha" type="number" value="0.5" />
   			</inputs>   

</div>
     
     	<!-- Target mesh -->
    		  <inputdivider> Target Visual Mesh </inputdivider>
		  <div class="form-control">     
			<name>Mesh position offset wrt target center [meters]:</name>
   			<inputs>
   			<label for="TARGETMESH_OFFSET_X">X:</label>
			<input id="TARGETMESH_OFFSET_X" name="setupScript,targetMeshPositionOffsetX" type="number" value="0" />
			<label for="TARGETMESH_OFFSET_Y">Y:</label>
			<input id="TARGETMESH_OFFSET_Y" name="setupScript,targetMeshPositionOffsetY" type="number" value="0" />
			<label for="TARGETMESH_OFFSET_Z">Z:</label>
			<input id="TARGETMESH_OFFSET_Z" name="setupScript,targetMeshPositionOffsetZ" type="number" value="0" />
   			</inputs>   
   		  	<note>Offset of the visual mesh wrt to actual target position (that set in Task tab)</note>  
<br><br><br>

<name style="vertical-align: top;">Mesh size:</name>
            <inputs>	<span style='font-size:15px;'>&#8594;</span> 		    
			<label> &nbsp;Automatic - match to:</label> 
            <br>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input id="TARGETMESH_SIZE_AUTO_PT" name="setupScript,targetMeshSizeAuto" type="radio" value="platePlusTarget" checked >
			<label for="TARGETMESH_SIZE_AUTO_PT">Target size: entire plate must lay within mesh for success</label> 
            <br>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input id="TARGETMESH_SIZE_AUTO_CT" name="setupScript,targetMeshSizeAuto" type="radio" value="centerTarget" >
			<label for="TARGETMESH_SIZE_AUTO_CT">Target size: plate center must lay within mesh for success</label> 
            <br>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input id="TARGETMESH_SIZE_AUTO_P" name="setupScript,targetMeshSizeAuto" type="radio" value="plate"  >
			<label for="TARGETMESH_SIZE_AUTO_P">Plate size: mesh shows ideal plate position, at target center</label> 
            <br>
            <span style='font-size:15px;'>&#8594;</span> 	
			<input style='margin-left: 0px;' id="TARGETMESH_SIZE_AUTO_N" name="setupScript,targetMeshSizeAuto" type="radio" value="none">
			<label for="TARGETMESH_SIZE_AUTO_N">Manual [meters]: </label> 

			 
   			 
   			<label for="TARGETMESH_SIZE_X">X:</label>
			<input id="TARGETMESH_SIZE_X" name="setupScript,targetMeshSizeX" type="number" value="0.2" />
			<label for="TARGETMESH_SIZE_Y">Y:</label>
			<input id="TARGETMESH_SIZE_Y" name="setupScript,targetMeshSizeY" type="number" value="0.005" />
			<label for="TARGETMESH_SIZE_Z">Z:</label>
			<input id="TARGETMESH_SIZE_Z" name="setupScript,targetMeshSizeZ" type="number" value="0.2" />
   			</inputs> 

<br><br><br><br> 
<name>Mesh shape:</name>
            <inputs>		    
			<input id="TARGETMESH_SHAPE_CU" name="setupScript,targetMeshShape" type="radio" value="Cube" checked>
			<label for="TARGETMESH_SHAPE_CU">Cube</label> 
			<input id="TARGETMESH_SHAPE_CY" name="setupScript,targetMeshShape" type="radio" value="Cylinder">
			<label for="TARGETMESH_SHAPE_CY">Cylinder</label> 
            <input id="TARGETMESH_SHAPE_CA" name="setupScript,targetMeshShape" type="radio" value="Capsule"  >
			<label for="TARGETMESH_SHAPE_CA" >Capsule</label> 
			<input id="TARGETMESH_SHAPE_SP" name="setupScript,targetMeshShape" type="radio" value="Sphere">
			<label for="TARGETMESH_SHAPE_SP">Sphere</label> 
<br>
			<input id="TARGETMESH_SHAPE_PL" name="setupScript,targetMeshShape" type="radio" value="Plate">
			<label for="TARGETMESH_SHAPE_PL">Plate</label> 
			<input id="TARGETMESH_SHAPE_PG" name="setupScript,targetMeshShape" type="radio" value="PlateAndGrape">
			<label for="TARGETMESH_SHAPE_PG">Plate+Grape</label> 
</inputs> 
		   </div>




  		<!-- Perch -->
    		  <inputdivider> Bird perch </inputdivider>
		  <div class="form-control">      


			<name>Position wrt target center [meters]:</name>
   			<inputs>
   			<label for="PERCH_OFFSET_X">X:</label>
			<input id="PERCH_OFFSET_X" name="setupScript,targetPerchPositionOffsetX" type="number" value="0" />
			<label for="PERCH_OFFSET_Y">Y:</label>
			<input id="PERCH_OFFSET_Y" name="setupScript,targetPerchPositionOffsetY" type="number" value="0.05" />
			<label for="PERCH_OFFSET_Z">Z:</label>
			<input id="PERCH_OFFSET_Z" name="setupScript,targetPerchPositionOffsetZ" type="number" value="-5" />
            </inputs> 
<br><br>
<name>Size [meters]:</name>
   			<inputs>
   			<label for="PERCH_SIZE_X">X:</label>
			<input id="PERCH_SIZE_X" name="setupScript,targetPerchSizeX" type="number" value="0.295" />
			<label for="PERCH_SIZE_Y">Y:</label>
			<input id="PERCH_SIZE_Y" name="setupScript,targetPerchSizeY" type="number" value="0.014" />
			<label for="PERCH_SIZE_Z">Z:</label>
			<input id="PERCH_SIZE_Z" name="setupScript,targetPerchSizeZ" type="number" value="0.054" />
            </inputs> 

		 
</div>


	<!--Target bird -->
    		  <inputdivider> Target bird appearance </inputdivider>
		  <div class="form-control">  


			<name>Position wrt target center [meters]:</name>
   			<inputs>
   			<label for="TGTBIRD_OFFSET_X">X:</label>
			<input id="TGTBIRD_OFFSET_X" name="setupScript,tgtBirdPositionOffsetX" type="number" value="0" />
			<label for="TGTBIRD_OFFSET_Y">Y:</label>
			<input id="TGTBIRD_OFFSET_Y" name="setupScript,tgtBirdPositionOffsetY" type="number" value="0" />
			<label for="TGTBIRD_OFFSET_Z">Z:</label>
			<input id="TGTBIRD_OFFSET_Z" name="setupScript,tgtBirdPositionOffsetZ" type="number" value="0" />
                
              	    
			<input id="TGTBIRD_OFFSETYAUTO_H" name="setupScript,tgtBirdPositionOffsetYStandOnTargetFlag" type="hidden" value="FALSE">
			<input id="TGTBIRD_OFFSETYAUTO" name="setupScript,tgtBirdPositionOffsetYStandOnTargetFlag" type="checkbox" value="TRUE" checked >
			<label for="TGTBIRD_OFFSETYAUTO">Set Y automatically (bird rests on target)</label>	
            </inputs> 
<br><br>
                
                
                	<name>Rotation (0 = facing user) [deg]:</name>
   			<inputs>
   			<label for="TGTBIRD_ROT_X">X:</label>
			<input id="TGTBIRD_ROT_X" name="setupScript,tgtBirdRotationX" type="number" value="0" />
			<label for="TGTBIRD_ROT_Y">Y:</label>
			<input id="TGTBIRD_ROT_Y" name="setupScript,tgtBirdRotationY" type="number" value="0" />
			<label for="TGTBIRD_ROT_Z">Z:</label>
			<input id="TGTBIRD_ROT_Z" name="setupScript,tgtBirdRotationZ" type="number" value="0" />
            </inputs> 
<br><br>
                
<name>Bird size [meters]:</name>
   			<inputs>

            <label for="TGTBIRD_CARDINAL_SIZE_X">Cardinal, X:</label>
			<input id="TGTBIRD_CARDINAL_SIZE_X" name="setupScript,tgtBirdCardinalSizeX" type="number" value="0.4644" />
			<label for="TGTBIRD_CARDINAL_SIZE_Y">Y:</label>
			<input id="TGTBIRD_CARDINAL_SIZE_Y" name="setupScript,tgtBirdCardinalSizeY" type="number" value="0.2079" />
			<label for="TGTBIRD_CARDINAL_SIZE_Z">Z:</label>
			<input id="TGTBIRD_CARDINAL_SIZE_Z" name="setupScript,tgtBirdCardinalSizeZ" type="number" value="0.2511" />      
            <br>

            <label for="TGTBIRD_BLUEJAY_SIZE_X">Bluejay, X:</label>
			<input id="TGTBIRD_BLUEJAY_SIZE_X" name="setupScript,tgtBirdBluejaySizeX" type="number" value="0.4644" />
			<label for="TGTBIRD_BLUEJAY_SIZE_Y">Y:</label>
			<input id="TGTBIRD_BLUEJAY_SIZE_Y" name="setupScript,tgtBirdBluejaySizeY" type="number" value="0.2079" />
			<label for="TGTBIRD_BLUEJAY_SIZE_Z">Z:</label>
			<input id="TGTBIRD_BLUEJAY_SIZE_Z" name="setupScript,tgtBirdBluejaySizeZ" type="number" value="0.2511" />      
            <br>

            <label for="TGTBIRD_ROBIN_SIZE_X">Robin, X:</label>
			<input id="TGTBIRD_ROBIN_SIZE_X" name="setupScript,tgtBirdRobinSizeX" type="number" value="0.4644" />
			<label for="TGTBIRD_ROBIN_SIZE_Y">Y:</label>
			<input id="TGTBIRD_ROBIN_SIZE_Y" name="setupScript,tgtBirdRobinSizeY" type="number" value="0.2079" />
			<label for="TGTBIRD_ROBIN_SIZE_Z">Z:</label>
			<input id="TGTBIRD_ROBIN_SIZE_Z" name="setupScript,tgtBirdRobinSizeZ" type="number" value="0.2511" />      
            <br>

            <label for="TGTBIRD_CHICKADEE_SIZE_X">Chickadee, X:</label>
			<input id="TGTBIRD_CHICKADEE_SIZE_X" name="setupScript,tgtBirdChickadeeSizeX" type="number" value="0.3096" />
			<label for="TGTBIRD_CHICKADEE_SIZE_Y">Y:</label>
			<input id="TGTBIRD_CHICKADEE_SIZE_Y" name="setupScript,tgtBirdChickadeeSizeY" type="number" value="0.1386" />
			<label for="TGTBIRD_CHICKADEE_SIZE_Z">Z:</label>
			<input id="TGTBIRD_CHICKADEE_SIZE_Z" name="setupScript,tgtBirdChickadeeSizeZ" type="number" value="0.1674" />      
            <br>
                
            <label for="TGTBIRD_GOLDFINCH_SIZE_X">Goldfinch, X:</label>
			<input id="TGTBIRD_GOLDFINCH_SIZE_X" name="setupScript,tgtBirdGoldfinchSizeX" type="number" value="0.3096" />
			<label for="TGTBIRD_GOLDFINCH_SIZE_Y">Y:</label>
			<input id="TGTBIRD_GOLDFINCH_SIZE_Y" name="setupScript,tgtBirdGoldfinchSizeY" type="number" value="0.1386" />
			<label for="TGTBIRD_GOLDFINCH_SIZE_Z">Z:</label>
			<input id="TGTBIRD_GOLDFINCH_SIZE_Z" name="setupScript,tgtBirdGoldfinchSizeZ" type="number" value="0.1674" />      
            <br>
                
            <label for="TGTBIRD_SPARROW_SIZE_X">Sparrow, X:</label>
			<input id="TGTBIRD_SPARROW_SIZE_X" name="setupScript,tgtBirdSparrowSizeX" type="number" value="0.3096" />
			<label for="TGTBIRD_SPARROW_SIZE_Y">Y:</label>
			<input id="TGTBIRD_SPARROW_SIZE_Y" name="setupScript,tgtBirdSparrowSizeY" type="number" value="0.1386" />
			<label for="TGTBIRD_SPARROW_SIZE_Z">Z:</label>
			<input id="TGTBIRD_SPARROW_SIZE_Z" name="setupScript,tgtBirdSparrowSizeZ" type="number" value="0.1674" />      
            <br>

            </inputs> 
<br><br>
<name>Scale size of all species by factor:</name>
   			<inputs>
   			<label for="TGTBIRD_SIZE_X">X:</label>
			<input id="TGTBIRD_SIZE_X" name="setupScript,tgtBirdsScaleX" type="number" value="1" />
			<label for="TGTBIRD_SIZE_Y">Y:</label>
			<input id="TGTBIRD_SIZE_Y" name="setupScript,tgtBirdsScaleY" type="number" value="1" />
			<label for="TGTBIRD_SIZE_Z">Z:</label>
			<input id="TGTBIRD_SIZE_Z" name="setupScript,tgtBirdsScaleZ" type="number" value="1" />
            </inputs> 

 <br><br><br><br><br><br>
 
<name>Bird order of appearance:</name>
              
          <inputs>		    
			<input id="TGTBIRD_SPECIESMODE_R" name="trialScript,targetBirdSpeciesMode" type="radio" value="random" checked>
			<label for="TGTBIRD_SPECIESMODE_R">Random from all available species</label> 
            <br>
                		    
			<input id="TGTBIRD_SPECIESMODE_RL" name="trialScript,targetBirdSpeciesMode" type="radio" value="listRandom" >
			<label for="TGTBIRD_SPECIESMODE_RL">Random from specified list of species</label> 
            <br>
                		    
			<input id="TGTBIRD_SPECIESMODE_L" name="trialScript,targetBirdSpeciesMode" type="radio" value="listInOrder" >
			<label for="TGTBIRD_SPECIESMODE_L">In order from specified list of species</label> 
            <br>
                
            <label for="TGTBIRD_SPECIESLIST">    <span style='font-size:15px;'>&#8594;</span>
 &nbsp;List of species:</label> <textarea id="TGTBIRD_SPECIESLIST" name="trialScript,targetBirdSpeciesList" rows="1" cols="50">
bluejay>cardinal>robin>chickadee
</textarea>
<note>Write species names separated by ">"</note>		
<note>Available species: cardinal, bluejay, robin, chickadee, goldfinch, sparrow</note>		
<br><br>
    </inputs>   
<name>Bird change occurs:</name>
 <inputs>		    
			<input id="TGTBIRD_CHANGESTAGE_5" name="trialScript,changeBirdStage" type="radio" value="5" checked>
			<label for="TGTBIRD_CHANGESTAGE_5">After trial completion (after plate reaches the target, falls, etc...)</label> 
            <br>
                		    
			<input id="TGTBIRD_CHANGESTAGE_6" name="trialScript,changeBirdStage" type="radio" value="6" >
			<label for="TGTBIRD_CHANGESTAGE_6">After feedback message (*after trial completion if no feedback msg)</label> 
            <br>
                		    
			<input id="TGTBIRD_CHANGESTAGE_1" name="trialScript,changeBirdStage" type="radio" value="1" >
			<label for="TGTBIRD_CHANGESTAGE_1">After the break (*after trial completion / feedback if no break)</label> 
            <br>
</inputs>      
            



 <br><br><br><br><br><br>
 
<name>Bird animation:</name>
      <inputs>	
    <label>    <span style='font-size:15px;'>&#8594;</span>On entry: </label>
			<input id="TGTBIRD_ANIM_ENTRY_L" name="trialScript,targetBirdEntryAnimation" type="radio" value="landing" checked>
			<label for="TGTBIRD_ANIM_ENTRY_L">Fly in</label> 
			<input id="TGTBIRD_ANIM_ENTRY_A" name="trialScript,targetBirdEntryAnimation" type="radio" value="appear">
			<label for="TGTBIRD_ANIM_ENTRY_A">Appear</label> 
<br>
                <note>For "Fly in" option, bird appears at a distant position and then flies towards its ultimate position on target</note>
      <label for="TGTBIRD_APPOFFSET_X">"Fly in" appearance position wrt position on target [meters], X:</label>
			<input id="TGTBIRD_APPOFFSET_X" name="trialScript,targetBirdAppearanceOffsetX" type="number" value="0" />
			<label for="TGTBIRD_APPOFFSET_Y">Y:</label>
			<input id="TGTBIRD_APPOFFSET_Y" name="trialScript,targetBirdAppearanceOffsetY" type="number" value="0.5" />
			<label for="TGTBIRD_APPOFFSET_Z">Z:</label>
			<input id="TGTBIRD_APPOFFSET_Z" name="trialScript,targetBirdAppearanceOffsetZ" type="number" value="1" />
                
      </inputs>

<name> </name>
      <inputs>	
    <label>    <span style='font-size:15px;'>&#8594;</span>On exit: </label>
			<input id="TGTBIRD_ANIM_EXIT_T" name="trialScript,targetBirdExitAnimation" type="radio" value="takeoff" checked>
			<label for="TGTBIRD_ANIM_EXIT_T">Fly away</label> 
			<input id="TGTBIRD_ANIM_EXIT_D" name="trialScript,targetBirdExitAnimation" type="radio" value="disappear" >
			<label for="TGTBIRD_ANIM_EXIT_D">Disappear</label> 
<br>
                <note>For "Fly away" option, bird flies towards distant position and then disappears</note>
      <label for="TGTBIRD_DISAPPOFFSET_X">"Fly away" disappearance position wrt position on target [meters], X:</label>
			<input id="TGTBIRD_DISAPPOFFSET_X" name="trialScript,targetBirdDepartureOffsetX" type="number" value="0" />
			<label for="TGTBIRD_DISAPPOFFSET_Y">Y:</label>
			<input id="TGTBIRD_DISAPPOFFSET_Y" name="trialScript,targetBirdDepartureOffsetY" type="number" value="0.5" />
			<label for="TGTBIRD_DISAPPOFFSET_Z">Z:</label>
			<input id="TGTBIRD_DISAPPOFFSET_Z" name="trialScript,targetBirdDepartureOffsetZ" type="number" value="-1" />
      </inputs><br>

<name> </name>
      <inputs>	
    <label>    <span style='font-size:15px;'>&#8594;</span>While on target: </label>
			<input id="TGTBIRD_ANIM_MAIN_" name="trialScript,targetBirdMainAnimation" type="radio" value="ground" checked>
			<label for="TGTBIRD_ANIM_MAIN_">Perched</label> 
			<input id="TGTBIRD_ANIM_MAIN_" name="trialScript,targetBirdMainAnimation" type="radio" value="flying" >
			<label for="TGTBIRD_ANIM_MAIN_">Flying</label> 
<br>
                <note>For "Perched" option, bird animation randomly changes between preening, pecking, ruffling, or looking around</note>

      <label for="TGTBIRD_ANIM_T0">Perched animations last between </label>
			<input id="TGTBIRD_ANIM_T0" name="trialScript,targetBirdGroundAnimationMinDuration" type="number" value="2" />
			<label for="TGTBIRD_ANIM_TE"> to </label>
			<input id="TGTBIRD_ANIM_TE" name="trialScript,targetBirdGroundAnimationMaxDuration" type="number" value="5" />
                <label>[Seconds]</label>
                <note>(the animation changes after a time interval selected at random from the range specified above)</note>
                
      </inputs><br>
    
    
              
</div>






	<!-- Bird sounds -->
    		  <inputdivider> Environment birds (not target bird) </inputdivider>
		  <div class="form-control">     
			<name>Sound volume [0 to 1]:</name>
   			<inputs>
   			<label for="CHIRP_VOL">Chirp:</label>
			<input id="CHIRP_VOL" name="setupScript,backgroundBirdChirpVolume" type="number" value="0.1" />
			<label for="WINGS_VOL">Wings:</label>
			<input id="WINGS_VOL" name="setupScript,backgroundBirdFlyawayVolume" type="number" value="0.1" />
   			</inputs>    		
		   </div>
  	
	</inputcolumn> 
	<figurecolumn>
    		<img src="website/inputpage/paradigmSmall-01.png"  style="width:100%">
	</figurecolumn>

 
	</form>

     
  
      

  `);

