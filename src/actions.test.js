import React from "react";
import { shallow } from "enzyme";
import * as a from "./actions";

describe("generateAuralUpdate", () => {
  it("should return correct action", () => {
    const action = a.generateAuralUpdate();
    expect(action.type).toEqual(a.GENERATE_AURAL_UPDATE);
  });
});

describe("restartGame", () => {
  it("should return correct action", () => {
    const action = a.restartGame(42);
    expect(action.type).toEqual(a.RESTART_GAME);
    expect(action.correctAnswer).toEqual(42);
  });
});

describe("makeGuess", () => {
  it("should return correct action", () => {
    const action = a.makeGuess(42);
    expect(action.type).toEqual(a.MAKE_GUESS);
    expect(action.guess).toEqual(42);
  });
});
