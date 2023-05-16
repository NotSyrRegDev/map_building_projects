import React from 'react'

const AboutUsMessage = () => {
  return (
    <div className='mt-5' >

    <div className="flex-col">

    <img src="/images/icons/man.png" alt="" className="home_icon" />

<h1 className="section_headline mt-1">  مؤسس المشروع: فلان </h1>


    </div>

    <div className="mx-3 d-flex-c f-sp info_about">

    <h1 className="section_headline mt-1">   معلومات عن المؤسس  </h1>


    </div>

    <div className="grid_info_about mt-4">

        <div className='about_info' >
            <p className="main_para"> الاسم الكامل :  </p>
        </div>

        <div className='about_info' >
        <p className="main_para"> الرقم الجامعي  :  </p>
        </div>

    </div>

  

    </div>
  )
}

export default AboutUsMessage