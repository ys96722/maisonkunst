import React from "react"
import ReactDOM from "react-dom"
import { StalkerContainer, Helper } from "./Stalker.style"

class Stalker extends React.Component {
  state = {
    inner: null,
    rotate: "rotateX(0deg) rotateY(0deg)",
    mouse: {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      setOrigin: e => {
        this._x = e.left + Math.floor(e.width / 2)
        this._y = e.top + Math.floor(e.height / 2)
      }
    },
    counter: 0,
    updateRate: 1
  }

  componentDidMount() {
    this.setState({
      inner: ReactDOM.findDOMNode(this.refs["inner"]).getBoundingClientRect()
    })

    this.state.mouse.setOrigin(
      ReactDOM.findDOMNode(this.refs["inner"]).getBoundingClientRect()
    )
  }

  isTimeToUpdate = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
    return this.state.counter % this.state.updateRate === 0
  }

  update = e => {
    // console.log(e)
    // this.state.mouse.updatePosition(e)
    this.setState({
      mouse: {
        x: e.clientX - this._x,
        y: (e.clientY - this._y) * -1
      }
    })
    this.updateTransformStyle(
      (this.state.mouse.y / this.state.inner.height / 2).toFixed(2),
      (this.state.mouse.x / this.state.inner.width / 2).toFixed(2)
    )
  }

  updateTransformStyle = (x, y) => {
    // this.setState({
    //   rotateX: x,
    //   rotateY: y
    // })
    let style = "rotateX(" + x + "deg) rotateY(" + y + "deg) scale3d(1, 1, 1)"
    // console.log(style)
    this.setState({
      rotate: style
    })
  }

  onMouseEnterHandler = e => {
    // helper.className = "";
    this.update(e)
  }

  onMouseLeaveHandler = () => {
    // inner.style = "";
    // helper.className = "hidden";
    this.setState({
      rotate: "rotateX(0deg) rotateY(0deg)"
    })
  }

  onMouseMoveHandler = e => {
    if (this.isTimeToUpdate()) {
      this.update(e)
    }
  }

  render() {
    return (
      <StalkerContainer
        ref="inner"
        src={this.props.src}
        rotate={this.state.rotate}
        onMouseMove={this.onMouseMoveHandler}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
      />
    )
  }
}

export default Stalker
