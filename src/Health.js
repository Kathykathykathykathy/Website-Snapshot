import './App.css';
import * as React from 'react';
import { Anchor, ProjectPage, Columns, Text, HeroText, Image, Space, ImageDouble, TeamToolsTimeline } from './Components'

export function Health() {
  return (
    <ProjectPage title='Health App' anchors={{
      top: 'Overview', research: 'Research', problems: 'Define problems', ideation: 'Ideation', final: 'Final design'
    }}>
      
{/* SPLASH IMAGES */}
    <ImageDouble
      image_path1={'health/1.png'}
      image_path2={'health/2.png'}
      cwidth='70'
      dwidth='35'
      cmwidth='100'
      mwidth='40'
    />
      <h1>Health App</h1>
      <Space height='32' />

      <TeamToolsTimeline
      text_team = {<p>Personal project</p>}
      text_tool = {<p>Figma</p>}
      text_time = {<p>6 months</p>}
      />

      <Text>
        <h2>Brief</h2>

        Redesign an Apple health app with the goal of boosting daily active users. This involves comprehending the current market, identifying challenges, and suggesting a gamification feature to entice users.

        <h2>Problem</h2>
        According to a 2022 report, 51% of older adults who don't use health apps say it's because of a lack of interest. Other reasons include:
        <ul>
          <li>32% never thought about using health apps</li>
          <li>20% are unsure whether health apps could help them</li>
          <li>14% are uncomfortable with technology</li>  
        </ul> 
        </Text>

      <HeroText>
        How might we increase daily active users (DAU) for a health app?
      </HeroText>
      <Text>
        <Anchor id='research' /><h2>Understanding the mobile health App market</h2>
      </Text>
      <Columns>
        <Text width='50' vcentered>
          <h3 style={{ marginTop: 0 }}>Mobile health Apps are a trend</h3>
          According to the report by ResearchAndMarkets, the global mobile health market size is expected to reach $316.8 billion by 2027. Statista expects this figure to rise up even higher — to $333 billion to 2025.
        </Text>
        <Space height='32' mobile />
        <Image width='35' mwidth='80' url='health/3.png' rounded />
      </Columns>
      <Space height='32' />
      <Columns>
        <Text width='50' vcentered>
          <h3 style={{ marginTop: 0 }}>But retention is a problem</h3>
          User retention for digital healthcare solutions is still a major issue. Only 7% of digital health app portfolios count more than 50,000 active users.
        </Text>
        <Space height='32' mobile />
        <Image width='35' mwidth='80' url='health/4.png' rounded />
      </Columns>
      <Text>
        <h2>Understanding users</h2>
        <h3>Interviewing 10 people who use an iOS health App</h3>
        <ul>
          <li>I use step counting but don't have much intention to use it every day. ~Jacky</li>
          <li>I use it everyday but only use it for sleeping function, set up a clock and sleep mode. ~Lung</li>
          <li>I rarely use it, because the detail function is not that complete as other sleeping App such as Ouro. ~Vic</li>
          <li>If I have the apple watch, I can sync up the data to the phone I might use the App everyday. ~Ruby</li>
        </ul>
        <h2>Creating a persona</h2>
      </Text>
      <Space height='32' />
      <Columns>
        <Text width='60'>
          <h3 style={{ marginTop: 0 }}>Needs</h3>
          <ul>
            <li>I have weak intention to use it everyday. And it won't need me to use it everyday.</li>
            <li>I wish there is a clear performance analysis showing my body condition.</li>
            <li>I wish to manage my health becoming my habit, and it is in a fun way.</li>
          </ul>
        </Text>
        <Text width='40' centered>
          <Space height='32' mobile />
          <b>"I want to manage my health in a fun and easy way ."</b><br />
          Peter, 30, a PM in Tech
          <Image width='50' mwidth='30' url='health/peter.webp' />
        </Text>
      </Columns>
      <Text>
        <Anchor id='problems' /><h2>Define problems</h2>
        <ul>
          <li>Low App awareness</li>
          <li>User can't see the value to use it</li>
          <li>Lack of commitment for users to keeping using it</li>
          <li>Low intention to use the App</li>
          <li>Lack of details in the function, like sleep doesn't provide sleep report</li>
        </ul>
        <h2>Competitior analysis</h2>
      </Text>
      <Columns>
        <Text width='60'>
          <h3>Take-aways from users' reviews on fitbit</h3>
          <h3>The good (user likes)</h3>
          <ul>
            <li>The notification remind the user to stand up after sit for a while</li>
            <li>Like the activity challenge with friend</li>
            <li>Performance tracking</li>
            <li>Goal setting</li>
            <li>Information with hierachy in dashboard</li>
            <li>Clean visuals</li>
          </ul>
          <h3>The bad (pain points)</h3>
          <ul>
            <li>Discoverability issue with tracking and logging exercise</li>
            <li>Users had difficulty finding some entry point to data</li>
          </ul>
          <h3>Needs (opportunities)</h3>
          <ul>
            <li>Taking note function</li>
            <li>Should track descending stairs not just climbing.</li>
          </ul>
        </Text>
        <Image width='30' mwidth='60' url='health/5.png' rounded />
      </Columns>
      <Text>
        <Anchor id='ideation' /><h2>What is the potential idea direction?</h2>
      </Text>
      <Columns width='90'>
        <Text width='40'>
          <h3>Business</h3>
          I want iOS app become user's everyday App and enhance more people to download it.
        </Text>
        <Text width='10' centered vcentered>
          <h1>+</h1>
        </Text>
        <Text width='40'>
          <h3>Users</h3>
          I don't have much intention to use it everyday, and if I don't have wearable device it will lose motivation to use it.
        </Text>
      </Columns>
      <Text>
        <Anchor id='final' /><h2>Final design features</h2>
        <ul>
          <li>Target setting</li>
          <li>Notifications</li>
          <li>Social integration</li>
          <li>User activity tracking</li>
        </ul>
      </Text>
      <Space height='64' />
      <Text centered>
        <video autoplay muted loop playsinline controls height='380' src='/img/health/6.mov' />
      </Text>
    </ProjectPage>
  );
}

