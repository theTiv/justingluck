import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Icon from "../components/Icon/Icon"
import telegraphIcon from '../images/icon-telegraph.png';
import riverislandIcon from '../images/icon-riverisland.png';
import guardianIcon from '../images/icon-guardian.png';
import salmonIcon from '../images/icon-salmon.png';
import brandwidthIcon from '../images/icon-brandwidth.png';
import ogilvyIcon from '../images/icon-ogilvyaction.png';
import billingtoncartmellIcon from '../images/icon-billingtoncartmell.jpeg';
import hollerIcon from '../images/icon-holler.png';
import capablueIcon from '../images/icon-capablue.png';
import combinedIcon from '../images/icon-combined.png';
import creativeoriginIcon from '../images/icon-creativeorigin.png';
import digitalstormIcon from '../images/icon-digitalstorm.png';
import chscreativeIcon from '../images/icon-chscreative.jpeg';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="global__page">
      <h1>Who I've worked for as a developer</h1>
    </div>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="August 2018 - May 2019"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={telegraphIcon} alt="Telegraph Icon" />}
      >
        <h3 className="vertical-timeline-element-title">The Telegraph</h3>
        <h4 className="vertical-timeline-element-subtitle">Front End Software Engineer (Contract)</h4>
        <p>
        ES6/SASS developing new user experiences for Cruises, Hotels, Tours within
    Telegraph Travel and the React apps 'Pulse' a dashboard showing registration/subscriber stats, ‘My Telegraph’ personlisation for subscribers
    and ‘Atom CMS’ an internal web authoring tool.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="February 2015 - June 2018"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={riverislandIcon} alt="River Island Icon" />}
      >
        <h3 className="vertical-timeline-element-title">River Island</h3>
        <h4 className="vertical-timeline-element-subtitle">Senior Front End Developer (Contract)</h4>
        <p>Numerous projects including implementation of taxonomy components such as Typeahead, Price Slider and various filters, MVT testing using Maximiser and migrating of the codebase to use ES6/Babel/BEM and NPM modules for styling sitewide UI components. Development of React Apps within existing pages to power features such as Quick View on Product Listing pages and the Product Description page itself.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="August 2014 - January 2015"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={guardianIcon} alt="The Guardian Icon" />}
      >
        <h3 className="vertical-timeline-element-title">The Guardian</h3>
        <h4 className="vertical-timeline-element-subtitle">Front End Developer Mobile Apps (Contract)</h4>
        <p>
        Implemented new features on HTML5 templates that power news articles, blogs and sports sections of both the iOS &amp; Android native apps. Created new JavaScript functions/methods handling calls by native code that interact with their various APIs, maintaining and extending BEM modular SASS structure and making sure all code is highly optimised to meet their strict speed targets.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="April 2014 - July 2014"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={salmonIcon} alt="Salmon Icon" />}
      >
        <h3 className="vertical-timeline-element-title">Salmon</h3>
        <h4 className="vertical-timeline-element-subtitle">Front End Developer (Contract)</h4>
        <p>
        I worked on two projects for the well known e-commerce specializing digital agency. The first was an international website build for Dulux. The sophisticated website utilised a combination of advanced client side frameworks namely Knockout JS. The second was the Selfridges Mobile website. The desktop site is responsive however JavaScript heavy and the client decided they wanted to maintain a separate performance optimised mobile offering using RequireJS and Backbone.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="October 2013 - March 2014"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={riverislandIcon} alt="River Island Icon" />}
      >
        <h3 className="vertical-timeline-element-title">River Island</h3>
        <h4 className="vertical-timeline-element-subtitle">Senior Front End Developer (Contract)</h4>
        <p>Worked on their first Responsive website that launched January 2014. The website was one of the first responsive websites released by a major high street retailer. .NET environment, Razor templating language, responsive templates for Umbraco CMS. 
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="May 2013 - October 2013"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={brandwidthIcon} alt="Brandwidth Icon" />}
      >
        <h3 className="vertical-timeline-element-title">Brandwidth</h3>
        <h4 className="vertical-timeline-element-subtitle">Drupal Front End Developer (Contract)</h4>
        <p>
        Responsive Drupal theme development/website rebrand for global leader in payment services Worldpay (HTML/CSS3/JavaScript) and Toyota UK's Website (platform migration).
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="February 2013 - April 2013"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={ogilvyIcon} alt="Ogilvy Action Icon" />}
      >
        <h3 className="vertical-timeline-element-title">OgilvyAction</h3>
        <h4 className="vertical-timeline-element-subtitle">UI/Responsive Front End Web Developer (Contract)</h4>
        <p>
          Responsive UI (HTML/CSS3/JavaScript) and iPad app (HTML, CSS3 ft. Hardware Accelerated transitions, jQuery, PhoneGap) for major pharmaceutical brands Bayer and AstraZeneca.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="January 2013 - February 2013"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={billingtoncartmellIcon} alt="Brandwidth Icon" />}
      >
        <h3 className="vertical-timeline-element-title">Billington Cartmell</h3>
        <h4 className="vertical-timeline-element-subtitle">Front End Web Developer (Contract)</h4>
        <p>
        At Billington Cartmell (now rebranded as Hey Human) I worked on various small projects anywhere from one day to a week in length and included work for Uniliver brand websites Surf and Dove, a John Frieda HTML Email campaign and a nationally advertised Babybel Comic Relief 2013 website featuring Alicia Dixon with a Joke Competition theme.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="December 2012"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={hollerIcon} alt="Holler Icon" />}
      >
        <h3 className="vertical-timeline-element-title">Holler Digital</h3>
        <h4 className="vertical-timeline-element-subtitle">Freelance Developer (Contract)</h4>
        <p>
        Short pre-Christmas contract with London Digital Agency Holler Digital/Leo Burnett (a Publicis company) to deliver the 2012 Highlights website for world class brand Red Bull. A competition site based on the 12 days leading up to Christmas, entrants could view the video of that day and answer a question based on it to enter.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="September 2011 - November 2012"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={capablueIcon} alt="Capablue Icon" />}
      >
        <h3 className="vertical-timeline-element-title">Capablue</h3>
        <h4 className="vertical-timeline-element-subtitle">Front End Developer (Contract)</h4>
        <p>
        UI Developer for Freesat's Freetime application that runs on the ANT Galio platform. The application included the PVR (Personal Video Recorder), On Demand, Non Freesat mode, Volume, EPG About/Conflict Management sub apps, Settings and Installation. Subsquently worked on Drupal based UKTV VOD (Video On Demand) websites for major channels Dave, Yesterday and Really. Finally worked on the Curzon on Demand application for Samsung's Smart TV including the login system, navigation, content layout display within the application and On-Screen Keyboard to work with the TV remote.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="January 2011 - September 2011"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={combinedIcon} alt="Combined Insurance Icon" />}
      >
        <h3 className="vertical-timeline-element-title">Combined Insurance</h3>
        <h4 className="vertical-timeline-element-subtitle">Front-End, UX/UI Developer (Contract)</h4>
        <p>
        My first Contract, the role included extensive work prototyping for the company's iPad sales tool app and web based products. Other projects included creating eLearning tests and stats on the company's Joomla based intranet, development amendments of their European websites and development of microsites.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="July 2008 - December 2010"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={creativeoriginIcon} alt="Creative Origin Icon" />}
      >
        <h3 className="vertical-timeline-element-title">Creative Origin</h3>
        <h4 className="vertical-timeline-element-subtitle">Freelancer</h4>
        <p>
        In 2008, I had secured regular freelance web development work with creative agencies and other private clients and worked as a freelancer with my own limited company Creative Origin. In 2011 I moved on, as the opportunity arose to work on a front-end web development contract specialising in UI/UX web app prototyping and back-office product development with Combined Insurance.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="March 2003 - June 2008"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={digitalstormIcon} alt="Digital Storm Icon" />}
      >
        <h3 className="vertical-timeline-element-title">Digital Storm</h3>
        <h4 className="vertical-timeline-element-subtitle">Technical Director/Web Developer</h4>
        <p>
        In late 2003 I founded Digital Storm Ltd. with two business partners who had different distinct skill sets to my own, namely sales and graphic design. and I joined full time in early 2004. The business model worked well as each of our disciplines contributed to the success of this full service creative agency. The client base steadily grew from local companies to include several well known brands and organisations including the British Army, Compton &amp; Woodhouse, ITV and Spicers. The business was subsequently purchased by a client, Field International in 2008.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="June 2001 - March 2003"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Icon icon={chscreativeIcon} alt="CHS Creative Icon" />}
      >
        <h3 className="vertical-timeline-element-title">CHS Creative</h3>
        <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
        <p>
        My first web development job was with reputable full service creative agency CHS, based in Christchurch, on the south coast. CHS was an invaluable learning experience providing a firm grounding of web development knowledge within a commercial environment; I worked in the web team developing projects for blue chip clients such as Barclaycard, Barclays, Virgin, Lakeland, Liverpool Victoria, Natural Collection and National Australia Bank.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </Layout>
)

export default SecondPage
