import './App.css';
import * as React from 'react';

export const defaultWidth = 1128;
export const defaultMargin = 32;

export function Button({ children, link, blank, extra_class }) {
  return (<a href={link} className={'button ' + extra_class} target={blank ? '_blank' : undefined}>{children}</a>);
}

export function AppBar() {
  return (
    <>
      <div class='navbar'>
        <div class='navcenter'>
          <a href='/#top' class='title'>SU</a>
          <div class='navbuttons'>
            <Button link='/#projects'>Projects</Button>
            <Button link='/about'>About</Button>
            <Button link='/resume.pdf' blank>Resume</Button>
          </div>
        </div>
      </div>
      <div class='nspace' />
    </>);
}

export function Profile() {
  return (
    <div class='profile'>
      <div class='profilec'>
        <img src='/img/logo.webp' />
        <div class='desc'>
          <div class='heading' style={{fontFamily: 'Fraunces', fontSize: '30px'}}>
            Hi there, I'm Katie! {String.fromCodePoint('0x1F44B')}
          </div>
          <div class='text' style={{fontSize:'24px'}}>
          I'm a UX designer with a background in industrial design and information management. I transform complex processes into <span style={{backgroundColor:'#ADDBEB', fontWeight:'700'}}>simple</span> and <span style={{backgroundColor:'#FED7D0', fontWeight:'700'}}>happy</span> solutions!
          </div>
          <div class='text' style={{fontSize:'16px', color:'#444444'}}>UC Santa Cruz masters student in <b>Human Computer Interaction</b> (Dec 2024)</div>
          <Button link='mailto:kathykathysu@gmail.com' extra_class='bigbutton'>Let's chat!</Button>
        </div>
        <div class='down'>
          <a href='/#projects'><img src='/img/expand.png' /></a>
        </div>
      </div>
    </div>
  )
}

export function ProjectPreview({ children, img, title, link }) {
  return (
    <div class='prev'>
      <a href={link}>
        <img src={'/img/' + img} />
        <div class='heading'>{title}</div>
        <div class='text'>{children}</div>
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <div class='footer'>
      <div class='footerl'>Designed and Coded by Katie Su 2024</div>
      <Button link='mailto:kathykathysu@gmail.com'>Email</Button>
      <Button link='https://www.linkedin.com/in/tzuwei-su/' blank>LinkedIn</Button>
    </div>
  );
}

export function Space({ height, desktop, mobile }) {
  return (
    <div className={(desktop ? 'desktop' : (mobile ? 'mobileblock' : ''))} style={{ height: height + 'px' }}></div>
  );
}

export function Columns({ children, width, padding, desktop, mobile }) {
  return (
    <div className={'columns' + (desktop ? 'd' : '') + (mobile ? 'm' : '')} style={{ width: (width ? width : 100) + '%', paddingLeft: (padding ? padding : 0) + 'px', paddingRight: (padding ? padding : 0) + 'px'}}>{children}</div>
  );
}

export function Image({ width, mwidth, url, rounded, desktop, mobile, padding, margin }) {
  if (mwidth) {
    return (
      <>
        <img class='pimg desktop' src={'/img/' + url} alt='' style={{ width: width + '%', borderRadius: rounded ? '20px' : undefined,padding:padding, margin:margin }} />
        <img class='pimg mobile' src={'/img/' + url} alt='' style={{ width: mwidth + '%', borderRadius: rounded ? '20px' : undefined, padding:padding, margin:margin }} />
      </>
    );
  }
  return (
    <img className={'pimg ' + (desktop ? 'desktop' : (mobile ? 'mobile' : ''))} src={'/img/' + url} alt='' style={{ width: width + '%', borderRadius: rounded ? '20px' : undefined,padding:padding, margin:margin}} />
  );
}

export function Text({ children, width, vcentered, centered, padding='auto', desktop, mobile }) {
  return (
    <div className={'ptext ' + (desktop ? 'desktop' : (mobile ? 'mobileblock' : ''))} style={{
      width: width + '%',
      margin: vcentered ? 'auto 0' : undefined,
      textAlign: centered ? 'center' : undefined,
      padding: padding
    }}>{children}</div>
  );
}

export function HeroText({ children }) {
  return (
    <h2 style={{
      textAlign: 'center',
      width: '100%',
      boxSizing: 'border-box',
      margin: 0,
      padding: '80px ' + defaultMargin + 'px 24px ' + defaultMargin + 'px'
    }}>{children}</h2>
  );
}

export function IconText({ children, width, icon, desktop, mobile, padding }) {
  return (
    <Text width={width} padding={padding} desktop={desktop} mobile={mobile}>
      <div style={{ display: 'flex', margin: '8px 0', alignItems: 'center' }}>
        <img src={'/img/' + icon} style={{ height: '40px', width: '40px', display: 'flex', margin: 'auto 8px auto 2px' }} />
        <div>{children}</div>
      </div>
    </Text>);
}

export function Quote({ children, width, padding }) {
  return (
    <div class='quote' style={{ width: width + '%', padding:padding }}>
      <img src='/img/grab/1224.png' />
      <div class='quotetext'>"{children}"</div>
    </div>
  )
}

export function ProjectPage({ children, title, anchors }) {
  React.useEffect(() => {
    document.title = ('Katie Su - ' + title);
  }, []);
  return (
    <>
      <AppBar />
      <div class='anchor' style={{ position: 'fixed', top: 0, height: '100vh', zIndex: 2, display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: 'auto 32px' }}>
          {
            Object.entries(anchors)
              .map(([key, value]) => <><a class='anchor' href={'#' + key}>{value}</a><br /></>)
          }
        </div>
      </div>
      <Space height='64' />
      <div class='project'>{children}</div>
      <Space height='64' />
      <Footer />
    </>
  )
}

export function Anchor({ id }) {
  return (
    <a id={id} style={{ display: 'block', position: 'relative', top: '-100px', visibility: 'hidden' }} />
  );
}

///////////////////////////
// Structural Components //
///////////////////////////

export function ImageTextRight({ image_path,   // Image path
                            text_disp,    // Formatted text to display
                            vcentered,    // Vertically center text
                            cwidth = 100, // Feature width
                            iwidth = 49,  // Image width, desktop
                            mwidth = 90, // Image width, mobile
                            twidth = 100, // Text width
                            padding = 16, // Padding around feature
                            mspace = '0' // Vertical spacing, mobile
                          }) {
  return(
    <Columns width={cwidth} padding={padding}>
    <Image width={iwidth} mwidth={mwidth} url={image_path} />
    <Space height={mspace} />
    <Text vcentered={vcentered} width={twidth} desktop>{text_disp}</Text>
    <Text padding={padding} mobile>{text_disp}</Text>
    </Columns>  
  );
}

export function ImageDouble({ image_path1,  // Image path 1
                              image_path2,  // Image path 2
                              cwidth = 100, // Feature width
                              cmwidth = {cwidth},
                              dwidth = 49,  // Image widths, desktop
                              mwidth = 100, // Image widths, mobile
                              padding = 24  // Padding around feature
                            }) {
  return(
    <div>
    <Columns width={cwidth} padding={padding} desktop>
      <Image width={dwidth} url={image_path1} />
      <Image width={dwidth} url={image_path2} />
    </Columns>  
    <Columns width={cmwidth} padding={padding} mobile>
      <Image mwidth={mwidth} url={image_path1} />
      <Image mwidth={mwidth} url={image_path2} />
    </Columns> 
    </div>
  );
}

export function ImageDoubleText({ image_path1,  // Image path 1
                                  image_path2,  // Image path 2
                                  text_disp,    // Formatted text to display
                                  cwidth = 100, // Feature width
                                  twidth = 45,  // Text width
                                  dwidth = 25,  // Image widths, desktop
                                  mwidth = 45,  // Image widths, mobile
                                  padding = 24  // Padding around feature
                                }) {
  return(
    <div>
      <Columns width={cwidth} padding={padding} desktop>
        <Image width={dwidth} url={image_path1} />
        <Image width={dwidth} url={image_path2} />
        <Text width={twidth} vcentered desktop>{text_disp}</Text>
      </Columns>
      <Columns width={cwidth} padding={padding} mobile>
        <Image mwidth={mwidth} url={image_path1} />
        <Image mwidth={mwidth} url={image_path2} />
      </Columns>
      <Space height='32' mobile />
      <Text mobile>{text_disp}</Text>
    </div>
  );
}

export function ImageCaptions({ image_path1,
                                image_path2 = null,
                                image_path3 = null,
                                text_disp1,
                                text_disp2 = null,
                                text_disp3 = null,
                                cwidth = 100,
                                dwidth = 45,
                                mwidth = 90,
                                twidth = 100,
                                padding = 0
                              }) {
  return(
    <div>
      <Columns width={cwidth} padding={padding} desktop>
          <Image width={dwidth} url={image_path1} />
        {image_path2 === null ? null : <Image width={dwidth} url={image_path2} />}
        {image_path3 === null ? null :<Image width={dwidth} url={image_path3} />}
      </Columns>
      <Columns width={cwidth} padding={padding} desktop>
          <Text width={twidth} padding={padding}>{text_disp1}</Text>
        {image_path2 === null ? null : <Text width={twidth} padding={padding}>{text_disp2}</Text>}
        {image_path3 === null ? null : <Text width={twidth} padding={padding}>{text_disp3}</Text>}
      </Columns>

      <Image width={mwidth} url={image_path1} padding={padding} mobile />
      <Text width={twidth} mobile>{text_disp1}</Text>
      {image_path2 === null ? null : <span><Space height='32' mobile/>
        <Image width={mwidth} url={image_path2} padding={padding} mobile />
        <Text width={twidth} mobile>{text_disp2}</Text>
      </span>}
      {image_path3 === null ? null : <span>
        <Space height='32' mobile/>
        <Image width={mwidth} url={image_path3} padding={padding} mobile />
        <Text width={twidth} mobile>{text_disp3}</Text>
        </span>}
    </div>
    );
  }

export function TeamToolsTimeline({ text_team, 
                                    text_tool, 
                                    text_time,
                                    dwidth = 100,  // Feature width, desktop
                                    mwidth = 100, // Featurewidth, mobile
                                    width1d = 95, // Width team, desktop
                                    width2d = 85, // Width tools, desktop
                                    width3d = 30, // Width time, desktop
                                    width1m = 60,// Width team, mobile
                                    width2m = 50, // Width tools, mobile
                                    width3m = 45  // Width time, mobile
                                  }){
  return(
    <div>
      <Columns width={dwidth} desktop>
        <Text width={width1d} margin='0'>
          <h2 style={{marginTop: 0 }}>Team</h2>
          {text_team}
        </Text>      
        <Text width={width2d}>
          <h2 style={{marginTop: 0 }}>Tools</h2>
          {text_tool}
        </Text>
        <Text width={width3d}>
          <h2 style={{marginTop: 0 }}>Time</h2>
          {text_time}
        </Text>
      </Columns>
      <Columns width={mwidth} mobile>
        <Text width={width1m}>
          <h2 style={{marginTop: 0 }}>Team</h2>
          {text_team}
        </Text>      
        <Text width={width2m}>
          <h2 style={{marginTop: 0 }}>Tools</h2>
          {text_tool}
        </Text>
        <Text width={width3m}>
          <h2 style={{marginTop: 0 }}>Time</h2>
          {text_time}
        </Text>
      </Columns>
      </div>
  );
}