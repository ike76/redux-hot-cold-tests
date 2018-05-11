import React from "react";
import { shallow } from "enzyme";
import StatusSection from "./status-section";
describe("<InfoSeciton />", () => {
  it("should render without crashing", () => {
    shallow(<StatusSection />);
  });
});
