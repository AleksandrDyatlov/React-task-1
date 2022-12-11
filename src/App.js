import './assets/styles/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Filter from './components/Filter';
import Search from './components/Search';
import {NavList, NavItem} from './components/Nav';
import {FooterColsHolder, FooterCol, FooterInfo, FooterTitle, FooterNavList, FooterNavItem} from './components/Footer/FooterContent';
import Card from './components/Card';

import heroBgImg from "./assets/images/intro-img.jpg";
import logo from "./assets/images/logo.svg";
import footerLogo from "./assets/images/footer-logo.svg";

function App() {

  const dataArr = [
    {id: 1, img: './images/card-img-01.jpg', title: 'Lorem ipsum dolor sit amet, consectetur', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus gravida quis blandit. Bibendum arcu vitae elementum curabitur. Amet nulla facilisi morbi tempus iaculis urna id. Tristique nulla aliquet enim tortor at auctor urna. At imperdiet dui accumsan sit amet nulla. Tincidunt augue interdum velit euismod. Tristique senectus et netus et malesuada fames ac turpis. Nibh nisl condimentum id venenatis...', linkUrl: '#', views: 2459, comments: 47},
    {id: 2, img: './images/card-img-02.jpg', title: 'Lorem ipsum dolor sit amet, consectetur', text: 'Praesent tristique magna sit amet purus gravida quis blandit. Bibendum arcu...', linkUrl: '#', views: 2459, comments: 47},
    {id: 3, img: './images/card-img-10.jpg', title: 'Lorem ipsum dolor sit amet, consectetur', text: 'Praesent tristique magna sit amet purus gravida quis blandit. Bibendum arcu...', linkUrl: '#', views: 2459, comments: 47},
    {id: 4, img: './images/card-img-06.jpg', title: 'Lorem ipsum dolor sit amet, consectetur', text: 'Praesent tristique magna sit amet purus gravida quis blandit. Bibendum arcu...', linkUrl: '#', views: 2459, comments: 47},
    {id: 5, img: './images/card-img-03.jpg', title: 'Lorem ipsum dolor sit amet, consectetur', text: 'Praesent tristique magna sit amet purus gravida quis blandit. Bibendum arcu...', linkUrl: '#', views: 2459, comments: 47},
    {id: 6, img: './images/card-img-09.jpg', title: 'Lorem ipsum dolor sit amet, consectetur', text: 'Praesent tristique magna sit amet purus gravida quis blandit. Bibendum arcu...', linkUrl: '#', views: 2459, comments: 47},
    {id: 7, img: './images/card-img-08.jpg', title: 'Lorem ipsum dolor sit amet, consectetur', text: 'Praesent tristique magna sit amet purus gravida quis blandit. Bibendum arcu...', linkUrl: '#', views: 2459, comments: 47},
    {id: 8, img: './images/card-img-04.jpg', title: 'Lorem ipsum dolor sit amet, consectetur', text: 'Praesent tristique magna sit amet purus gravida quis blandit. Bibendum arcu...', linkUrl: '#', views: 2459, comments: 47},
    {id: 9, img: './images/card-img-05.jpg', title: 'Lorem ipsum dolor sit amet, consectetur', text: 'Praesent tristique magna sit amet purus gravida quis blandit. Bibendum arcu...', linkUrl: '#', views: 2459, comments: 47},
    {id: 10, img: './images/card-img-07.jpg', title: 'Lorem ipsum dolor sit amet, consectetur', text: 'Praesent tristique magna sit amet purus gravida quis blandit. Bibendum arcu...', linkUrl: '#', views: 2459, comments: 47},
  ]

  const cardPopular = dataArr.map((item, index) => {
    return (
      index === 0 ? (
        <Card style={'horizontal'} key={item.id} img={item.img} name={item.nav} title={item.title} text={item.text} linkUrl={item.linkUrl} views={item.views} comments={item.comments} />
      ) : null
    )
  })

  const cards = dataArr.map((item, index) => {
    return (
      index !== 0 ? (
        <div className="col" key={item.id}>
          <Card img={item.img} name={item.nav} title={item.title} text={item.text} linkUrl={item.linkUrl} views={item.views} comments={item.comments} />
        </div>
      ) : null
    )
  })

  return (
    <div className="App">
      <Header logoUrl={logo}>
        <NavList style={'main-nav'}>
          <NavItem style={'active'}>Home</NavItem>
          <NavItem>Item</NavItem>
          <NavItem>Item</NavItem>
          <NavItem>Item</NavItem>
          <NavItem>Item</NavItem>
        </NavList>
      </Header>
      <main className="main">
        <Intro img={heroBgImg} />
        <div className="container">
          <div className="card-wrapp">
            <div className="toolbar">
              <Filter />
              <Search />
            </div>
            {cardPopular}
            <div className="grid">
              {cards}
            </div>
            <div className="btn-holder">
              <a className="btn" href="#">Load more</a>
            </div>
          </div>
        </div>
      </main>
      <Footer>
        <FooterInfo logoUrl={footerLogo} />
        <FooterColsHolder>
          <FooterCol>
            <FooterTitle>Top Category</FooterTitle>
            <NavList>
              <NavItem>Item</NavItem>
              <NavItem>Item</NavItem>
              <NavItem>Item</NavItem>
              <NavItem>Item</NavItem>
            </NavList>
          </FooterCol>
          <FooterCol>
            <FooterTitle>Top Tag</FooterTitle>
            <NavList>
              <NavItem>Item</NavItem>
              <NavItem>Item</NavItem>
              <NavItem>Item</NavItem>
              <NavItem>Item</NavItem>
            </NavList>
          </FooterCol>
          <FooterCol>
            <FooterTitle>Menu</FooterTitle>
            <NavList>
              <NavItem>Item</NavItem>
              <NavItem>Item</NavItem>
              <NavItem>Item</NavItem>
              <NavItem>Item</NavItem>
            </NavList>
          </FooterCol>
        </FooterColsHolder>
      </Footer>
    </div>
  );
}

export default App;
