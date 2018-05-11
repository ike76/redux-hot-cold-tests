import React from "react";
import { shallow, mount } from "enzyme";
import { GuessForm } from "./guess-form";
import { makeGuess } from "../actions";

describe("<GuessForm />", () => {
  it("should render without crashing", () => {
    shallow(<GuessForm />);
  });
  it("should dispatch callback", () => {
    let dispatch = jest.fn();
    let wrapper = mount(<GuessForm dispatch={dispatch} />);
    wrapper.find("#userGuess").instance().value = "10";
    wrapper.simulate("submit");
    expect(dispatch).toHaveBeenCalledWith(makeGuess("10"));
  });
  it("should reset form after submitted", () => {
    let dispatch = jest.fn();
    let wrapper = mount(<GuessForm dispatch={dispatch} />);
    wrapper.find("#userGuess").instance().value = "21";
    expect(wrapper.find("#userGuess").instance().value).toBe("21"); // first make sure it worked
    wrapper.simulate("submit");
    expect(wrapper.find("#userGuess").instance().value).toBe("");
  });
});
