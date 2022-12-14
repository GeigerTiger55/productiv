import React from "react";
import {TEST_TODOS} from "./_testCommon";
import Todo from "./Todo";
import { render } from "@testing-library/react";

describe("Todo component", function () {
  it("renders without crashing", function () {
    render(<Todo todo={TEST_TODOS[0]} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<Todo todo={TEST_TODOS[0]} />);
    expect(container).toMatchSnapshot();
  });

  it("displays todo data", function () {
    const { container } = render(<Todo todo={TEST_TODOS[0]} />);

    expect(container.querySelector(".Todo")).toBeInTheDocument();
    expect(container.querySelector(".Todo"))
      .toContainHTML("<b>test1</b>");
  });
});
