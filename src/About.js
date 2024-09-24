import './App.css';
import * as React from 'react';
import { AppBar, defaultWidth, Image, Text, Space, Columns, Footer, HeroText } from './Components'

export function About() {
  React.useEffect(() => {
    document.title = 'Katie Su - About Me';
  }, []);
  return (
    <>
      <div id='root' style={{height:'100%'}}>
      <AppBar />
      <Space height='24' />
      <div class='project' style={{width:'1120px', display:'flex', flexDirection:'column',flex:'1 100%'}}>
        <Columns>
          <Image width='40' mwidth='80' url='about.webp' margin='40px 32px auto' rounded/>
          <Text width='65'>
          <h1 style={{fontFamily: 'Fraunces', fontSize: '30px', textAlign:'left', padding: 0, margin:'24px 0'}}>Fun things about me!</h1>
            👩‍🎓 While studying for degrees in information management and industrial design, I found my interest in using design to solve everyday issues. I am currently studying in the <span style={{backgroundColor:'#ADDBEB', fontWeight:'700'}}>human computer interaction program</span> at UC Santa Cruz to further improve my UX design skills.<br/><br/>

            💼 I have worked as a UX designer for Jobscan, Grab and Binance. I like working with fast paced and dynamic teams and am experienced in conducting <span style={{backgroundColor:'#FED7D0', fontWeight:'700'}}>user research, usability tests and interactive designs</span>. <br/><br/>

            🏝️ I love to travel and have been to over <span style={{backgroundColor:'#ADDBEB', fontWeight:'700'}}>35 countries</span> including living in Bali as a digital nomad.<br/><br/>

            🎨 I love painting and won the <span style={{backgroundColor:'#FED7D0', fontWeight:'700'}}>Taiwanese national painting prize</span> when I was 10 years old. I also enjoy brainstorming startup ideas, practicing mindful meditation, and watching food shows on Netflix. <br/><br/>
          </Text>
        </Columns>
      </div>
      <div style={{}}><Footer /></div>
      </div>
    </>
  );
}
