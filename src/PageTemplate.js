import './App.css';
import * as React from 'react';
import { ProjectPage, Columns, Text, HeroText, IconText, Image, Space, Anchor, ImageDouble, ImageDoubleText, ImageText } from './Components'

export function PageTemplate() {
  return (

//TABLE OF CONTENTS
    <ProjectPage title='#EXPERIENCE NAME' anchors={{
      top: 'Overview', 
      research: 'Research', 
      ideation: 'Ideation', 
      usability: 'Usability Testing', 
      final: 'Final design', 
      challenges: 'Challenges'
    }}>

{/* SPLASH IMAGES */}
      <ImageDouble
        image1_path={'about.webp'}
        image2_path={'about.webp'}
        cwidth='70'
        dwidth='45'
        mwidth='35'
      />

{/* TITLE */}
      <h1>#EXPERIENCE NAME</h1>
      <Space height='32' />

{/* HEADER */}
      <Columns>
        <Text width='100' ><h2 style={{ marginTop: 0 }}>Team</h2>
          #Person 1<br />
          #Person 2
        </Text>

        <Text width='100' ><h2 style={{ marginTop: 0 }}>Tools</h2>
          #Skill 1<br />
          #Skill 2
        </Text> 
   
        <Text width='100' ><h2 style={{ marginTop: 0 }}>Timeline</h2># months</Text>
      </Columns>

{/* BRIEF */}
        <Text>
        <h2>Brief</h2>
        # BRIEF INTRODUCTION

        <h2>Problem</h2>
        # PROBLEM STATEMENT
        </Text>

{/* HOW MIGHT WE STATEMENT */}
      <HeroText>
        #HOW MIGHT WE?
      </HeroText>

{/* GOALS */}
      <Text>
        <h2>Goals</h2>
        <ul>
          <li>#GOAL 1</li>
          <li>#GOAL 2</li>
          <li>#GOAL 3</li></ul>
      </Text>

{/* RESEARCH */}
      <Text>
        <Anchor id='research' /><h2>Research</h2>
        #RESEARCH STATEMENT HERE
      </Text>
      <Space height='32' />

      <ImageDouble 
        image1_path='about.webp'
        image2_path='about.webp'
      />

{/* COMPETITIVE ANALYSIS */}
      <Text>
        <h2>Lessons from competitors:</h2>
        <ul>
          <li>#ITEM 1</li>
          <li>#ITEM 2</li>
          <li>#ITEM 3</li></ul>
      </Text>
      <Space height='32' />
      <Image width='22' mwidth='40' url='about.webp' />

{/* IDEATION */}
      <Text>
        <Anchor id='ideation' />
        <h2>Ideation for #PRODUCT_TYPE</h2>
        #IDEATION TEXT HERE
      </Text>
      <Space height='32' />

      <Columns desktop>
        <Image width='20' url='uppermed/4.1.png' />
        <Image width='20' url='uppermed/4.2.png' />
        <Image width='20' url='uppermed/4.3.png' />
      </Columns>
      <Columns desktop>
        <Text width='33'>
          <h3 style={{ textAlign: 'center' }}>#DESIGN TYPE</h3>
        </Text>
        <Text width='33'>
          <h3 style={{ textAlign: 'center' }}>#DESIGN TYPE</h3>
        </Text>
        <Text width='33'>
          <h3 style={{ textAlign: 'center' }}>#DESIGN TYPE <img src='/img/crown.webp' style={{ height: '20px', width: '20px' }} /></h3>
        </Text>
      </Columns>
      <Columns desktop>
        <IconText width='33' icon='thumbs_up.webp'>#GOOD DETAIL</IconText>
        <IconText width='33' icon='thumbs_up.webp'>#GOOD DETAIL</IconText>
        <IconText width='33' icon='thumbs_up.webp'>#GOOD DETAIL</IconText>
      </Columns>
      <Columns desktop>
        <IconText width='33' icon='thumbs_down.webp'>#BAD DETAIL</IconText>
        <IconText width='33' icon='thumbs_down.webp'>#BAD DETAIL</IconText>
        <IconText width='33' icon='thumbs_down.webp'>#BAD DETAIL</IconText>
      </Columns>

      <Text mobile>
        <h3 style={{ textAlign: 'center' }}>#DESIGN TYPE</h3>
      </Text>
      <Space height='32' mobile />
      <Image width='50' url='uppermed/4.1.png' mobile />
      <IconText icon='thumbs_up.webp' mobile>#GOOD DETAIL</IconText>
      <IconText icon='thumbs_down.webp' mobile>#BAD DETAIL</IconText>
      <Text mobile>
        <h3 style={{ textAlign: 'center' }}>#DESIGN TYPE</h3>
      </Text>
      <Space height='32' mobile />
      <Image width='50' url='uppermed/4.2.png' mobile />
      <IconText icon='thumbs_up.webp' mobile>#GOOD DETAIL</IconText>
      <IconText icon='thumbs_down.webp' mobile>#BAD DETAIL</IconText>
      <Text mobile>
        <h3 style={{ textAlign: 'center' }}>Two-later design <img src='/img/crown.webp' style={{ height: '20px', width: '20px' }} /></h3>
      </Text>
      <Space height='32' mobile />
      <Image width='50' url='uppermed/4.3.png' mobile />
      <IconText icon='thumbs_up.webp' mobile>#GOOD DETAIL</IconText>
      <IconText icon='thumbs_down.webp' mobile>#BAD DETAIL</IconText>

{/* USER FLOW */}
      <Text>
        <h2>User flow</h2>
        #USER FLOW TEXT
      </Text>
      <Space height='32' />      
      <Image width='82' url='about.webp' rounded />

{/* UI ILLUSTRATION */}
      <Text>
        <h2>UI and Illustration ideation</h2>
        #UI SUMMARY
      </Text>
      <Space height='32' />

      <ImageText
        image_path='about.webp'
        text_disp={ <Text width='35' vcentered>
                      <h3>#FIG TITLE</h3>
                      #FIG CAPTION
                    </Text> }
      />

{/* USABILITY TESTING */}
      <Text>
        <Anchor id='usability' /><h2>Usability testing</h2>
        #USABILITY TESTING SUMMARY
      </Text>
      <Space height='32' desktop />

      <ImageDoubleText
        image1_path='about.webp'
        image2_path='about.webp'
        text_disp={<Text><h3>#FEATURE 1</h3>
        <ul>
          <li>#ITEM 1</li>
          <li>#ITEM 2</li>
          <li>#ITEM 3</li>
        </ul></Text>}
        />

{/* FINAL DESIGN*/}
      <Text>
        <Anchor id='final' /><h2>Final design</h2>
        #FINAL DESIGN TEXT
      </Text>
      <Space height='32' desktop/>

      <ImageDoubleText
        image1_path='about.webp'
        image2_path='about.webp'
        text_disp={<Text><h3>#FEATURE 1</h3>
        <ul>
          <li>#ITEM 1</li>
          <li>#ITEM 2</li>
          <li>#ITEM 3</li>
        </ul></Text>}
        />

      <Space height='32' desktop/>

      <ImageDoubleText
        image1_path='about.webp'
        image2_path='about.webp'
        text_disp={<Text><h3>#FEATURE 2</h3>
        <ul>
          <li>#ITEM 1</li>
          <li>#ITEM 2</li>
          <li>#ITEM 3</li>
        </ul></Text>}
        />

      <Space height='32' desktop/>

      <ImageDoubleText
        image1_path='about.webp'
        image2_path='about.webp'
        text_disp={<Text><h3>#FEATURE 3</h3>
        <ul>
          <li>#ITEM 1</li>
          <li>#ITEM 2</li>
          <li>#ITEM 3</li>
        </ul></Text>}
        />

      {/* CHALLENGES */}
      <Text>
        <Anchor id='challenges' /><h2>Challenges</h2>
        #CHALLENGES STATEMENT
      </Text>
    </ProjectPage>
  );
}
