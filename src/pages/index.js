import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
import TitlePage from '../components/TitlePage';
import LocalizedLink from '../components/LocalizedLink';
import useTranslations from '../components/useTranslations';
import * as S from '../components/ListWrapper/styled';


import {
    Container,
    Card,
    CardColumns,
    Button,
    Col,
    Row,
    CardGroup,
    Form,
    Carousel
  } from "react-bootstrap"
  import {
    FaHandshake,
    FaBriefcase,
    FaRegLightbulb,
    FaGlobe,
    FaTools,
    FaUsersCog,
    FaSuitcase,
    FaUniversalAccess,
    FaGalacticRepublic,
    FaSync,
    FaUserFriends,
  } from "react-icons/fa"
  import { IoMdRibbon } from "react-icons/io"
  import { TiGroup } from "react-icons/ti"
  import { GiTeamIdea, GiChessKnight } from "react-icons/gi"
  import Landing from '../images/landing-image.jpeg'
  import Landing2 from '../images/landing2.jpeg'
  import Landing3 from '../images/landing3.jpeg'
  import Book from '../images/sameer-book.png'
  import weDoimg  from '../images/bg-home-wgatwedo.jpg'
  import aiism from '../images/aiism-logo-1.png'
  import Forbs1 from '../images/forbs-1.jpg'
  import Forbs2 from '../images/forbs-2.jpg'
  import Forbs3 from '../images/forbs-3.jpg'
  // import Image from '../components/Images'

const Index = ({ data: { allMarkdownRemark } }) => {
 
  const {
    hello,
    subline,
    category,
    latestPosts,
    allPosts,
  } = useTranslations();

  const postList = allMarkdownRemark.edges;

  return (
    <div className="homepage">
      {/* <SEO title="Home" /> */}
      {/* <Landing /> */}
      {/* <Layout location={this.props.location} title={siteTitle}> */}
        {/* <img style={{ margin: 0 }} src={Landing} alt="Landing-pic" style={{height:'90vh', width:'100%'}} /> */}

        {/* <Image /> */}
        <Carousel>
  <Carousel.Item>
  <img className="landing-carousel-img" src={Landing} alt="no image"/>
    <Carousel.Caption style={{position:"absolute",top:"20px"}}>
    <h3>Venture Capital & Private Equity Firms</h3>
      <p>At AIQRATE, with our proven expertise and seasoned experience coupled with bespoke frameworks and artifacts, 
        we dive deep with you to craft your enterprise wide AI strategy.</p>
        <Button variant="light" size="sm" style={{backgroundColor:"#f4f4f4"}}>MORE INFO</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="landing-carousel-img" src={Landing2} alt="no image"/>
    <Carousel.Caption style={{position:"absolute",top:"20px"}}>
      <h3>small-medium-sized-businesses-smbs</h3>
      <p>At AIQRATE, with our proven expertise and seasoned experience coupled with bespoke frameworks and artifacts, 
        we dive deep with you to craft your enterprise wide AI strategy.</p>
        <Button variant="light" size="sm" style={{backgroundColor:"#f4f4f4"}}>MORE INFO</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="landing-carousel-img" src={Landing3} alt="no image"/>
    <Carousel.Caption style={{position:"absolute",top:"20px"}}>
    <h3>academic-institutions</h3>
    <p>At AIQRATE, with our proven expertise and seasoned experience coupled with bespoke frameworks and artifacts, 
        we dive deep with you to craft your enterprise wide AI strategy.</p>
        <Button variant="light" size="sm" style={{backgroundColor:"#f4f4f4"}}>MORE INFO</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <Container className="text-center">
      <CardColumns bg="light">
        <Card className="text-light">
        <Card.Img src={Forbs1} alt="Forbs"  className="forbs-cards"/>
  <Card.ImgOverlay>
          <Card.Body>
            <Card.Text>
              AI for CXO - Redefining the future of Leadership in the AI Era
            </Card.Text>
            <Button variant="primary">Read Post</Button>
          </Card.Body>
          </Card.ImgOverlay>
        </Card>
     

        <Card className="text-light">
        <Card.Img src={Forbs2} alt="Forbs"  className="forbs-cards"/>
  <Card.ImgOverlay>
          <Card.Body>
            <Card.Text>The New Age Enterprise - Enabled by AI</Card.Text>
            <Button variant="primary" className="justify-content-center">
              Read Post
            </Button>
          </Card.Body>
        </Card.ImgOverlay>
        </Card>

        <Card className="text-light">
        <Card.Img src={Forbs3} alt="Forbs"  className="forbs-cards"/>
  <Card.ImgOverlay>
          <Card.Body>
            <Card.Text className="d-flex align-items-center">
              Mapping the AI Transformation Journey in your Organization.
            </Card.Text>
            <Button variant="primary">Read Post</Button>
          </Card.Body>
        </Card.ImgOverlay>
        </Card>
      </CardColumns>

      <h2 className="align-self-center">
        {/* what-we-do bottom-border */}
        <span>
          <strong>What </strong>
        </span>
        We Do
      </h2>
      <p>
        AIQRATE is a bespoke global AI advisory and consulting firm. We provide
        strategic AI advisory services and consulting offerings across multiple
        business segments to enable clients on their AI powered transformation &
        innovation journey and accentuate their decision making and business
        performance.
      </p>
      <Row className="d-flex">
        <Col lg={4}>
        <img src={weDoimg} alt="bg-home-wgatwedo" style={{height:'auto'}} />
        </Col>
        <Col lg={8}>
          <ul className="what-we-do-row">
            <li className="icon-text">
              <div className="table-cell">
                <FaHandshake />
              </div>
              <div className="para-icon">
                <span className="text">
                  Partner with you to curate your AI strategy in alignment with
                  your business strategy you
                </span>
              </div>
            </li>

            <li className="icon-text">
              <div className="table-cell">
                <FaBriefcase />
              </div>
              <div className="para-icon">
                <span className="text">
                  Understand your strategic business transformation and
                  innovation initiatives deeply so we can create tailored AI
                  advisory and consulting engagements that are just right for
                  you
                </span>
              </div>
            </li>

            <li className="icon-text">
              <div className="table-cell">
                <FaRegLightbulb />
              </div>
              <div className="para-icon">
                <span className="text">
                  Align the AI strategy with CXOs, business function heads to
                  enable AI@scale adoption pervasively
                </span>
              </div>
            </li>

            <li className="icon-text">
              <div className="table-cell">
                <FaGlobe />
              </div>
              <div className="para-icon">
                <span className="text">
                  Invest in building global AI ecosystem: AI startups, data,
                  talent, investment, academic partners to provide holistic
                  advisory and consulting services to our clients in totality
                </span>
              </div>
            </li>

            <li className="icon-text">
              <div className="table-cell">
                <FaTools />
              </div>
              <div className="para-icon">
                <span className="text">
                  Design top of the line AI tools, frameworks & methodologies
                  wrapped in the form of deployable artifacts which are
                  hand-crafted for a client’s specific requirements
                </span>
              </div>
            </li>
          </ul>
        </Col>
      </Row>

      <h3 className="align-self-center">
        Within the realm of AI advisory services and consulting offerings, we:
      </h3>

      <Row>
        <CardGroup className="w-100">
          <Card style={{ height: "11rem" }} className="sm-w-100">
            <Card.Body className="card-para">
              <Card.Title>
                <FaUsersCog className="b-fa" />
              </Card.Title>
              <Card.Text>Demystify & Evangelize AI</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ height: "11rem" }} className="sm-w-100">
            <Card.Body className="card-para">
              <Card.Title>
                <FaSuitcase className="b-fa" />
              </Card.Title>
              <Card.Text>Curate AI strategy for businesses</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ height: "11rem" }} className="sm-w-100">
            <Card.Body className="card-para">
              <Card.Title>
                <FaUniversalAccess className="b-fa" />
              </Card.Title>
              <Card.Text>
                Redefine businesses– AI ecosystem acceleration
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ height: "11rem" }} className="sm-w-100">
            <Card.Title>
              <FaGalacticRepublic className="b-fa" />
            </Card.Title>
            <Card.Body className="card-para">
              <Card.Text>
                Enable AI In-action – effectuate AI interventions in totality
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
      <Row className="border">
        <p className="card-para">
          " Several enterprises look to use AI to optimize decision making. AI
          can unlock opportunities that otherwise overlooked. "
        </p>
       {/* <Carousel style={{width:'100%'}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={aiism}
    />
    <Carousel.Caption className="carousel-text-wrap">
    <p className="card-para">
          " Several enterprises look to use AI to optimize decision making. AI
          can unlock opportunities that otherwise overlooked. "
        </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={aiism}
    />

    <Carousel.Caption  className="carousel-text-wrap">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://placehold.it/1200x500/#fafafa/#fafafa"
    />

    <Carousel.Caption  className="carousel-text-wrap">
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}

      </Row>

      <h2 className="align-self-center">THE AIQRATE ADVANTAGE</h2>

      <Row>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>
                <IoMdRibbon className="b-fa" /> <br />
                FIRST IN ITS GENRE
              </Card.Title>
              <Card.Text>
                Bespoke AI strategy advisory and consulting firm with path
                breaking services and offerings and unique client engagement
                models
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <TiGroup className="b-fa" /> <br />
                REPERTOIRE OF INSIGHTS
              </Card.Title>
              <Card.Text>
                Proven global AI advisory and consulting experience across
                business segments covering Enterprises, GCCs, Start-ups, SMBs,
                VC/PE firms, Academic Institutions and Industry associations
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <FaRegLightbulb className="b-fa" /> <br />
                REPERTOIRE OF INSIGHTS
              </Card.Title>
              <Card.Text>
                Our proprietary AI playbooks, primers, frameworks,
                methodologies, toolkits enable us advice CXOs and senior leaders
                with artisanal insights and recommendations
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>
                <FaSync className="b-fa" /> <br />
                END TO END COVERAGE
              </Card.Title>
              <Card.Text>
                Holistic coverage of AI advisory and consulting from AI maturity
                assessment, CoE construct & interventions, partner selection to
                AI business value output
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <FaUserFriends className="b-fa" /> <br />
                ENHANCED EXTERNAL ORIENTATION
              </Card.Title>
              <Card.Text>
                Our team’s first-hand and deep experience of understanding
                global AI market landscape, ecosystem, topical trends, scenarios
                and approaches
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <GiTeamIdea className="b-fa" /> <br />
                AMPLIFIED THOUGHT LEADERSHIP
              </Card.Title>
              <Card.Text>
                Our demonstrated body of work in AI is featured and covered via
                published books, press, global media publications, social media,
                industry forums
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>

      <h2 className="align-self-center">
        <span>
          <strong>WHY </strong>
        </span>
        ENGAGE US
      </h2>

      <Row className="engage-row">
        <Card>
          <Card.Body>
            <Card.Text className="icon-text">
              <div className="table-cell">
                <GiChessKnight className="b-fa" />
              </div>
              <div className="para-icon">
                <span className="text">
                  Exhaustive and proven leadership experience of crafting AI
                  strategy roadmaps, maturity assessments, readiness frameworks
                  and methodologies for several Fortune 500 clients, GCCs,
                  Indian enterprises, SMBs, New age digital enterprises coupled
                  with defining and showcasing broad exhibit plan for making the
                  enterprise AI ready for CXOs
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text className="icon-text">
              <div className="table-cell">
                <GiChessKnight className="b-fa" />
              </div>
              <div className="para-icon">
                <span className="text">
                  Comprehensive, ready to deploy AI CoE and CoC playbooks and
                  toolkits covering strategic and operational impact scenarios
                  and approaches on unleashing transformation, innovation and
                  disruption within enterprises and GCCs
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text className="icon-text">
              <div className="table-cell">
                <GiChessKnight className="b-fa" />
              </div>
              <div className="para-icon">
                <span className="text">
                  Incisive consulting coverage on AI led strategic interventions
                  for C-suite stakeholders with redefining business functions
                  artifacts​
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text className="icon-text">
              <div className="table-cell">
                <GiChessKnight className="b-fa" />
              </div>
              <div className="para-icon">
                <span className="text">
                  Global AI ecosystem compendium on startups, niche & boutique
                  ventures benchmarked on AIQRATE “Glow Curve” assessment
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text className="icon-text">
              <div className="table-cell">
                <GiChessKnight className="b-fa" />
              </div>
              <div className="para-icon">
                <span className="text">
                  Bespoke immersive and engaging AI master class sessions and
                  evangelization workshops rendered with wide array of AI use
                  cases and ensuing business impact
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text className="icon-text">
              <div className="table-cell">
                <GiChessKnight className="b-fa" />
              </div>
              <div className="para-icon">
                <span className="text">
                  Broad and expansive repository of AIQRATE proprietary advisory
                  and consulting reports, analysis, insights, toolkits,
                  frameworks, assessments, methodologies, playbooks, toolkits,
                  templates and compendiums
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>

      <Row className="py-5">
        <Col lg={8}>
          <h2 className="align-self-center text-left">
            AI & ANALYTICS
            {/* <span> */}
              <p>Accelerating Business Decisions (Wiley CXO Series)</p>
            {/* </span> */}
          </h2>
          <p className="text-primary">
            We are ushering into an AI era – an Algorithm driven economy where
            algorithms sit at the core of every business model, and in the
            organizational DNA.
          </p>
          <p>
            The first book of its kind in its genre, a must have primer for CXOs
            for curating, developing and executing AI strategies in their
            enterprises for end-to-end transformative impact. A valuable guide
            for executives and aspiring professionals on how AI can transform
            businesses, with deep focus on key industries and exponential
            technologies. The book also showcases the immense AI adoption and
            consumption scenarios in high impact and rapidly changing
            industries.
          </p>
          <Button variant="primary">Get The Book</Button>
        </Col>
        <Col lg={4}>
          {/* <Image className="height:400px" /> */}
          <img src={Book} alt="Book" style={{marginTop:'5rem'}} />


        </Col>
      </Row>
    </Container>
    <div className="container-fluid formcontent" style={{ background: "#2d3047" }}>
            <div className="container">
              <Row className="justify-content-center text-white">
                <h2 className="align-self-center">
                  Sign up for our Newsletter AIQRATE
                </h2>
                <p>
                  <small>
                    Stay ahead in a rapidly changing world led by AI. Subscribe to
                    AIQRATE AIism, our incisive take at the AI strategy driving
                    transformation, innovation and disruption.
                  </small>
                </p>
      
                <Form className="form">
                  <Form.Group controlId="formUserName">
                    <Form.Control type="text" placeholder="Name" />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
      
                  <Form.Group controlId="formCompany">
                    <Form.Control type="text" placeholder="Company" />
                  </Form.Group>
                  <Form.Group controlId="formJobTitle">
                    <Form.Control type="text" placeholder="Job Title" />
                  </Form.Group>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Row>
            </div>
          </div>
    {/* <Formcomponent /> */}






       {/* <img style={{ margin: 0 }} src="./images/86-p.jpg" alt="Gatsby Scene" /> */}
         {/* <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to your new Gatsby website. You are on your home page.</p>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p> */}
        
       
      {/* </Layout> */}
      {/* <TitlePage text={hello} /> */}
      {/* <p>{subline}</p> */}
      <hr style={{ margin: `2rem 0` }} />
      <h2>
        <strong>{latestPosts}</strong>
      </h2>

      <br />

      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: {
                background,
                category,
                date,
                description,
                title,
                image,
              },
              timeToRead,
              fields: { slug },
            },
          }) => (
              <PostItem
                slug={`/blog/${slug}`}
                background={background}
                category={category}
                date={date}
                timeToRead={timeToRead}
                title={title}
                description={description}
                image={image}
              />
            ),
        )}
      </S.ListWrapper>

      <br />

      <LocalizedLink to={`/blog/`}>{allPosts}</LocalizedLink>
    </div>
  );
};

export default Index;

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!, ) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            category
            background
            image
            date(formatString: $dateFormat)

          }
          timeToRead
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`;
