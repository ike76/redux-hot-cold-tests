import React from "react";
import { shallow } from "enzyme";
import { AuralStatus } from "./aural-status";

describe("<AuralStatus />", () => {
  it("should render without crashing", () => {
    shallow(<AuralStatus />);
  });
  it("should render aural status", () => {
    const status = "Hi there";
    const wrapper = shallow(<AuralStatus auralStatus={status} />);
    expect(wrapper.contains(status)).toBe(true);
  });
});
