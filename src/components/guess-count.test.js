import React from "react";
import { shallow } from "enzyme";
import { GuessCount } from "./guess-count";

describe("<GuessCount />", () => {
  it("should render without crashing", () => {
    shallow(<GuessCount />);
  });
  it("should display message for 1 guess", () => {
    let wrapper = shallow(<GuessCount guessCount={1} />);
    expect(wrapper.text()).toBe("You've made 1 guess!");
  });
  it("should display message for 2 or more guesses", () => {
    let wrapper = shallow(<GuessCount guessCount={2} />);
    expect(wrapper.text()).toContain("2 guesses");
  });
});
