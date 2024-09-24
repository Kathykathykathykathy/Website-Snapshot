import './App.css';
import * as React from 'react';
import { ProjectPage, Columns, Text, Anchor, Image, Space, HeroText, TeamToolsTimeline } from './Components'

export function Bt() {
  return (
    <ProjectPage title='BT Hero' anchors={{ top: 'Overview', research: 'Research', ideation: 'Ideation', outcomes: 'Outcomes', prototype: 'Prototype' }}>
      <Image width='22' mwidth='45' url='bt/1.png' />
      <h1>BT Hero</h1>
      <Space height='32' />

      <TeamToolsTimeline
      text_team = {<p>Project managers<br />Developers</p>}
      text_tool = {<p>Figma<br />Adobe Photoshop<br />Adobe Illustrator</p>}
      text_time = {<p>3 months</p>}
      />

      <Text>
        <h2>Brief</h2>

        This project aimed to help UK internet service provider BT solve their customer service issue with an innovative digital service solution.

        <h2>Problem</h2>
        
        There are challenges in having a well-connected BT Internet for every home in the UK, there have been many complaints found on the difficulty of communication with customer service. 

      </Text>


      <HeroText>
        How can we enhance BT Internet connectivity for UK homes, tackling challenges raised in customer complaints about communication difficulties with customer service?
      </HeroText>
      <Text>
        <Anchor id='research' /><h2>Research</h2>
        Interviewed with 14 people who bought BT broadband, 14/ 14 users have internet problem. 7/14 users have experience can't
        find the BT service people in time. 8/14 users have difficulty in solving the issues by themselves. 9/14 users will wait
        for their family to come home to solve the issues.
      </Text>
      <Space height='32' />
      <Image width='70' mwidth='80' url='bt/2.jpg' rounded />
      <Text>
        <h2>Synthesize</h2>
        Bases on the study, here are the 4 problems I decided to focus on:
        <ul>
          <li>Difficult to find the BT service person through the phone service, it always <b>transfers over 5 times</b> to the final service person.</li>
          <li><b>Challenge for people live in the country side</b> take the product to the store to fix.</li>
          <li>Difficult to solve the internet problem of BT broadband by themselves.</li>
          <li><b>Difficult for the BT service people go to the customer's house in a short time</b>, if the customers live in the coutryside.</li>
        </ul>
        <h2>Persona</h2>
        To help communicate information about users that I collected during research, I created a provisional persona.
      </Text>
      <Space height='32' />
      <Image width='65' mwidth='80' url='bt/3.jpg' rounded />
      <Space height='32' />
      <Text>
        <h2>Design strategy</h2>
        Based on the findings, I start to think the solution for this issue.
      </Text>
      <Columns>
        <Text width='50'>
          <h3>What users want</h3>
          Someone can fix my internet issue immediately
          <h3>What BT wants</h3>
          <ul>
            <li>Positive referral behavior</li>
            <li>Good reputation</li>
            <li>Intention to keep subscribing</li>
          </ul>
        </Text>
        <Text width='50'>
          <h3>Concept generation</h3>
          <ul>
            <li>Internet broadband problem can be very complex and <b>confusing for people to solve by themselves</b></li>
            <li>Human brain tends to treat the objects like a person.</li>
            <li><b>The best way to solve the problem for human is with a person.</b></li>
          </ul>
        </Text>
      </Columns>
      <Space height='32' />
      <Image width='62' mwidth='80' url='bt/4.png' rounded />
      <Space height='64' />
      <Text>
        <h3>Task goals</h3>
        <ul>
          <li><b>Fix customers' broadband with a real person not machine.</b></li>
          <li>Create a community service to <b>solve the distance problem from service to customers</b>.</li>
          <li>Create a <b>reliable and trust system</b> based on service of “BT HERO"</li>
        </ul>
      </Text>
      <Text>
        <Anchor id='ideation' /><h2>Ideation</h2>
      </Text>
      <Columns>
        <Text width='50'>
          <h3 style={{ marginTop: 0 }}>Service blueprint</h3>
          Created this service blueprints to give an organization a comprehensive understanding of its service and the underlying resources
          and processes — seen and unseen to the user — that make it possible. Focusing on this larger understanding (alongside more
          typical usability aspects and individual touchpoint design) provides strategic benefits for the business.
        </Text>
        <Space height='32' mobile />
        <Image width='40' mwidth='80' url='bt/5.jpg' rounded />
      </Columns>
      <Space height='32' />
      <Text>
        <h3>Storyboard</h3>
      </Text>
      <Space height='32' />
      <Image width='80' url='bt/6.jpg' rounded />
      <Space height='64' />
      <Columns>
        <Text width='50'>
          <h3 style={{ marginTop: 0 }}>Functional map</h3>
          I created the functional map based on users main feeds, it can focus on two main goal.
          <ul>
            <li>Find out the BT hero in a simple and quick way.</li>
            <li>Reward system and the communication with BT hero.</li>
          </ul>
        </Text>
        <Space height='32' mobile />
        <Image width='40' mwidth='80' url='bt/7.png' rounded />
      </Columns>
      <Space height='32' />
      <Text>
        <Anchor id='outcomes' /><h2>Outcomes</h2>
        The concept is called BT HERO, it is a network of people who has internet know how and gained knowledge from BT with
        other regular customers, and make task support transaction on a monetary basis. BT Hero are loyal customers, well skilled
        or even BT Employees that have knowledge in creating the right BT home broadband experience. Customer can use BT hero App
        to contact the BT hero and see the the closest BT Hero to them for receiving support.
        <h3>UI flow</h3>
        In the wireframes, all discussed features were translated into screen-by-screen solutions with a logical flow that interlinks each other.
        This flow displays from registration to searching the BT hero and review and reward system.
      </Text>
      <Space height='32' />
      <Image width='80' url='bt/8.jpg' rounded />
      <Space height='32' />
      <Text>
        <h3>Hi-Fi UI</h3>
        Moving forward with the process, I turned my Lo-Fi sketches into Hi-Fi prototypes. Below are the screen comparison showing before and after side by side.
      </Text>
      <Space height='32' />
      <Columns width='80' desktop>
        <Text centered width='50'><b>Before</b></Text>
        <Text centered width='50'><b>After</b></Text>
      </Columns>
      <Columns width='85' mobile>
        <Text centered width='50'><b>Before</b></Text>
        <Text centered width='50'><b>After</b></Text>
      </Columns>
      <Space height='32' />
      <Columns width='80' desktop>
        <Image width='27' url='bt/9.png' />
        <Image width='27' url='bt/10.png' />
      </Columns>
      <Columns width='85' mobile>
        <Image width='40' url='bt/9.png' />
        <Image width='40' url='bt/10.png' />
      </Columns>
      <Space height='64' />
      <Columns width='80' desktop>
        <Image width='27' url='bt/11.png' />
        <Image width='27' url='bt/12.png' />
      </Columns>
      <Columns width='85' mobile>
        <Image width='40' url='bt/11.png' />
        <Image width='40' url='bt/12.png' />
      </Columns>
      <Space height='64' />
      <Columns width='80' desktop>
        <Image width='27' url='bt/13.png' />
        <Image width='27' url='bt/14.png' />
      </Columns>
      <Columns width='85' mobile>
        <Image width='40' url='bt/13.png' />
        <Image width='40' url='bt/14.png' />
      </Columns>
      <Space height='32' />
      <Text>
        <Anchor id='prototype' /><h2>Prototype</h2>
        Clickable prototype was created to test my ideas and validate the redesign. It was extremely helpful for me to test users on
        the tasks that I focused on to gain realistic insights, also understand what worked well and what requires further improvement.
        The prototype only covers the aspects of tasks that I planned to test users on.
        <h2>Validation</h2>
      </Text>
      <Space height='32' />
      <Image width='80' url='bt/15.png' rounded />
      <Text>
        <h2>Conclusion</h2>
        The BT company loved how we successfully addressed and resolved many of the existing pain points. In addition, all participants
        all think BT hero service can solve their wifi issues before. We were excited to show the results of our Hi-Fi validation and
        have metrics to compare our success rates during the process.
      </Text>
    </ProjectPage>
  );
}

