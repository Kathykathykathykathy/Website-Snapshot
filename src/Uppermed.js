import './App.css';
import * as React from 'react';
import { ProjectPage, Columns, Text, HeroText, IconText, Image, Space, Anchor, ImageDouble, TeamToolsTimeline, ImageTextRight, ImageCaptions, ImageDoubleText } from './Components'

export function Uppermed() {
  return (
    <ProjectPage title='Uppermed' anchors={{
      top: 'Overview', 
      personas: 'Personas', 
      ideation: 'Ideation', 
      usability: 'User testing', 
      final: 'Final design', 
      steps: 'Next steps'
    }}>

{/* SPLASH IMAGES */}
    <ImageDouble
      image_path1={'uppermed/8.1.png'}
      image_path2={'uppermed/8.3.png'}
      cwidth='80'
      dwidth='35'
      cmwidth='100'
      mwidth='40'
    />

{/* TITLE */}
      <h1>UPPERMED</h1>
      <Space height='32' />

{/* HEADER */}
    <TeamToolsTimeline
      text_team = {<p>Startup CEO<br />Developers<br />Marketing</p>}
      text_tool = {<p>Figma<br />Photoshop<br />Illustrator</p>}
      text_time = {<p>6 months</p>}
      />

{/* BRIEF */}
      <Text>
        <h2>Brief</h2>

        Over 1,000,000 kidney failure patients are found to be depressed and have trouble sticking to consistent treatment regiments. Kidney failure is a difficult disease for patients to manage. To help patients with their peritoneal dialysis (PD) treatments, the Uppermed app was made. <b>Uppermed tracks treatments via data recording and trend analysis and encourages patients to have a consistent treatment schedule.</b> I was responsible for the UX design of the entire treatment tracking app. This app helped the startup get 600k USD.
      </Text>

{/* PROBLEM */}
      <Text>
        <h2>Problem</h2>
        <ul>
          <li>PD patients feel it's time consuming and burdensome to write down their body liquid balance, blood pressure and body weight volume 4 times a day. </li>
          <li>Doctors and nurses feel it's inefficient to only monitor patient's treatment during in-person visits at the clinic due to time constraints and infrequent contact.</li>
       </ul>
      </Text>

{/* HOW MIGHT WE */}
      <HeroText>
        How might we make kidney failure easier to manage for patients
        struggling with the disease every day?
      </HeroText>

{/* GOALS */}
      <Text>
        <h2>Goals</h2>
        Create an app that:
        <ul>
          <li>Helps patients manage the recordings of body fluid balance, blood pressure, and body weight.</li>
          <li>Helps clinics monitor patients' treatment progress and streamline communication between patients and doctors during consultations.</li></ul>
      </Text>

{/* PERSONAS */}
      <Text>
        <Anchor id='personas'/><h2>Personas</h2>
        I designed the questionnaire to better understand the backgrounds and pain points of potential users and received 20 (10 patients, 5 doctors, 5 nurses) survey responses and conducted 15 (9 patients, 3 doctors, 3 nurses) user interviews. We created personas for patients and doctors based on our interviews. This approach helped me understand and empathize with my users and design for their needs and goals.
      </Text>

      <Space height='32' />

      <ImageTextRight
      image_path={'uppermed/Patient persona.png'}
      text_disp={
      <div>
        <h3>Patient, 40</h3>
        Was an engineer, taxi driver now<br/>
        Changed career due to difficulty balancing work with dialysis<br/>
        2 children &lt; 18<br/>
        <b>Challenges</b><br/>
        Inconvenient to record body data 4 times a day<br/>
        Occasionally forgets to check in at hospital<br/>
        <b>Needs</b><br/>
        Improve communication of challenges with doctors<br/>
        Feel more empowered to manage my treatment progress<br/>

      </div>}
      iwidth='30'
      mwidth='50'
      twidth='100'
      padding='80'
      />
      <Space height='32'/>
      <ImageTextRight
      image_path={'uppermed/Doctor persona.png'}
      text_disp={
      <div>
        <h3>Dialysis doctor, 45</h3>
        15 years experience in dialysis<br/>
        1 child &lt; 18<br/>
        <b>Challenges</b><br/>
        Hard to track patient’s treatment progress<br/>
        <b>Needs</b><br/>
        Monitor patients more efficiently<br/>
        Reduce patient visit time in the clinic<br/>
      </div>}
      iwidth='30'
      mwidth='50'
      twidth='100'
      padding='80'
      />

{/* COMPETITOR ANALYSIS */}
      <Text><h2>Competitor analysis</h2>
              I researched some companies with products in the health app space (Omron, Avax, Kardia) to find inspiration. What I took away were:
              <br/><ul>
              <li>Using <b>multiple pages to layer the data with hierarchy</b>.</li>
              <li>Using <b>color for different data categories</b> to help users locate information of interest.</li>
              <li>Display <b>chart with measurement history</b> for tracking the treatment progress.</li>
              <li>Using <b>tabs</b> help <b>navigating</b> through different <b>information</b>.</li>
              </ul>
        </Text>

        <Space height='32' />

        <ImageCaptions
          image_path1={'uppermed/3.3.jpg'}
          text_disp1={<h3 style={{textAlign:'center'}}>Omron</h3>}
          image_path2={'uppermed/competior Avax.png'}
          text_disp2={<h3 style={{textAlign:'center'}}>Avax</h3>}
          image_path3={'uppermed/competitor Kardia.png'}
          text_disp3={<h3 style={{textAlign:'center'}}>Kardia</h3>}
          dwidth='25'
          mwidth='50'
          cwidth='95'
        />
          

{/* IDEATION */}
      <Text>
        <Anchor id='ideation' /><h2>Ideation</h2>
        Every day patients need to measure pressure twice, weight twice, and CAPD four times. Based on previous users' insights, they want a clean interface that only displays important information with options  to navigate other information in order to save their time. With this in mind, I explored 3 different ideas for the dashboard.
     
      </Text>

      <Space height='32' />

      < ImageCaptions
        image_path1={'uppermed/4.1.png'}
        image_path2={'uppermed/4.2.png'}
        image_path3={'uppermed/4.3.png'}
        text_disp1={<div>
          <h3 style={{ textAlign: 'left' }}>Rack design</h3>
          <b>Pro:</b> Users can see all infos <br/>at a glance<br/>
          <b>Con:</b> Infos is too long and users have to scroll down
          </div>}
        text_disp2={<div> 
          <h3 style={{ textAlign: 'left' }}>Carousel design</h3>
          <b>Pro:</b> The interface is clean<br/>
          <b>Con:</b> Users have to scroll four times if the data has four pieces
          </div>}
        text_disp3={<div>
          <h3 style={{ textAlign: 'left' }}>Two-later design <img src='/img/crown.webp' style={{ height: '20px', width: '20px' }} /></h3>
         <b>Pro:</b> User see the important value only <br/>
         <b>Con:</b> Users can see further details on the second page
        </div>}
      cwidth='100'
      dwidth='25'
      mwidth='60'
      padding='32px'
      />



{/*ILLUSTRATION*/}
      <Text>
        <h2>Visual inspiration </h2>
        Illustrations used in this project were inspired by humaaans.com. This lively and flexible style really suited Uppermed. We want to promote a relaxing and healthy lifestyle, so we apply blue and green colors with an emphasis on plants. I chose the font <b> Montserrat</b> because it is modern and clean aesthetic. It fits our brand value to create a modern and effective health app. I also like its high <b>readability and scalability. These qualities help make complex and dense data easy to navigate.</b>
      </Text>
      <Space height='32' />

      <ImageTextRight
        image_path={'uppermed/6.1.png'}
        text_disp={<div><h3>Patients meet with doctor scenario</h3>
        The blooming flowers represent the hope and life of patients.</div>}
        cwidth='90'
        iwidth='30'
        twidth='35'
        vcentered
      />

      <Space height='16' />

      <Columns width='87' desktop>
        <Image width='8' url='uppermed/6.2.png' />
        <Image width='8' url='uppermed/6.3.png' />
        <Image width='8' url='uppermed/6.4.png' />
        <Text width='35' vcentered>
        <h3>Illustration icons</h3>
        Icons with a color spot are easy to recognize, and have a lively style to them too.
        </Text>
      </Columns>
      <Columns width='75' mobile>
        <Image width='30' url='uppermed/6.2.png' />
        <Image width='30' url='uppermed/6.3.png' />
        <Image width='30' url='uppermed/6.4.png' />
      </Columns>
      <Text mobile>
        <h3>Illustration icons</h3>
        Icons with a color spot are easy to recognize, and have a lively style to them too.
      </Text>

      <Space height='16' />
      
      <ImageTextRight
        image_path={'uppermed/6.5.jpg'}
        text_disp={<div><h3>Plant illustration</h3>
        Adding texture to the grass adds a rich looking and multi dimensional design to the interface.</div>}
        cwidth='90'
        iwidth='30'
        twidth='35'
        vcentered
      />

  {/* USABILITY */}
      <Text>
        <Anchor id='usability' /><h2>User Testing</h2>
        I developed a click-through prototype on Figma to conduct usability tests to get an in-depth understanding of how users interact with the new interface. I did <b>20</b> tests in total over two weeks with patients between the ages of <b>35 and 65.</b> I created a plan for user testing, including multiple tasks in the prototype and solicited feedback at the conclusion. I received good and surprising reactions to the design while also getting feedback for some areas of improvement which I later implemented into the final design. I really enjoyed talking to users, showing them the new design, and seeing their reactions. It motivates me to make thoughtful design decisions that benefit my users.
      </Text>

      <Space height='32' desktop />

      <Text> <b>Feedback</b><br/>
      <b>18/20</b> of patients think the concept is successful and will help make their <b>life easier</b> while doing dialysis treatment.<br/>
      <b>19/20</b> of patients think it's good to <b>quickly see their results</b> on the dashboard .<br/>
      <b>5/5</b> of doctors and nurses provide positive feedback that will help them remind patients to return to the hospital. It <b>reduces labor work  from hospitals.</b> <br/><br/>

      <b>Other insights</b><br/>
      <b>17/20</b> of patients feel it's hard to contact doctors if they have questions to ask.<br/>
      <b>15/20</b> of patients feel it's monotonous to routinely record treatment diaries.<br/>
      <b>18/20</b> of <b>patients live alone</b> and don't contact their family everyday.  </Text>

    <Space height = '32' />

      <Image 
      url='uppermed/test img.png'
      width='93'
      />
      <Space height = '32' />

      <Image
      url='uppermed/Uability test process.png'
      width='93'
      />

      <Text><h3 style={{textAlign:'center'}}>Usability task and results</h3></Text>

      <Space height='16'/>




{/* FINAL DESIGN */}
      <Text>
        <Anchor id='final' /><h2>Final design</h2>
      </Text>
      <Space height='32' />
      <ImageDoubleText
        image_path1={'uppermed/8.1.png'}
        image_path2={'uppermed/8.2.png'}
        text_disp={<div>
         <ul> <li><b>Use multiple layers of data to improve navigation </b>
         <br/>A multi-layer design (landing + detail pages) can help segregate the complex information and help users digest and navigate data.<br/><br/>

         <li><b>Abnormal value in red color</b></li>
         80% of doctors want to help patients reduce their visit time and have an option to do treatment at home. A strong color will remind patients to return for consultation if unusual data is recorded.</li></ul>


</div>}
        twidth='45'
        dwidth='25'
        mwidth='35'
        />

      <Space height='64' />

      <ImageDoubleText
        image_path1={'uppermed/8.3.png'}
        image_path2={'uppermed/8.4.png'}
        text_disp={<div>
        <ul> <li> <b>Track various statistics using tabs </b>
        <br/>40% of patients are depressed during the treatment, seeing the chart helps motivate them.<br/><br/>
        <li><b>Take notes for tracking treatment</b></li>
        75% of patients say they easily forget their daily treatment details. Having a collection of notes helps them have productive conversations with doctors. </li></ul></div>}
        twidth='45'
        dwidth='25'
        mwidth='35'
        />

      <Space height='64' />

      <ImageDoubleText
        image_path1={'uppermed/8.5.png'}
        image_path2={'uppermed/8.6.png'}
        text_disp={<div>
        <ul><li> <b>Appointment reminders</b><br/>
        85% of patients tend to forget their appointments. This feature can help improve follow-up. </li></ul></div>}
        twidth='45'
        dwidth='25'
        mwidth='35'
        />

{/* Next step */}
      <Text>
        <Anchor id='steps' /><h2>Next step</h2>
        <ul>
          <li>Add <b>animation effects</b> for completing task actions to make the user experience more <b>engaging</b>.</li>
          <li>Add a messaging system to enable <b>real-time interaction between patients and clinics</b>.</li>
          <li>Introduce a <b>family mode</b> so that patients' families can help take care of them.</li></ul>
      </Text>

{/* Summary */}
        <Text>
          <h2>Summary</h2>
          <ul>
          <li>Uppermed was developed as an app to help patients with everyday annoyances associated with dialysis like having to manually record their physical state on paper.</li>
          <li>Our goal was to improve the standard of living of patients so they may lead happier, more comfortable lives.</li>
          <li>This app helped Uppermed succeed in raising <b>$600k USD</b> in funding, which demonstrated the value of <b>empathy-driven innovation</b> and validated our mission.</li>
          </ul>
        </Text>
      </ProjectPage>
  );
}
