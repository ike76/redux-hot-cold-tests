import React from "react";
import { shallow } from "enzyme";
import { Feedback } from "./feedback";

describe("<Feedback />", () => {
  it("should mount without crashing", () => {
    shallow(<Feedback />);
  });
  it("should render feedback", () => {
    const feedback = "Hey hi there";
    let wrapper = shallow(<Feedback feedback={feedback} guessCount={0} />);
    expect(wrapper.contains(feedback)).toBe(true);
    expect(wrapper.contains("Guess again!")).toBe(false);
  });
  it("should render 'Guess Again!' ", () => {
    let wrapper = shallow(<Feedback guessCount={3} />);
    expect(wrapper.contains("Guess again!")).toBe(true);
  });
});
