import React from "react";
import { shallow } from "enzyme";
import InfoSection from "./info-section";
describe("<InfoSeciton />", () => {
  it("should render without crashing", () => {
    shallow(<InfoSection />);
  });
});
