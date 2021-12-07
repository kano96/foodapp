import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import CardRecipe from "../components/home/CardRecipe";

configure({ adapter: new Adapter() });

describe("<CardRecipe />", () => {
  describe("Card debe renderizar", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <CardRecipe
          name="prueba"
          img="prueba"
          type={["prueba"]}
          diets={["prueba"]}
          healthScore="100"
          id="iddeprueba"
        />
      );
    });
    it("Renderiza 3 divs", () => {
      expect(wrapper.find("div")).toHaveLength(3);
    });

    it("Renderiza 1 Link", () => {
      expect(wrapper.find("Link")).toHaveLength(1);
    });
    it("Renderiza un h3", () => {
      expect(wrapper.find("h3")).toHaveLength(1);
    });

    it("Renderiza una imagen", () => {
      expect(wrapper.find("img")).toHaveLength(1);
    });
  });
});
