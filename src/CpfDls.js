import './App.css';
import * as React from 'react';
import { Anchor, ProjectPage, Columns, Text, HeroText, Image, Space, TeamToolsTimeline } from './Components'

export function CpfDls() {
  return (
    <ProjectPage title='CPF design library' anchors={{
      top: 'Overview', solution: 'Solution', outcome: 'Outcome', challenges: 'Challenges'
    }}>
      <Image width='60' mwidth='80' url='cpfdls/1.png' />

      <h1>CPF design library</h1>
      <Space height='32' />

      <TeamToolsTimeline
      text_team = {<p>Product owner<br />Product designers<br />Copy writers<br />Project managers<br />Developers</p>}
      text_tool = {<p>Figma</p>}
      text_time = {<p>6 months</p>}
      />

      <Text>
        <h2>Brief</h2>

        Initiate to build a design library along with government website redesigned, it helps our collaboration and communication among team members. They can provide a shared language and understanding of design principles.


        <h2>Problem</h2>
        
        <ul>
          <li>We created the design system after the first version of the prototype. Now the component is messy with many variations.</li>
          <li>The system should apply to different users: designers, developers, and content strategists and it should fit their needs.</li>
          <li>The way to use components is described in difficult to understand texts in current documents.</li>  
        </ul> 
        </Text>

      <HeroText>
        How might we design an internal system for CPF with consistent styles, themes, components, and patterns to enhance efficiency for both designers and developers working on the product?
      </HeroText>

      <Text>
        <Anchor id='solution' /><h2>Solution</h2>
        <h3>Clean up the component by defining the basic wireframe</h3>
        We cleaned up the component by redefining their grandfather wireframe of the component.
        Make sure the components all follow this definition to design.
        For example, create the definition of the card component and then design the component.
      </Text>
      <Space height='32' />

      <Columns width='80' desktop>
        <Image width='55' url='cpfdls/2.jpg' rounded />
        <Text vcentered><h1>→</h1></Text>
        <Image width='20' url='cpfdls/3.jpg' rounded />
      </Columns>

      <Columns width='85' mobile>
        <Image width='54' url='cpfdls/2.jpg' rounded />
        <Text vcentered><h2 style={{margin: 'auto 0'}}>→</h2></Text>
        <Image width='25' url='cpfdls/3.jpg' rounded />
      </Columns>

      <Space height='32' />
      <Text>
        <h3>Infographics showing examples help users engage</h3>
      </Text>
      <Space height='32' />
      <Image width='65' mwidth='80' url='cpfdls/4.png' rounded />
      <Text>
        <Anchor id='outcome' /><h2>Outcome</h2>
        We created the design system in a structure that can easily be used by designers, developers, and content strategists.
        The component structure uses atomic design, and this structure got positive feedback from the usability tests with over dozens of each user type.
      </Text>
      <Space height='32' />
      <Image width='65' mwidth='80' url='cpfdls/5.png' rounded />
      <Space height='64' />
      <Columns>
        <Text width='50'>
          <h3 style={{ marginTop: 0 }}>Typography</h3>
          Take typography and color for example. We tried to use infographics and do / don't examples to introduce our definition.
          The CPF Design System uses Montserrat as its main typeface. Montserrat is an open-source font provided by Google.<br />
          <b>Accessibility for typography:</b> We adopt WCAG 2.0 Level AA requirements, we define the typography in line spacing,
          paragraph space, and width. Line height is font size * 1.5 and use at least 16 px and 45-75 characters per line is
          acceptable for web. Also, choose a typography that emphasises clarity and legibility.
        </Text>
        <Space height='32' mobile />
        <Image width='33' mwidth='80' url='cpfdls/6.jpg' rounded />
      </Columns>
      <Space height='64' />
      <Columns>
        <Text width='50'>
          <h3 style={{ marginTop: 0 }}>Color</h3>
          For the usage, the color is defined by primary, secondary tertiary color. For the color scale,
          it is defined by the light and dark color. We use the example to show how to use the color.<br />
          <b>Accessibility for color:</b> Apply WCAG 2.0. Make sure the contrast between the text and background
          is greater than or equal to 4.5:1 for small text and 3:1 for large text. Don't use color alone to convey meaning.
          Use icons, written content, and other visual elements to reinforce clear communication of the content to be used by all roles.
        </Text>
        <Space height='32' mobile />
        <Image width='33' mwidth='80' url='cpfdls/7.jpg' rounded />
      </Columns>
      <Space height='64' />
      <Columns>
        <Text width='50'>
          <h3 style={{ marginTop: 0 }}>Accessibility</h3>
          For accessibility, do and don't examples can clearly show how to use the component with color.
        </Text>
        <Space height='32' mobile />
        <Image width='33' mwidth='80' url='cpfdls/8.jpg' rounded />
      </Columns>
      <Text>
        <Anchor id='challenges' /><h2>Challenges</h2>
        Design systems need to be satisfied for different perspectives of users. It is important to create a sense of alignment,
        understanding and shared ownership for designers, developers, product managers, and stakeholders.
        <h2>Next step for accessibility test</h2>
        <ul>
          <li>Check color contrast: Check the difference in light between the font and its background.</li>
          <li>Voice over tests the web accessibility for visually impaired people or normal people who like to 'listen' to the article.</li>
          <li>Use accessibility online tools such as axe, lighthouse to help check the site.</li>
        </ul>
        <h2>Lessons learned</h2>
        This project let me acquire lots of basic knowledge to create a digital product while we are designing the content of the design system.
        Not only did I know more about how to use each <b>component</b> but also I learned to understand more about <b>foundational</b> knowledge like color,
        typography, and grid. More importantly, I learned more about the <b>accessibility</b> for each element and component and this will help our
        product be more accessible to everyone.
      </Text>
    </ProjectPage>
  );
}

