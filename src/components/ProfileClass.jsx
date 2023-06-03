import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0,
    // };

    this.state = {
      userInfo: {
        name: "Dummy name",
        login: "Dummy loginId",
        avatar_url: "",
      },
    };
    console.log(this.props.name + " Child - constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/pjoshi999");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log(this.props.name + " Child - componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    // This is what class based component does when the state changes (same as dependency array [count] in useEffect() in functional components)
    // if(this.state.count !== prevProps.state.count) {
    //   // code
    // }

    // this.timer = setInterval(() => {
    //   console.log("Namaste React OP");
    // }, 1000);

    console.log("Child - componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Child - componentWillUnmount");
  }

  render() {
    console.log(this.props.name + " Child - render");
    // const { count } = this.state;
    return (
      <>
        {/* <h1>Profile Class Component</h1>
        <h2>Surname: {this.props.surname}</h2>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: count - 1,
            });
          }}
        >Decrement</button> */}

        <img src={this.state.userInfo.avatar_url} alt="" />
        <h1>{this.state.userInfo.name}</h1>
        <h1>{this.state.userInfo.login}</h1>
      </>
    );
  }
}

export default ProfileClass;

/**
 * Parent Constructor
 * Parent render
 *   - Child Contructor
 *   - Child rendor
 * Parent componentDidMount
 *   - json data (inside Child componentDidMount)
 *   - Child componentDidMount
 *   - Child rendor (when state is updated, it rerenders)
 *   - Child componentDidUpdate
 */

// NOTES:
// After initial rendor, componentDidMount is called and after rerendor, componentDidUpdate is called
// React re-renders the component when state changes or props changes.
// React Lifecycle Diagram: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// React is a single page application. When we go to other page like Contact or About or any other, then the component is updated.
// componentWillUnmount is called when we go to another page.

// If we dont use componentWillUnmount, what happens is if we used setInterval or something, and if we go to other page, then also setInterval will not stop and continue to count. This is cause performance loss. So we need to clear these things, so we use componentWillUnmount(), here we clean up the mess. componentWilUnmount() is called when we leave our page.

// Question arises that will it behave the same way in functional component too? If yes then how can we clean our mess?
// Answer is Yes, it will behave the same way in functional component too and we have to clean up the mess there too. But how?
