import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Create from "../src/components/create/Create";
configure({ adapter: new Adapter() });

describe("<Create/>", () => {
  let create;
  beforeEach(() => {
    create = shallow(<Create />);
  });

  it("Debería renderizar un form", () => {
    expect(create.find("form")).toHaveLength(1);
  });
});
