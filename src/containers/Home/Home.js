import React from 'react';
import { HomeContainer, Banner, Footer } from "./Home.style"
import Stalker from "../../components/Stalker"

function Home(props) {
    // const container = document.getElementById('container');
    // const inner = document.getElementById('inner');
    // const mouse = {
    //     _x: 0,
    //     _y: 0,
    //     x: 0,
    //     y: 0,
    //     updatePosition: event => {
    //         let e = event || window.event;
    //         this.x = e.clientX - this._x;
    //         this.y = (e.clientY - this._y) * -1;
    //     },
    //     setOrigin: e => {
    //         this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
    //         this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    //     },
    //     show: function () { return '(' + this.x + ', ' + this.y + ')'; }
    // }

    // let counter = 0;
    // let updateRate = 10;
    // let isTimeToUpdate = () => {
    //     return counter++ % updateRate === 0;
    // };

    // React.useEffect(
    //     console.log(container)
    // )

    

    // function update(e) {
    //     // mouse.updatePosition(e);
    //     // updateTransformStyle(
    //     //     (mouse.y / inner.offsetHeight / 2).toFixed(2),
    //     //     (mouse.x / inner.offsetWidth / 2).toFixed(2)
    //     // );
    // }
    
    

    // function handleMouseEnter(e) {
    //     console.log('onMouseEnter', e.clientX, e.clientY)
    //     update(e);
    // }

    // function handleMouseLeave(e) {
    //     console.log('onMouseLeave', e.clientX, e.clientY)
    //     // inner.style = "";
    // }

    // function handleMouseMove(e) {
    //     console.log(
    //         'onMouseMove',
    //         e.nativeEvent.clientX, e.nativeEvent.clientY
    //     )
    //     if (isTimeToUpdate()) {
    //         update(e);
    //     }
    // }

    return(
        <HomeContainer>
            {/* <Banner src="../../assets/imgLogo.jpeg" /> */}
            <img alt="" src={require("../../assets/imgLogo.png")}/>
            <Stalker 
                style={{
                
            }} />
            <Footer>
                <h1>Copyright 2019 @ Ina Kang and Yoon Chang</h1>
            </Footer>
        </HomeContainer>
    )
}

export default Home