import React from "react";
import { shallow } from "enzyme";

import { TopNav } from "./top-nav";

describe("<TopNav />", () => {
  it("should mount without crashing", () => {
    shallow(<TopNav />);
  });
  it("should call new Game cb", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    wrapper.find(".new").simulate("click");
    expect(dispatch).toHaveBeenCalled();
  });
  it("should call the aural status cb", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    wrapper.find(".status-link").simulate("click");
    expect(dispatch).toHaveBeenCalled();
  });
});
