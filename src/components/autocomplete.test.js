import React from "react";
import { shallow, mount } from "enzyme";
import Autocomplete from "./Autocomplete";
import { Dropdown } from "./Autocomplete";
import { create, act } from "react-test-renderer";

window.HTMLElement.prototype.scrollIntoView = function() {}; // so refs work
window.HTMLElement.prototype.blur = function() {}; // so refs work
const MockedData = [
  {
    name: "Dan Neciu",
    initials: "DN",
    avatar: null,
    email: "dan.neciu@fakee.com"
  },
  {
    name: "Jon Nehnson",
    initials: "JJ",
    avatar: null,
    email: "joe@fakee.com"
  },
  {
    name: "Ion Ionescu",
    initials: "IJ",
    avatar: null,
    email: "fake@fakee.com"
  },
  {
    name: "Donald Trump",
    initials: "DT",
    avatar: null,
    email: "donald@fakee.com"
  },
  {
    name: "JR Smith",
    initials: "JR",
    avatar: null,
    email: "jerry@fakee.com"
  }
];

describe("<Autocomplete /> with no props", () => {
  const container = shallow(<Autocomplete />);
  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  it("should have an input field", () => {
    expect(container.find('input[type="text"]').length).toEqual(1);
  });

  it("should have proper props for input field", () => {
    expect(container.find('input[type="text"]').props()).toEqual({
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      onKeyDown: expect.any(Function),
      onFocus: expect.any(Function),
      placeholder: "Default Placeholder",
      type: "text",
      "data-active": false,
      "data-active-item": 1,
      value: "",
      className: "undefined"
    });
  });
});

describe("<Autocomplete /> with mocked data", () => {
  const initialProps = {
    data: MockedData,
    label: "Managers",
    placeholder: "Search for Managers..."
  };
  const createNodeMock = element => {
    if (element.type === "li") {
      // This is your fake DOM node for <p>.
      // Feel free to add any stub methods, e.g. focus() or any
      // other methods necessary to prevent crashes in your components.
      return {
        scrollIntoView: function() {}
      };
    }
    if (element.type === "input") {
      // This is your fake DOM node for <p>.
      // Feel free to add any stub methods, e.g. focus() or any
      // other methods necessary to prevent crashes in your components.
      return {
        blur: function() {}
      };
    }
    // You can return any object from this method for any type of DOM component.
    // React will use it as a ref instead of a DOM node when snapshot testing.
    return null;
  };
  const container = shallow(<Autocomplete {...initialProps} />);

  it("should set the input value on change event", () => {
    container.find('input[type="text"]').simulate("change", {
      target: {
        value: "Dan"
      }
    });
    expect(container.find('input[type="text"]').prop("value")).toEqual("Dan");
  });
  it("should set the active data value prop on Focus", () => {
    container.find('input[type="text"]').simulate("focus", {});
    expect(container.find('input[type="text"]').prop("data-active")).toEqual(
      true
    );
  });

  it("should hide the active data value prop on Blur", () => {
    container.find('input[type="text"]').simulate("focus", {});
    container.find('input[type="text"]').simulate("blur", {});
    expect(container.find('input[type="text"]').prop("data-active")).toEqual(
      false
    );
  });

  it("should increase the activeItem on arrowDown", () => {
    container
      .find('input[type="text"]')
      .simulate("keydown", { key: "ArrowDown" });
    expect(
      container.find('input[type="text"]').prop("data-active-item")
    ).toEqual(1);
  });

  it("should decrease the activeItem on arrowUp", () => {
    container
      .find('input[type="text"]')
      .simulate("keydown", { key: "ArrowDown" });
    container
      .find('input[type="text"]')
      .simulate("keydown", { key: "ArrowUp" });
    expect(
      container.find('input[type="text"]').prop("data-active-item")
    ).toEqual(1);
  });
  it("should not decrease below 1 the activeItem on arrowUp", () => {
    container
      .find('input[type="text"]')
      .simulate("keydown", { key: "ArrowUp" });
    expect(
      container.find('input[type="text"]').prop("data-active-item")
    ).toEqual(1);
  });
  it("should reset active item on Enter press", () => {
    const options = { createNodeMock };
    const mountedContainer = mount(<Autocomplete {...initialProps} />, options);
    mountedContainer
      .find('input[type="text"]')
      .simulate("keydown", { key: "ArrowDown" });
    mountedContainer
      .find('input[type="text"]')
      .simulate("keydown", { key: "Enter" });
    expect(
      mountedContainer.find('input[type="text"]').prop("data-active-item")
    ).toEqual(1);
  });

  it("should close on Escape", () => {
    const options = { createNodeMock };
    const mountedContainer = mount(<Autocomplete {...initialProps} />, options);
    mountedContainer
      .find('input[type="text"]')
      .simulate("keydown", { key: "Escape" });
    expect(
      mountedContainer.find('input[type="text"]').prop("data-active")
    ).toEqual(false);
  });

  it("should save selection onEnter press", () => {
    const options = { createNodeMock };
    const mountedContainer = mount(<Autocomplete {...initialProps} />, options);
    mountedContainer
      .find('input[type="text"]')
      .simulate("keydown", { key: "ArrowDown" });
    mountedContainer
      .find('input[type="text"]')
      .simulate("keydown", { key: "Enter" });
    expect(mountedContainer.find('input[type="text"]').prop("value")).toEqual(
      "Jon Nehnson"
    );
  });

  it("should filter based on input", () => {
    const options = { createNodeMock };
    const mountedContainer = mount(<Autocomplete {...initialProps} />, options);

    mountedContainer.find('input[type="text"]').simulate("change", {
      target: {
        value: "Dan"
      }
    });
    expect(mountedContainer.find(Dropdown).prop("data").length).toEqual(1);
  });

  it("should filter managers across first name and last name", () => {
    const options = { createNodeMock };
    const mountedContainer = mount(<Autocomplete {...initialProps} />, options);

    mountedContainer.find('input[type="text"]').simulate("change", {
      target: {
        value: "nne"
      }
    });
    expect(mountedContainer.find(Dropdown).prop("data").length).toEqual(2);
  });

  it("should filter regardless of case sensitivity", () => {
    const options = { createNodeMock };
    const mountedContainer = mount(<Autocomplete {...initialProps} />, options);

    mountedContainer.find('input[type="text"]').simulate("change", {
      target: {
        value: "NNE"
      }
    });
    expect(mountedContainer.find(Dropdown).prop("data").length).toEqual(2);
  });

  it("should render a list based on the mocked data", () => {
    const options = { createNodeMock };
    let autocomplete;
    act(() => {
      autocomplete = create(<Autocomplete data={MockedData} />, options);
    });
    const testInstance = autocomplete.root;
    const list = testInstance.findAll(el => el.type === "li");
    expect(list.length).toEqual(5);
  });

  it("should maintain filter on blur effect", () => {
    const options = { createNodeMock };
    const mountedContainer = mount(<Autocomplete {...initialProps} />, options);

    mountedContainer.find('input[type="text"]').simulate("change", {
      target: {
        value: "nne"
      }
    });
    container.find('input[type="text"]').simulate("blur", {});
    container.find('input[type="text"]').simulate("focus", {});
    expect(mountedContainer.find(Dropdown).prop("data").length).toEqual(2);
  });

  it("should have the correct label", () => {
    const options = { createNodeMock };
    const mountedContainer = mount(<Autocomplete {...initialProps} />, options);
    expect(mountedContainer.find("Label").prop("label")).toEqual("Managers");
  });

  it("should match the snapshot", () => {
    const options = { createNodeMock };
    const mountedContainer = mount(<Autocomplete {...initialProps} />, options);
    expect(mountedContainer.html()).toMatchSnapshot();
  });
});
