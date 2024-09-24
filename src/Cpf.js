import './App.css';
import * as React from 'react';
import { Anchor, ProjectPage, Columns, Text, HeroText, Image, Space, TeamToolsTimeline } from './Components'

export function Cpf() {
  return (
    <ProjectPage title='Singapore government website' anchors={{
      top: 'Overview', research: 'Research', solution: 'Solution', design: 'Design', challenges: 'Challenges'
    }}>
      <Image width='45' mwidth='80' url='cpf/1.png' />
      <h1>Singapore government website</h1>
      <Space height='32' />

      <TeamToolsTimeline
      text_team = {<p>Product owner<br />Product designers<br />Copy writers<br />Project managers<br />Developers</p>}
      text_tool = {<p>Figma<br />Adobe Photoshop<br />Adobe Illustrator</p>}
      text_time = {<p>6 months</p>}
      />

      <Text>
        <h2>Brief</h2>

        CPF is a comprehensive savings and pension plan for working Singaporeans and permanent residents primarily to fund their retirement, healthcare, and housing needs in Singapore. The goal is to make dense and complex CPF content easy and straightforward for users to understand.

        <h2>Problem</h2>
        <ul>
        <li>More service-oriented, less lively style</li>
        <li>UI and component doesn't reflect modern design practices</li>
        <li>The website is difficult to navigate, making it difficult for users to find to what they're searching for</li>
        </ul>
      </Text>

      <Space height='32' />

      <Columns>
        <Image width='38' mwidth='70' url='cpf/2.png' rounded />
        <Space height='32' mobile />
        <Image width='38' mwidth='70' url='cpf/3.jpg' rounded />
      </Columns>

      <HeroText>
        How might we transform the existing CPF homepage with information overloaded into a more intuitive website?
      </HeroText>
  
      <Text>
        <Anchor id='research' /><h2>Research</h2>
        <h3>Understanding users' needs</h3>
        We interviewed 60 CPF members of different age range. Afterwards, we came out with the 6 personas for design ideations.
      </Text>
      <Space height='32' />
      <Columns width='90'>
        <Image width='45' url='cpf/4.jpg' rounded />
        <Space height='32' mobile />
        <Image width='22' mwidth='45' url='cpf/5.jpg' rounded />
      </Columns>
      <Space height='32' />
      <Text>
        <h3>Personas</h3>
      </Text>
      <Space height='32' />
      <Image width='70' mwidth='80' url='cpf/6.jpg' rounded />
      <Space height='32' />
      <Text>
        <h3>Understanding users' behavior</h3>
        Checking CPF's current website's Google Analytics data showed that most users will go to the homepage
        to use the <b>common service</b> and <b>calculator tool</b> as the first entry point from the landing page.
        Also from the interview, we understood that users usually have a specific task in mind to complete.
      </Text>
      <Text>
        <Anchor id='solution' /><h2>Solution</h2>
        Apply DSS rule and apply WCAG rule to make it more accessible to all users. And follow the mobile-first
        principle while designing the mobile web.
        <Space height='32' />
        <Image width='70' mwidth='80' url='cpf/7.png' rounded />
        <Space height='32' />
        <h3>Apply design principles</h3>
        <ul>
          <li><b>Keep it relevant:</b> Prioritise the information which is relevant to users.</li>
          <li><b>Help users focus:</b> Highlight the key information, so users can focus on what they need.</li>
          <li><b>Be forthcoming:</b> Allow users to make easier choices and control how they interact with a website.</li>
          <li><b>Keep it simple:</b> Present the information in an easy to understand manner.</li>
        </ul>
      </Text>
      <Text>
        <Anchor id='design' /><h2>Design</h2>
        <h3>Illustration oriented</h3>
        Apply illustration to the website to show the brand value; its <b>storytelling</b> helps users understand it.
        The style becomes young and interactive with users. A hero image with illustration conveys the brand value
        so <b>users will engage with us</b>.
        <h3>Prioritised content</h3>
        The content will be three part to help users focus on and digest the content according to priority.<br />
        <i>The primary</i> content shows <i>brand value</i> and lets users use <i>filter search</i> to find what they
        need for <i>task oriented purposes</i>.<br />
        <i>The secondary</i> content introduces the <i>main scheme</i> to users, so users can keep exploring more about CPF.<br />
        <i>The tertiary</i> content shows <i>additional information</i> to users like recommended reading and the latest news.
        <Space height='32' />
        <Image width='75' url='cpf/8.png' rounded />
        <Space height='64' />
      </Text>
      <Columns>
        <Text width='59'>
          <h3 style={{ marginTop: 0 }}>Personalized global search</h3>
          <i>Users like content relevant to them</i>. With the personalised filter they will see search results based on their needs.<br />
          We apply the design principle: keep it relevant.
        </Text>
        <Space height='32' mobile />
        <Image width='35' mwidth='60' url='cpf/9.png' rounded />
      </Columns>
      <Space height='64' />
      <Columns>
        <Text width='46'>
          <h3 style={{ marginTop: 0 }}>Experiment calculator tool</h3>
          This part introduces the 3 main CPF schemes, they can use the tab to easily switch to different schemes.
          With a calculator tool, users can <i>understand the scheme more by trying different numbers, and make a more informed decision on the right plan</i>.<br />
          <br />
          Apply the design principle "<i>be forthcoming</i>" so users can better interact and digest.
        </Text>
        <Space height='32' mobile />
        <Image width='48' mwidth='70' url='cpf/10.png' rounded />
      </Columns>
      <Space height='64' />
      <Text centered>
        <video autoplay muted loop playsinline controls width='75%' src='/img/cpf/11.mp4' />
      </Text>
      <Space height='32' />
      <Text>
        <Anchor id='challenges' /><h2>Challenges</h2>
        How should we define the keywords in the dropdown list in filter search, making sure the choices fit users'
        needs to search the information without unnecessarily limiting them. The next step: reduce the filter and
        do a usability test for design iteration.
        <h2>Results</h2>
        After a usability test with 20 CPF members, users are satisfied with the new homepage. They think it has a more
        modern style and it's convenient to find the information with the filter. With the calculator, it's easier to
        understand different plans and results. Overall, <b>users think the redesigned version is more engaging and personalised</b>.
        <h2>Lessons learned</h2>
        Since it's a Government website, I learned a lot from designing a website with <b>DSS rules and WCAG accessibility</b>.
        I also learned a lot from transferring the user's need into innovative ideas. For example, designing the page with a
        calculator upfront makes it more straightforward for users to understand the scheme.<br />
        <br />
        I joined the project from the start , all the way through interview of users and usability test stage with vendors.
        I learned how to cooperate with designers from vendors and manage the work for them. I enjoyed collecting user's
        needs and <b>transforming an old website into a young and innovative one</b>.
      </Text>
      <Space height='64' />
      <Text centered>
        <video autoplay muted loop playsinline controls height='365' src='/img/cpf/12.mp4' />
      </Text>
    </ProjectPage>
  );
}

