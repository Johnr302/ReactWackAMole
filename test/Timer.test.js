import React from "react";
import Enzyme, { shallow } from "enzyme";

import Timer from "../src/components/Timer";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("<Timer />", () => {
  it("renders three <Timer /> components", () => {
    const wrapper = shallow(<Timer />);
    expect(wrapper.find("h3")).toHaveLength(1);
  });

  it("renders a <Timer /> components with a number", () => {
    const wrapper = shallow(<Timer gameLength={30} />);
    expect(wrapper.text()).toEqual("Timer: 0 Start Game");
  });
});