import React from "react";
import { shallow, mount } from "enzyme";
import { GuessList } from "./guess-list";

describe("<GuessList >", () => {
  it("should render without crashing", () => {
    shallow(<GuessList guesses={[]} />);
  });
  it("should render guesses", () => {
    let wrapper = shallow(<GuessList guesses={[1, 2, 3]} />);
    expect(wrapper.html()).toContain("<li>1</li>");
    expect(wrapper.html()).toContain("<li>2</li>");
    expect(wrapper.html()).toContain("<li>3</li>");
  });
});
