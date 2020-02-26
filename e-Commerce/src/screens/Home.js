import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarouselSlider from '../components/Carousel';
import CardRow from '../components/CardRow';

class Home extends React.Component {
   
    render(){
        return(
            <div>
                <Header info={this.props.menu} number={this.props.number}/>
                <CarouselSlider images={this.props.images}/>
                <div style={{marginBottom: 100}}>
                    <CardRow produtos={this.props.produtos} first={0} last={3} home={true}/>
                    <CardRow produtos={this.props.produtos} first={5} last={8} home={true}/>
                </div>
                <Footer />
            </div>
            
        );
    }
}

export default Home;
