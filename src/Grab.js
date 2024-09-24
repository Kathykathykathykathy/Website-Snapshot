import './App.css';
import * as React from 'react';
import { Anchor, ProjectPage, Columns, Text, HeroText, Image, Quote, Space, TeamToolsTimeline } from './Components'

export function Grab() {
  return (
    <ProjectPage title='GrabFood App' anchors={{
      top: 'Overview', persona: 'Persona', solution: 'Solution', outcome: 'Outcome'
    }}>
      <Image width='22' mwidth='45' url='grab/1.png' />

      <h1>GrabFood Merchant App</h1>
      <Space height='32' />

      <TeamToolsTimeline
      text_team = {<p>Product managers<br />Developers</p>}
      text_tool = {<p>Figma</p>}
      text_time = {<p>4 months</p>}
      />

      <Text>
        <h2>Brief</h2>

        GrabFood helps merchants run their business and attract more customers. This project developed a campaign module feature to help merchant-partners run GrabFood marketing campaigns. Businesses using campaigns saw an average increase of daily orders of 50% during the trial period.


        <h2>Problem</h2>
        
        <ul>
          <li>Merchants in Jakarta struggle with new tech. How to let them create the campaign module by themselves via App?</li>
          <li>The content density and number of options in the menu are overwhelming. How can I make it easy for merchants to make the best choice and set it up?</li>
          <li>How to manage the completed, ongoing and upcoming activities easily?</li>  
        </ul> 
        </Text>

      <HeroText>
        How might we assist merchants in boosting their business revenue by developing a user-friendly self-service promotion module within the menu?
      </HeroText>
      <Text>
        <Anchor id='persona' /><h2>Persona</h2>
      </Text>

      <Columns width='80' desktop>
        <Text width='70'>
          <h3 style={{ marginTop: 0 }}>Peter</h3>
          Age: 40<br />Highest education: Junior high
          <h3>Painpoint</h3>
          I'm bad at utilising technology and wish for a simple and customised App to help me create the promotion.
          <h3>Need</h3>
          Earn more money for supporting the family
        </Text>
        <Image width='22' url='grab/1224.png' />
      </Columns>

      <Columns mobile>
        <Text width='60'>
          <h3 style={{ marginTop: 0 }}>Peter</h3>
          Age: 40<br />Highest ed: Junior high
        </Text>
        <Image width='18' url='grab/1224.png' />
      </Columns>
      <Text mobile>
        <h3>Painpoint</h3>
        I'm bad at utilising technology and wish for a simple and customised App to help me create the promotion.
        <h3>Need</h3>
        Earn more money for supporting the family
      </Text>

      <Text>
        <Anchor id='solution' /><h2>Solution</h2>

      </Text>
      <Space height='32' />
      <Columns width='90'>
        <Image width='24' mwidth='35' url='grab/2.png' />
        <Space height='32' mobile />
        <Text width='65'>
        <Text padding='96px 0px 0px 96px' desktop>
        <h3>Step by step creating the promotion</h3>
        <Space height='0' />
        Create a promotion step-by-step, focusing on one detail at a time (category, discount, menu, promo validity) to help users know where they are and make it easier for them to learn this function.
        </Text>
        <Space height='32' mobile />    
        <Text padding='0' mobile>
        <h3>Step by step creating the promotion</h3>
        Create a promotion step-by-step, focusing on one detail at a time (category, discount, menu, promo validity) to help users know where they are and make it easier for them to learn this function.
        </Text>
        <Space height='32' />
        <Quote width='100' padding='0px'>
          I feel so tired in my daily work, and I can only apply the promotion on menu after work.
          So, I need a straightforward and simple way to create the promotion on food.
        </Quote>
        </Text>
      </Columns>
      <Space height='32' />

      <Space height='32' />
      <Columns width='90'>
        <Image width='24' mwidth='35' url='grab/3.png' />
        <Text width='65'>
        <Text padding='96px 0px 0px 96px' desktop>
        <h3>Accordion design</h3>
        Hide secondary information by default, and help merchants quickly scan all topics first, and then expand desired details.
        </Text>
        <Space height='32' mobile />    
        <Text padding='0'  mobile>
        <h3>Accordion design</h3>
        Hide secondary information by default, and help merchants quickly scan all topics first, and then expand desired details.
        </Text>
        <Space height='32' />
        <Quote width='100' padding='0px 24px 0px 0px'>
          I prefer a simple and clear way to set the promotion.
        </Quote>
        </Text>
      </Columns>
      <Space height='32' />
      <Space height='32' />
      <Columns width='90'>
        <Image width='24' mwidth='35' url='grab/4.png' />
        <Text width='65'>
        <Text padding='96px 0px 0px 96px' desktop>
        <h3>Show my promotions list</h3>
        Show all promotions on the first page to allow users to check on their existing promotions. They can then easily decide whether to create new promotions or review previous ones.
        </Text>
        <Space height='32' mobile />    
        <Text  padding='0' mobile>
        <h3>Show my promotions list</h3>
        Show all promotions on the first page to allow users to check on their existing promotions. They can then easily decide whether to create new promotions or review previous ones.
        </Text>
        <Space height='32' />
        <Quote padding='0px 24px 0px 0px' width='100'>
          I would like to see how much discount I apply for my menu as it helps me to manage the promotion status.
        </Quote>
        </Text>
      </Columns>
      <Text>
        <Anchor id='outcome' /><h2>Outcome</h2>
        When a merchant wants to <b>create a promotion on a specific menu with % off in a time period</b>,
        she can use the Grab merchant app to create, review, and manage her promotions.
        She follows the steps to choose the promotion type first and select the menu she wants to apply it on.
        Lastly, she chooses a time period and can review before publishing the promotions.
        Step-by-step creation and review functions help merchants make promotions easier and less error-prone.
      </Text>
      <Space height='32' />
      <Image width='70' url='grab/5.jpg' rounded />
      <Text>
        <h2>Challenges</h2>
        As Indonesian merchants are not technically literate, it will be difficult for them to create a promotion via App. Thus, we created a Grab merchant tutorial to guide them to engage with the App easily. We went to Jakarta to do a usability test in a non-English environment, with a translator speaking in the local language to help us.
        After the usability test, we got positive feedback from the merchant about using online promotion to enhance orders. As a next step, we would iterate using the feedback from merchants on the functions and conduct a tutorial to guide merchants in using the App.
        <h2>Results</h2>
        This was released in Jan 2020 and had a great impact on merchants. Grab claims over <b>78,000 merchants</b> were onboarded to its platform between March and April, with small businesses seeing a <b>21% increase</b> in online revenue during the pandemic.
        <h2>Lessons learned</h2>
        It is a project that gave me opportunities to think about the user who isn't technically literate as well as how to create <b>a simple and easy to learn user experience. Use more icons, recommendation info to lead users select and make a decision easier</b>. Therefore, interviews and usability tests are quite important. I feel satisfied when merchants showed an 'amazing' reaction and gave positive feedback.
        I joined the project from the beginning, through the UX flow, usability testing, high-fidelity prototype design and desk-checking with the developer. I cooperated with one Project Manager, two Product Designers, one Researcher, content team, and App developers. It was a great experience for me to understand other merchant Apps in Asia, like Meituan, Foodpanda, and Ele.me. I learned from competitors on how to design the product to address our customers' pain points.
      </Text>
    </ProjectPage >
  );
}

