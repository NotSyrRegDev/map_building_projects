import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Heroarea from '../components/Heroarea';
import Footer from '../components/Footer';
import RoomsComponents from '../components/RoomsComponents';


const SingleRoom = () => {

  const [  numberOfRooms , setNumberOfRooms] = useState(25);

  let theHeadline = "الغرفة واحد";


  return (
    <div className='main_home_container' >

    <div className="main_area_page">

   

      <Navbar /> 

      <Heroarea theHeadline={theHeadline} />

    </div>

    <div className="mt-5 mx-3 d-flex-c f-sp info_about">

<h1 className="section_headline mt-1">  موقع القاعة والمبنى  </h1>

</div>

    <div className='flex-col mt-3' >
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1605.0772153851124!2d42.68568910935547!3d16.898709517579224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1607faea0d866a7b%3A0x1ad2a31692fb3db!2z2KfZhNmD2YTZitipINin2YTYqtmC2YbZitipINio2KzYp9iy2KfZhg!5e0!3m2!1sar!2ssa!4v1684101875479!5m2!1sar!2ssa" width="90%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div className="mt-5 mx-3 d-flex-c f-sp info_about">

<h1 className="section_headline mt-1">   رقم القاعة : F121  </h1>

</div>

<p className="main_para mt-2 mx-2"> <span className="span_bold"> وصف القاعة </span> القاعة تقع في الجهة الشمال من.....</p>   


<div className="mt-5 mx-3 d-flex-c f-sp info_about">

<h1 className="section_headline mt-1">   عدد الكراسي  : 35 </h1>

</div>

    <div className="grid_charis">
   
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>
      <div className="single_chair_point"></div>

    </div>


    
<div className="mt-5 mx-3 d-flex-c f-sp info_about">

<h1 className="section_headline mt-1">   الجدول الدراسي </h1>

</div>


    <div className="grid_tables mt-5">

  <div>
  
  <h1 className="section_subheadline text-center"> يوم الاحد </h1>
  <div className="table-wrapper flex-col mt-1">
	<div className="table-container">


		<table>
		
			<tbody>
				<tr>
					<th>المحاضر</th>
					<th>الوقت</th>
					<th>المادة</th>
				
				</tr>
				<tr>
					<td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>

				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>

				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
			
			</tbody>
		</table>
	</div>
</div>

  </div>

  <div>

  <h1 className="section_subheadline text-center"> يوم الاثنين </h1>
  <div className="table-wrapper flex-col mt-1">
	<div className="table-container">


		<table>
		
			<tbody>
				<tr>
					<th>المحاضر</th>
					<th>الوقت</th>
					<th>المادة</th>
				
				</tr>
				<tr>
					<td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>

				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>

				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
			
			</tbody>
		</table>
	</div>
</div>

  </div>

      

    </div>

    <div className="grid_tables mt-5">

  <div>
  
  <h1 className="section_subheadline text-center"> يوم الثلاثاء </h1>
  <div className="table-wrapper flex-col mt-1">
	<div className="table-container">


		<table>
		
			<tbody>
				<tr>
					<th>المحاضر</th>
					<th>الوقت</th>
					<th>المادة</th>
				
				</tr>
				<tr>
					<td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>

				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>

				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
			
			</tbody>
		</table>
	</div>
</div>

  </div>

  <div>

  <h1 className="section_subheadline text-center"> يوم الاربعاء </h1>
  <div className="table-wrapper flex-col mt-1">
	<div className="table-container">


		<table>
		
			<tbody>
				<tr>
					<th>المحاضر</th>
					<th>الوقت</th>
					<th>المادة</th>
				
				</tr>
				<tr>
					<td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>

				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>

				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
			
			</tbody>
		</table>
	</div>
</div>

  </div>

      

    </div>

    <div className="grid_tables mt-5">

  <div>
  
  <h1 className="section_subheadline text-center"> يوم الخميس </h1>
  <div className="table-wrapper flex-col mt-1">
	<div className="table-container">


		<table>
		
			<tbody>
				<tr>
					<th>المحاضر</th>
					<th>الوقت</th>
					<th>المادة</th>
				
				</tr>
				<tr>
					<td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>

				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>

				<tr>
        <td data-cell="name"> راج كومار </td>
					<td data-cell="poles"> 8:00 - 9:00 </td>
					<td data-cell="podiums"> علوم حاسب </td>
				</tr>
			
			</tbody>
		</table>
	</div>
</div>

  </div>



      

    </div>





<Footer />



    </div>
  )
}

export default SingleRoom