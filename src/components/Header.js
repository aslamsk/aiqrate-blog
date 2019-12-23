import { Link } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { FaSearch } from "react-icons/fa"
import { Nav, Navbar, NavDropdown, Col } from "react-bootstrap"
import "./header.css"
// import image from "../images/aiqrate-logo-final-blackbg.png"
import Logo from './Logo'
const Header = ({ data }) => (
  <div>
    <Navbar expand="lg" className="fixed-top d-flex justify-content-around">
      <Navbar.Brand>
        <Link to="/">
          <img
            style={{ margin: 0, height: "40px" }}
            src={Logo}
            alt="logo"
            className="logo"
          />
          {/* <Logo /> */}
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="navbar-right"
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="lg-d-flex align-items-end flex-column flex-wrap sm-d-block sm-mr-0 mr-lg-5  nav-custom"
      >
        <Nav className="navbar-right">
          <li className="nav-item dropdown lg-toggle">
            <Link
              to="/advisory/"
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ADVISORY
            </Link>

            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li className="nav-sub-text">
                <Link to="/AiSeniorLeader/">AI for CXOs & Senior Leaders</Link>
              </li>
              <li className="nav-sub-text">
                <Link to="/StrategicManagement/">
                  Reimagining Strategic Management Theories & Models with AI
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link to="/BuildingPowerAi/">
                  Building AI Powered Organizations
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link to="/BuildingBlocs/">
                  Building Blocks for an AI Strategy
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link to="/AiScale/">AI@scale</Link>
              </li>
            </ul>
          </li>
          {/* {------------ Small Screen-Advisory ---------------} */}

          <NavDropdown
            title="ADVISORY"
            className="d-lg-none d-sm-block"
            id="nav-dropdown"
          >
            <li className="nav-sub-text">
              <Link to="/AiSeniorLeader/">AI for CXOs & Senior Leaders</Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/StrategicManagement/">
                Reimagining Strategic Management Theories & Models with AI
              </Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/BuildingPowerAi/">
                Building AI Powered Organizations
              </Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/BuildingBlocs/">
                Building Blocks for an AI Strategy
              </Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/AiScale/">AI@scale</Link>
            </li>
          </NavDropdown>

          {/* ------------------------------------- */}

          <li className="nav-item dropdown  lg-toggle">
            <Link
              to="/Consulting/"
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              CONSULTING
            </Link>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li class="dropdown-submenu dropleft">
                <Link
                  className="dropdown-item dropdown-toggle"
                  to="/Enterprises/"
                >
                  Enterprises
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/MasterclassEnterprises/"
                    >
                      AI Masterclass for Enterprises
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/MasterclassesForIndustry/"
                    >
                      AI Masterclasses for Industry Segments & Business
                      Functions
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/CeoToolKits/">
                      AI CoE Toolkits for Enterprises
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/CheifAiOfficerDemand/">
                      Chief AI Officer on Demand
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/InterventionsForIndustry/"
                    >
                      AI Interventions for Industry Segments & Business
                      Functions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/TalentMappingStrategy/"
                    >
                      AI Talent Mapping Strategies
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/roadMapping">
                      Analytics to AI Road-mapping & Assessment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/ExperienceCenterSetup/"
                    >
                      AI Experience Center Setup Framework
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/StrategicPartnerSection/"
                    >
                      AI Strategic Partner Selection Framework
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/WorkshopForBusiness/">
                      AI Workshops for Business Strategy Sessions
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="dropdown-submenu dropleft">
                <Link
                  className="dropdown-item dropdown-toggle"
                  to="/GlobalCabablity/"
                >
                  Global Capability Centres (GCCs)
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/MasterClassForGCC/">
                      AI Masterclass for GCCs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/CeoToolkitForGCC/">
                      AI CoE Toolkits for GCCs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/InterventionsForIndustryGCC/"
                    >
                      AI Interventions for Industry Segments & Business
                      Functions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/TalentMappingStrategiesGCC/"
                    >
                      AI Talent Mapping Strategies
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/StrategicPartnerGCC/">
                      AI Strategic Partner Selection Framework
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/StartupInnovation/">
                      AI Startup Innovation Roadshows
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ExperienceSetupGCC/">
                      AI Experience Center Setup Framework
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/PitchesForInternalAndExternal/"
                    >
                      Strategic AI Pitches for Internal & External Stakeholders
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/GovernanceFrameWorkGCC/"
                    >
                      AI Governance Framework for GCCs
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/Startups/">Startups</Link>
              </li>
              <li>
                <Link to="/pe-vc-firms/">
                  Venture Capital & Private Equity Firms
                </Link>
              </li>
              <li>
                <Link to="/small-medium/">
                  Small & Medium sized Businesses (SMBs)
                </Link>
              </li>
              <li>
                <Link to="/academic-institutions/">Academic Institutions</Link>
              </li>
              <li>
                <Link to="/public-sector-iba/">
                  Public Sector Institutions & Business Associations
                </Link>
              </li>
            </ul>
          </li>
          {/* {------------ Small Screen-Consulting ---------------} */}

          <NavDropdown
            title="CONSULTING"
            className="d-lg-none d-sm-block"
            id="nav-dropdown"
          >
            {/* <li class="dropdown-submenu"> */}

            {/*--------- SubMenu ----------*/}

            <NavDropdown
              title="Enterprises"
              className="d-lg-none d-sm-block"
              id="nav-dropdown"
            >
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/MasterclassEnterprises/">
                  AI Masterclass for Enterprises
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/MasterclassesForIndustry/">
                  AI Masterclasses for Industry Segments & Business Functions
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/CeoToolKits/">
                  AI CoE Toolkits for Enterprises
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/CheifAiOfficerDemand/">
                  Chief AI Officer on Demand
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/InterventionsForIndustry/">
                  AI Interventions for Industry Segments & Business Functions
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/TalentMappingStrategy/">
                  AI Talent Mapping Strategies
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/roadMapping">
                  Analytics to AI Road-mapping & Assessment
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/ExperienceCenterSetup/">
                  AI Experience Center Setup Framework
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/StrategicPartnerSection/">
                  AI Strategic Partner Selection Framework
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/WorkshopForBusiness/">
                  AI Workshops for Business Strategy Sessions
                </Link>
              </li>
            </NavDropdown>

            {/*--------- SubMenu ----------*/}

            <NavDropdown
              title="Global Capability Centres (GCCs)"
              className="d-lg-none d-sm-block"
              id="nav-dropdown"
            >
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/MasterClassForGCC/">
                  AI Masterclass for GCCs
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/CeoToolkitForGCC/">
                  AI CoE Toolkits for GCCs
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link
                  className="dropdown-item"
                  to="/InterventionsForIndustryGCC/"
                >
                  AI Interventions for Industry Segments & Business Functions
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link
                  className="dropdown-item"
                  to="/TalentMappingStrategiesGCC/"
                >
                  AI Talent Mapping Strategies
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/StrategicPartnerGCC/">
                  AI Strategic Partner Selection Framework
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/StartupInnovation/">
                  AI Startup Innovation Roadshows
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/ExperienceSetupGCC/">
                  AI Experience Center Setup Framework
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link
                  className="dropdown-item"
                  to="/PitchesForInternalAndExternal/"
                >
                  Strategic AI Pitches for Internal & External Stakeholders
                </Link>
              </li>
              <li className="nav-sub-text">
                <Link className="dropdown-item" to="/GovernanceFrameWorkGCC/">
                  AI Governance Framework for GCCs
                </Link>
              </li>
            </NavDropdown>

            <li className="nav-sub-text">
              <Link to="/Startups/">Startups</Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/pe-vc-firms/">
                Venture Capital & Private Equity Firms
              </Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/small-medium/">
                Small & Medium sized Businesses (SMBs)
              </Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/academic-institutions/">Academic Institutions</Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/public-sector-iba/">
                Public Sector Institutions & Business Associations
              </Link>
            </li>
          </NavDropdown>

          {/* ------------------------------------- */}

          <li style={{ fontSize: "14px", marginTop: "9px" }}>
            <Link to="/blog/" style={{ color: "white" }}>
              AIQRATIONS
            </Link>
          </li>

          <NavDropdown
            title="ABOUT US"
            className="nav-item dropdown p-2"
            id="nav-dropdown"
          >
            <li className="nav-sub-text">
              <Link to="/Approach/">Our Approach</Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/aiqrate-engagement-model/">
                AIQRATE Engagement Model
              </Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/Why-we-exit/">Why We Exist</Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/aiqrate-team/">AIQRATE Team</Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/being-ai-positive/">Being AI +ve</Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/aiqrate-alliance-advisory-forum/">
                AIQRATE Alliance Advisory Forum
              </Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/in-the-news/">In the News</Link>
            </li>
            <li className="nav-sub-text">
              <Link to="/contactUs/">Contact Us</Link>
            </li>
          </NavDropdown>

          <li>
            <Link href="#link">
              {" "}
              <FaSearch className="search-icon mt-2" />{" "}
            </Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <div>
      <Col className="nav-down">
        <p>AI Strategy: Transformation | Innovation | Disruption</p>
      </Col>
    </div>
  </div>
)

export default Header
