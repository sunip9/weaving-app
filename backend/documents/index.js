module.exports = ({ buyername, design, loom, shed, totalend, totalpick, designname, po, type, gsm, size, readcount,pileratio,onthetable,pieceweight,hemyarn, piletopile,cuttingborder, pileyarn, groundyarn,fancyyarn,campile,weftyarn,ppi,fancycam, cminch, cuttingborderplain, cuttingbordertotal, note }) => {
   const today = new Date();
return `
<!doctype html>
	<html>		
		<head>
			<meta charset="utf-8">
			<title>PDF Result Template</title>
			<style>
				*{
					margin: 0;
					padding: 0
				}
				#wrapper{
					padding: 20px 40px;
					
				}
				header{
					text-align: center;
				}				
				table, td {
				  border: 1px solid black;		    
				}
				table {
					width: 150px;
					font-size: 14px !important;
					border-collapse: collapse;					
				  }
				td{
					padding: 5px 5px
				}  
				.row{
					width:100%;
					height: 80px
				}
				.left, .right {										
					padding: 10px;
					font-size: 10px;
					margin: 5px
				  }				  
				  .left {
					width: 20%;
					float: left !important;
				  }				  
				  .right {
					width: 23%;
					margin-left: 440px;
					float: right !important
				  }
				  
				 
			</style>
		</head>
		<body>
			<div id='wrapper'>
				  <header style="width: 100%; overflow: hidden; margin: 10px 0">
					  <div id='logo' style='float: left; object-fit:cover;'>
				  		<img style='width:60px;' src="http://localhost:8001/public/uploads/nttml_logo.png" alt='logo'>	
					  </div>
					  <div id="title">
						  <h3>Noman Terry Towel Mills Ltd. </h3>
						  <h6>Vawal Mirzapur, Gazipur </h6>
						  <h4>LOOM CARD</h4>
					  <div>
					  <div class="ref" style="margin: 0 0 0 560px; border: 1px solid black; padding: 0; text-align: left">
						  <h5>Doc. No: NTTMLF-WQLY-01</h5>
						  <h6> IssueDate: 15.09.2018</h6>
						  <h6>Rev. No: 01</h6>
					  </div>
				  </header> <!--- complete -->

				  
				
				<div style="width: 100%; overflow: hidden;font-size:12px; margin: 30px 0">
					<div style="width: 150px; float: left;"> 
						<p><strong >SHED:</strong>  ${shed === undefined ? '' : shed}</p>
						<p><strong >LOOM NO:</strong>  ${loom === undefined ? '' : loom}</p>
						<p><strong >DESIGN NO:</strong>  ${design}</p>	
					</div>
					<div style="margin-left:600px"> 
						<p><strong >TOTAL END PILE: </strong>  ${totalend !=null ? totalend : 'N/A'}</p>
						<p><strong >TOTAL PICK: </strong>  ${totalpick !=null ? totalpick : ''}</p>
						<p><strong >DATE: </strong>  ${`${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}.`}</p>	
					</div>
				</div>

		     <div>   <!-- table-->
				 <table style="width:100%">
				  <tr>
					<td style='width: 170px'><strong>BUYER NAME</strong></td>
					<td><strong>${buyername}</strong></td>				 
				  </tr>
				  <tr>
					<td style='width: 170px'><strong>DESIGN NAME</strong></td>
					<td><strong>${designname}</strong></td>				 
				  </tr>
				  <tr>
					<td><strong>STYLE/PO NO.</strong></td>
					<td><strong>${po ===undefined ? '': po}</strong></td>				 
				  </tr>
				  <tr >
					<td style='width: 170px'>QUALITY</td>
					<td>${type}</td>
								 
				  </tr>
				  <tr>
				  <td style='width: 170px'><strong>GSM</strong></td>
				  <td><strong>${gsm}</strong></td>				 
				  </tr>

				  <tr>
				  <td > <strong>Size</strong></td>
				  <td> <table style='width:100%'> <tr>
				  <td style='width: 120px'> <strong>${size} ${cminch}</strong></td>
				  <td>Ls: </td>	
				  <td>Ws: </td>
				 	
				  </tr> </table>			 
				</tr>

				<tr>
				  <td style='width: 170px'>REED COUNT</td>
				  <td>${readcount}</td>				 
				</tr>
				<tr>
				  <td><strong>PICK PER INCH</strong></td>
				  <td><strong>${ppi}</strong></td>				 
				</tr>
				<tr>
				  <td>PILE YARN</td>
				  <td> <table style='width:100%'> <tr>
				  <td style='width: 120px'>${pileyarn}</td>
				  <td>Lot: </td>	
				  <td>Ch: </td>
				  <td>Br: </td>		
				  </tr> </table>		 
				</tr>
				<tr>
				  <td>GROUND YARN</td>
				  <td> <table style='width:100%'> <tr>
				  <td style='width: 120px'>${groundyarn}</td>
				  <td>Lot: </td>	
				  <td>Ch: </td>
				  <td>Br: </td>	
				  </tr> </table>	
				  		 
				</tr>
				<tr>
				  <td>WEFT YARN</td>
				  <td> <table style='width:100%'> <tr>
				  <td style='width: 120px'>${weftyarn}</td>
				  <td>Lot: </td>	
				  <td>Ch: </td>
				  <td>Br: </td>	
				  </tr> </table>			 
				</tr>
				<tr>
				  <td>FANCY YARN</td>
				  <td>${fancyyarn ? fancyyarn : ''}</td>				 
				</tr>
				<tr>
				  <td>FANCY/ CAM BORDER</td>
				  <td>${fancycam !=null ? `${fancycam} cm ` : ''}</td>				 
				</tr>
				<tr>
				  <td>CAM PILE</td>
				  <td>${campile !=null ? `${campile} cm` : ''} </td>				 
				</tr>
				<tr>
				  <td>PILE TO PILE</td>
				  <td>${piletopile} cm</td>				 
				</tr>
				<tr>
				  <td>CUTTING BORDER/ HEM</td>
				  <td> <table style='width:100%'> <tr>
				 <td style='width: 120px'>${cuttingborder !=null ? `${cuttingborder} cm`: ''} </td>	
				  <td>${cuttingborderplain !=null ? `${cuttingborderplain} cm`: ''}</td>	
				  <td>${cuttingbordertotal !=null ? `${cuttingbordertotal} cm` : ''}</td>	
				  <td></td>
				 </tr> </table>	
				  			 
				</tr>
				<tr>
				  <td>HEM YARN</td>
				  <td> <table style='width:100%'> <tr>
				  <td style='width: 120px'>${hemyarn !=null ? hemyarn : ''}</td>	
				  <td>Lot: </td>	
				  <td>Ch: </td>
				  <td>Br: </td>		
				  </tr> </table>
				  			 
				</tr>
				<tr>
				  <td>PCS WEIGHT</td>
				  <td style='width: 120px'>${pieceweight} gm</td>
				 				 
				</tr>
				<tr>
				  <td>ON THE TABLE</td>
				  <td>${onthetable} cm</td>				 
				</tr>
				<tr>
				  <td>PILE RATIO</td>
				  <td>${pileratio}</td>				 
				</tr>
				
				</table>

			</div><!-- table-->

<br/>
${note ? `<h5>Note: ${note}</h5>` :  ''}

			</div> <!-- wrapper -->
			<div class='signature' style='margin-left: 650px'>	  
			<hr style='margin-top: 30px; width: 100px'>
			<p style='font-size: 12px; margin-top: 3px'>Signature</p>
			</div>


		</body>

	</html>

`;
};