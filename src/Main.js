import './App.css';
import * as React from 'react';
import {AppBar, Profile, ProjectPreview, Footer} from './Components'

export function Main() {
  React.useEffect(() => {
    document.title = 'Katie Su - Portfolio';
  }, []);
  return (
    <>
      <AppBar />
      <Profile />
      <div style={{ position: 'relative', top: '-64px' }} id='projects' />
      <div class='row'>
        <ProjectPreview img='1.jpg' title='App for Peritoneal Dialysis Patients' link='uppermed'>
          An app helps peritoneal dialysis patients to manage their body data.
        </ProjectPreview>
        <ProjectPreview img='4.jpg' title='Singapore Government Web &amp; Mobile web' link='cpf'>
          A website redesigned to better visual communication and infomation navigation.
        </ProjectPreview>
      </div>

      <div class='row'>
        <ProjectPreview img='6.jpg' title='UK telecommunications app' link='bt'>
          An app helps BT telecommunications company solve customers service problem.
        </ProjectPreview>
        <ProjectPreview img='2.jpg' title='GrabFood merchant app' link='grab'>
          An app that helps merchants increase their business revenue by with promotion module.
        </ProjectPreview>
      </div>

      <div class='row' id='projects'>
        <ProjectPreview img='5.jpg' title='Design system for Government website' link='cpfdls'>
          A design library to build quality consistent interface for government's website.
        </ProjectPreview>
        <ProjectPreview img='3.jpg' title='Case study for a health app' link='health'>
          Discover ways to increase DAU for iOS Health app, focus on <b>UX research</b>.
        </ProjectPreview>
      </div>

      <Footer />
    </>
  );
}
