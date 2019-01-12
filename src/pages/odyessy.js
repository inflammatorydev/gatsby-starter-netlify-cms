import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import USAMap from "react-usa-map";



// export const CoachingPageTemplate = ({ title, content, contentComponent }) => {
export default class OdyessyPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      usState: null,
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.closeDataBox = this.closeDataBox.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  clickHandler = (state) => {
    console.log('EVENT22222 ', state);
    this.setState({ showDetails: true });
    this.setState({ usState: state });

  }

  closeDataBox = () => {
    this.setState({ showDetails: false });
  }

  

  statesCustomConfig = () => {
    return {
      "CO": {
        fill: "#f7e294",
        clickHandler: () => this.clickHandler('CO')
      },
      "MN": {
        fill: "#f7e294",
        clickHandler: () => this.clickHandler('MN')
      },
      "OR": {
        fill: "orange",
        clickHandler: () => this.clickHandler('OR')
      },
      "TX": {
        fill: "#f7e294",
        clickHandler: () => this.clickHandler('TX')
      },
      "LA": {
        fill: "blue",
        clickHandler: () => this.clickHandler('LA')
      },
      "SC": {
        fill: "pink",
        clickHandler: () => this.clickHandler('SC')
      },
      "VA": {
        fill: "#f7e294",
        clickHandler: () => this.clickHandler('VA')
      },
      "KS": {
        fill: "pink",
        clickHandler: () => this.clickHandler('KS')
      },
      "NH": {
        fill: "orange",
        clickHandler: () => this.clickHandler('NH')
      },
      "IL": {
        fill: "Violet",
        clickHandler: () => this.clickHandler('IL')
      },
      "FL": {
        fill: "Violet",
        clickHandler: () => this.clickHandler('FL')
      },
      "AR": {
        fill: "Violet",
        clickHandler: () => this.clickHandler('AR')
      },
      "GA": {
        fill: "Red",
        clickHandler: () => this.clickHandler('GA')
      },
      "VT": {
        fill: "Orange",
        clickHandler: () => this.clickHandler('VT')
      },
      "CA": {
        fill: "Violet",
        clickHandler: () => this.clickHandler('CA')
      },
      "MO": {
        fill: "Red",
        clickHandler: () => this.clickHandler('MO')
      },
      "NV": {
        fill: "Blue",
        clickHandler: () => this.clickHandler('NV')
      },
      "AZ": {
        fill: "Pink",
        clickHandler: () => this.clickHandler('AZ')
      },
      "ID": {
        fill: "Pink",
        clickHandler: () => this.clickHandler('ID')
      },
      "TN": {
        fill: "Pink",
        clickHandler: () => this.clickHandler('TN')
      },
    };
  };


  render() {
    console.log('Data d isdddd ', this.props.data.test1);
    const { data } = this.props;
    const { edges: posts } = data.test1;



    const raceData = [
      {year: 2018, name: 'Across the Years - 6 days, Phoenix', website: 'https://www.aravaiparunning.com/acrosstheyears/', position: '51', genderPosition: '18', distance: '200m', state: 'AZ'},

      {year: 2018, name: 'Loup Garou - 24h, Ville Platte', website: 'http://www.loupgaroutrailrun.com ', position: '44', genderPosition: '23', distance: '40m', state: 'LA'},

      {year: 2018, name: 'One Epic Run - 24h, Spartanburg', website: 'https://www.facebook.com/oneepicrun/ ', position: '3', genderPosition: '21', distance: '31m', state: 'SC'},
      
        {year: 2018, name: 'Crooked Road - 24h, Rocky Mount', website: 'http://www.crookedroadrunning.com/24-hour-event/4552535835', position: '79', genderPosition: '29', distance: '50m', state: 'VA'},
      
        {year: 2018, name: 'KUS - 24h, Wichita', website: 'http://ksultrarunners.org', position: '18', genderPosition: '10', distance: '50m', state: 'KS'},
      
        {year: 2018, name: 'The Hamsterwheel - 30h, New Boston', website: 'https://www.facebook.com/hmstrwheel' , position: '9', genderPosition: '8', distance: '68m', state: 'NH'},
      
        {year: 2018, name: 'The Hennepin Hundred 100 Miler, Sterling', website: 'http://www.hennepinhundred.com' , position: '107', genderPosition: '36', distance: '100m', state: 'IL'},
      
        {year: 2018, name: 'Riverbend Park Ultras - 12h, Jupiter', website: 'https://www.facebook.com/groups/1497728487130553/', position: '20', genderPosition: '10', distance: '35m', state: 'FL'},
      
       {year: 2018, name: 'A Race for the Ages, Manchester', website: 'https://runsignup.com/Race/TN/Manchester/ARacefortheAges ' , position: '83', genderPosition: '24', distance: '103m', state: 'TN'},
      
       {year: 2018, name: 'Southern Discomfort - 30h, Albany', website: 'https://www.facebook.com/SouthernDiscomfortRace/' , position: '12', genderPosition: '7', distance: '61m', state: 'GA'},
      
       {year: 2018, name: 'Ethan Allen - 24h, Bennington', website: 'https://www.netrailruns.com/ea24' , position: '22', genderPosition: '9', distance: '50m', state: 'VT'},
      
       {year: 2018, name: 'Shadow of the Giants, 50k, Fish Camp', website: ' http://www.sanjoaquinrunning.com' , position: '157', genderPosition: '71', distance: '50k', state: 'CA'},
      
       {year: 2018, name: 'Harriers Elk/Beaver 50k, Victoria', website: ' https://raceroster.com/events/2018/16154/31st-annual-harriers-218-run-elkbeaver-ultras' , position: '20', genderPosition: '11', distance: '50k', state: 'BC'},
      
       {year: 2018, name: 'Bishop High Sierra Ultras,50k, Bishop ', website: ' http://bishopultras.com/bhsu/' , position: '43', genderPosition: '23', distance: '50k', state: 'CA'},
      
       {year: 2018, name: '3 days at the Fair - 72h, Augusta', website: '  https://www.facebook.com/events/3-days-at-the-fair/1396582153771297/' , position: '28', genderPosition: '9', distance: '101m', state: 'NJ'},
      
       {year: 2018, name: 'Beyond Limits Ultra - 72h, Mountain Center, ', website: ' http://www.beyondlimitsrunning.com ' , position: '17', genderPosition: '6', distance: '100m', state: 'CA'},
      
       {year: 2018, name: 'Howard Aslinger Endurance Run - 24h, Cape Girardeau', website: ' https://www.howardaslingerfoundation.org' , position: '30', genderPosition: '13', distance: '50m', state: 'MO'},
      
      {year: 2018, name: 'Jackpot Ultra Running Festival - 48h, Henderson', website: ' http://www.beyondlimitsrunning.com' , position: '45', genderPosition: '22', distance: '100m', state: 'NV'},
      
      {year: 2018, name: 'One day in Auburn - 24h, Auburn', website: ' http://singletrackrunning.com/one-day-in-auburn/ ' , position: '16', genderPosition: '3', distance: '70m', state: 'CA'},
      
      {year: 2017, name: 'New Years One Day - 12h, San Francisco', website: ' http://www.coastaltrailruns.com/nyod_new_year_one_day.html' , position: '23', genderPosition: '14', distance: '35m', state: 'CA'},
      
      {year: 2015, name: 'Javelina Jundred100k, Fountain Hills', website: ' https://aravaiparunning.com/network/javelinajundred/ ' , position: '65', genderPosition: '32', distance: '100k', state: 'AZ'},
      
      {year: 2015, name: 'A Race for the Ages, Manchester', website: 'https://runsignup.com/Race/TN/Manchester/ARacefortheAges ' , position: '52', genderPosition: '13', distance: '115m', state: 'TN'},
      
      {year: 2013, name: 'Flagstaff to Grand Canyon Stagcoach Line 100 miles , Flagstaff', website: 'https://runazt.org/flagstaff-to-grand-canyon-stagecoach-line-100/ ' , position: '16', genderPosition: '9', distance: '100m', state: 'AZ'},
      
      {year: 2013, name: 'IMTUF 100 miles, Idaho Mountain Trail Festival, McCall', website: 'http://imtuf100.com ' , position: '10', genderPosition: '2', distance: '100m', state: 'ID'},
      
      
      {year: 2004, name: 'Sierra Nevada Endurance Run,52.4 Miler, Granite Bay', website: 'http://www.snerultras.com  ' , position: '2', genderPosition: '1', distance: '52.4m', state: 'CA'},
      
      
      {year: 2004, name: 'Waldo 100k, Oakridge', website: 'http://waldo100k.org ' , position: '7', genderPosition: '1', distance: '100k', state: 'OR'},
      
      
      {year: 2003, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '8', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 2003, name: 'Bishop High Sierra Ultras, 50 Miler, Bishop', website: 'http://bishopultras.com/bhsu/ ' , position: '2', genderPosition: '1', distance: '50m', state: 'CA'},
      
      {year: 2002, name: 'Arkansas Traveler 100 Miler, Perryville, ', website: 'https://www.runarkansas.com/AT100.htm ' , position: '3', genderPosition: '1', distance: '100m', state: 'AR'},
      
      {year: 2002, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '6', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 2002, name: 'Quicksilver Endurance Runs, 50 Miler, San Jose', website: 'http://quicksilver-running.com/Quicksilver-Endurance-Runs/Overall' , position: '1', genderPosition: '1', distance: '50m', state: 'CA'},
      
      {year: 2002, name: 'Crown King Scramble 50k, Phoenix', website: 'https://aravaiparunning.com/network/crownkingscramble/ ' , position: '2', genderPosition: '1', distance: '50k', state: 'AZ'},
      
      {year: 2002, name: 'Woodside Trail Run 50k, Woodside', website: 'https://ultrasignup.com/results_event.aspx?did=7825#id3030' , position: '1', genderPosition: '1', distance: '50k', state: 'AZ'},
      
      {year: 2001, name: 'Over the Hill Track Club High Desert 50k, Ridgecrest', website: 'http://www.othtc.com/ultra/ ' , position: '4', genderPosition: '1', distance: '50k', state: 'CA'},
      
      {year: 2001, name: 'Tamalpa Headlands 50k, Sausalito', website: 'http://www.headlands50k.com' , position: '8', genderPosition: '1', distance: '50k', state: 'CA'},
      
      {year: 2001, name: 'White River 50Miler, Crystal Mountain', website: 'http://www.whiteriver50.com ' , position: '21', genderPosition: '1', distance: '50m', state: 'CA'},
      
      {year: 2001, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '6', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 2001, name: 'Miwok 100k, Stinson Beach', website: 'http://miwok100k.com/site/' , position: '3', genderPosition: '1', distance: '100k', state: 'CA'},
      
      {year: 2000, name: 'Across the Years - 24h, Phoenix', website: 'https://www.aravaiparunning.com/acrosstheyears/', position: '21', genderPosition: '7', distance: '80m', state: 'AZ'},
      
      {year: 2010, name: 'Vermont 100 Miler, West Windsor', website: 'https://vermont100.com ', position: '5', genderPosition: '1', distance: '100m', state: 'VT'},
      
      {year: 2000, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '11', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 2000, name: 'Miwok 100k, Stinson Beach', website: 'http://miwok100k.com/site/' , position: '5', genderPosition: '1', distance: '100k', state: 'CA'},
      
      {year: 1998, name: 'Arkansas Traveler 100 Miler, Perryville ', website: 'https://www.runarkansas.com/AT100.htm ' , position: '3', genderPosition: '1', distance: '100m', state: 'AR'},
      
      {year: 1998, name: 'Wasatch100 Miler, Kaysville', website: 'https://wasatch100.com' , position: '9', genderPosition: '1', distance: '100m', state: 'UT'},
      
      {year: 1998, name: 'Grand Slam of Ultrarunning Series -400 Miler – Multiple Cities ', website: 'https://grandslamofultrarunning.net ' , position: '2', genderPosition: '1', distance: '400m', state: 'CA'},
      
      {year: 1998, name: 'Leadville Trail 100Miler, Leadville', website: 'https://www.leadvilleraceseries.com ' , position: '9', genderPosition: '1', distance: '100m', state: 'CO'},
      
      {year: 1998, name: 'Vermont 100 Miler, West Windsor', website: 'https://vermont100.com ', position: '5', genderPosition: '1', distance: '100m', state: 'VT'},
      
      {year: 1998, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '4', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 1998, name: 'Miwok 100k, Stinson Beach', website: 'http://miwok100k.com/site/' , position: '4', genderPosition: '1', distance: '100k', state: 'CA'},
      
      {year: 1998, name: 'Jed Smith 50 Milers, Sacramento', website: 'http://www.chipsrunning.com/jed-smith-ultras/ ' , position: '3', genderPosition: '1', distance: '50m', state: 'CA'},
      
      {year: 1997, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '8', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 1996, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '3', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 1995, name: 'IAU100K WC, Winschoten 100k, Winschoten, NLD ', website: 'https://www.runwinschoten.nl ' , position: '26', genderPosition: '1', distance: '100k', state: 'CA'},
      
      {year: 1995, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '2', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 1995, name: 'American River, 50 Miler, Folsom ', website: 'http://www.ar50mile.com ' , position: '2', genderPosition: '1', distance: '50m', state: 'CA'},
      
      {year: 1995, name: 'Redwood Empire 12h Run, Santa Rosa ', website: null, position: '25', genderPosition: '5', distance: '31m', state: 'CA'},
      
      {year: 1995, name: 'Way to Cool 50k, Cool', website: 'http://www.wtc50k.com ' , position: '2', genderPosition: '1', distance: '50k', state: 'CA'},
      
      {year: 1994, name: 'Sunmart Texas Trails 50 Miler, Huntsville', website: null, position: '4', genderPosition: '1', distance: '50m', state: 'TX'},
      
      {year: 1994, name: 'Leadville Trail 100Miler, Leadville', website: 'https://www.leadvilleraceseries.com ' , position: '2', genderPosition: '1', distance: '100m', state: 'CO'},
      
      {year: 1994, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '2', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 1994, name: 'Silver State 50 Miler, Reno', website: 'http://silverstatestriders.com/races/silver-state-5050/' , position: '1', genderPosition: '1', distance: '50m', state: 'NV'},
      
      {year: 1993, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '3', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 1993, name: 'American River, 50 Miler, Folsom ', website: 'http://www.ar50mile.com ' , position: '4', genderPosition: '1', distance: '50m', state: 'CA'},
      
      {year: 1993, name: 'Way to Cool 50k, Cool', website: 'http://www.wtc50k.com ' , position: '7', genderPosition: '1', distance: '50k', state: 'CA'},
      
      {year: 1992, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '3', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 1992, name: 'Quicksilver Endurance Runs 50 Miler, San Jose', website: 'http://quicksilver-running.com/Quicksilver-Endurance-Runs/Overall' , position: '1', genderPosition: '1', distance: '50m', state: 'CA'},
      
      {year: 1992, name: 'American River, 50 Miler, Folsom ', website: 'http://www.ar50mile.com ' , position: '7', genderPosition: '1', distance: '50m', state: 'CA'},
      
      {year: 1991, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '9', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 1990, name: 'Edmund Fitzgerald 100k, Duluth', website: null, position: '26', genderPosition: '2', distance: '100k', state: 'MN'},
      
      {year: 1990, name: 'Leadville Trail 100Miler, Leadville', website: 'https://www.leadvilleraceseries.com ' , position: '3', genderPosition: '1', distance: '100m', state: 'CO'},
      
      {year: 1990, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '10', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 1989, name: 'Western States 100 Miler, Squaw Valley', website: 'https://www.wser.org ' , position: '10', genderPosition: '1', distance: '100m', state: 'CA'},
      
      {year: 1989, name: 'San Juan Trail 50k, San Juan Capistrano', website: null , position: '14', genderPosition: '1', distance: '50k', state: 'CA'},
      
      {year: 1988, name: 'IAU 100k WC – Santander 100k, Santander, ESP ', website: 'https://en.wikipedia.org/wiki/IAU_100_km_World_Championships ' , position: '21', genderPosition: '1', distance: '100k', state: 'CA'},
      
      {year: 1988, name: 'Leadville Trail 100Miler, Leadville', website: 'https://www.leadvilleraceseries.com ' , position: '7', genderPosition: '1', distance: '100m', state: 'CO'},
      
      {year: 1987, name: 'Dick Collins Firetrails 50 Miler, Castro Valley', website: null, position: '3', genderPosition: '1', distance: '50m', state: 'CA'},
      
      {year: 1987, name: 'Wild West Marathon and Ultra Marathon, Lone Pine, ', website: 'https://lonepinechamber.org/event/2019-wild-wild-west-marathon' , position: '7', genderPosition: '1', distance: '26.2m', state: 'CA'},
      
      {year: 1987, name: 'American River, 50 Miler, Folsom ', website: 'http://www.ar50mile.com ' , position: '6', genderPosition: '1', distance: '50m', state: 'CA'},
      
      {year: 1985, name: 'American River, 50 Miler, Folsom ', website: 'http://www.ar50mile.com ' , position: '13', genderPosition: '1', distance: '50m', state: 'CA'}
    ];






    const raceDataState = raceData.filter((item) => item.state === this.state.usState);




    console.log('Data d is ', data);

    const newData = data.test1.edges[0].node;


    return (
      <Layout>
    <section className="hero">
      <div className="background-image"></div>
      <div className="blockquote-container">
      </div>
      <h2></h2>
    </section>





        <section className="section odyessy">
          <div className="container main">
            <div className="content">

<h2>{data.test2.edges[0].node.frontmatter.title}</h2>

<p>{data.test2.edges[0].node.frontmatter.title2}</p>



<div onClick={this.closeDataBox} style={{position: 'absolute', zIndex: 100, top: '40px', left: '20%', width: '60%', height: 'auto', backgroundColor: '#fff', border: '1px solid #000', display: this.state.showDetails ? 'block' : 'none'}}>

<div onClick={this.closeDataBox} style={{position: 'absolute', top: 0, right: 0, backgroundColor: 'orange', borderLeft: '1px solid #ccc', borderBottom: '1px solid #ccc', padding: '10px'}}>Close</div>

{ 

  raceDataState.map((item) => {

  return (
    <div className="race-details"><h2>{item.name}, {item.state}</h2>
  <table>
    <tr className="table-headers">
      <td><span>Year</span></td>
      <td><span>Position</span></td>
      <td><span>Gender Position</span></td>
      <td><span>Distance</span></td>
      <td><span></span></td>
    </tr>
    <tr>
      <td style={{borderBottom: 0}}><span>{item.year}</span></td>
      <td style={{borderBottom: 0}}><span>{item.position}</span></td>
      <td style={{borderBottom: 0}}><span>{item.genderPosition}</span></td>
      <td style={{borderBottom: 0}}><span>{item.distance}</span></td>
  {item.website !== null && <td style={{borderBottom: 0}}><span><a href={item.website}>Website</a></span></td> }
    </tr>
    </table>
</div>);
})}


</div>


<USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />


<HTMLContent className="content" content={data.test2.edges[0].node.html} />

              <h1 className="has-text-weight-bold is-size-2">Latest Posts</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ borderBottom: '1px solid #333', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

OdyessyPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

// export const odyessyQuery = graphql`
// query OdyessyQuery{
//   allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/pages/index/"} }) {
//     edges {
//       node {
//         id
//         fileAbsolutePath
//         html
//         frontmatter {
//           title
//           slot1title
//           slot1desc
//           slot1image  {
//             childImageSharp {
//               fluid(maxWidth: 400, maxHeight: 250) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           slot2title
//           slot2desc
//           slot2image  {
//             childImageSharp {
//               fluid(maxWidth: 400, maxHeight: 250) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           slot3title
//           slot3desc
//           slot3image  {
//             childImageSharp {
//               fluid(maxWidth: 400, maxHeight: 250) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   } 
//   }`

export const odyessyQuery = graphql`
  query OdyessyQuery {
    test1: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    test2: allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/pages/odyessy/"} }) {
  edges {
    node {
      id
      fileAbsolutePath
      html
      frontmatter {
        title
        title2
      }
    }
  }
}
  }
`



// test1: allMarkdownRemark(
//   sort: { order: DESC, fields: [frontmatter___date] },
//   filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
// ) {
//   edges {
//     node {
//       excerpt(pruneLength: 400)
//       id
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         templateKey
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// }
// test2: allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/pages/coaching/"} }) {
//   edges {
//     node {
//       id
//       fileAbsolutePath
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// }
