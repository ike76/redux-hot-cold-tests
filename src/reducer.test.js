import React from "react";
import { shallow } from "enzyme";
import reducer from "./reducer";
import * as a from "./actions";

describe("reducer", () => {
  it("should restart", () => {
    const newState = reducer(
      { guesses: [1, 2, 3], correctAnswer: 20 },
      { type: "RESTART_GAME" }
    );
    expect(newState).toEqual({
      guesses: [],
      correctAnswer: undefined,
      feedback: "Make your guess!",
      auralStatus: ""
    });
  });
  it("should pass thru blank with unknown action", () => {
    const newState = reducer({}, { type: "NOPENOPE" });
    expect(newState).toEqual({});
  });
  it("should create new game", () => {
    const oldGame = { guesses: [1, 2, 3], correctAnswer: [21] };
    const newGame = reducer(oldGame, a.restartGame(12));
    expect(newGame.guesses).toEqual([]);
    expect(newGame.correctAnswer).toEqual(12);
  });
  it("should add guesses to array", () => {
    let newGame = reducer({}, a.restartGame(42));
    expect(newGame.guesses).toEqual([]);
    newGame = reducer(newGame, a.makeGuess(12));
    newGame = reducer(newGame, a.makeGuess(22));
    expect(newGame.guesses).toEqual([12, 22]);
  });
  it("should give correct feedback", () => {
    let game = reducer({}, a.restartGame(100));
    game = reducer(game, a.makeGuess(10));
    expect(game.feedback).toEqual("You're Ice Cold...");
    game = reducer(game, a.makeGuess(70));
    expect(game.feedback).toEqual("You're Cold...");
    game = reducer(game, a.makeGuess(80));
    expect(game.feedback).toEqual("You're Warm.");
    game = reducer(game, a.makeGuess(95));
    expect(game.feedback).toEqual("You're Hot!");
    game = reducer(game, a.makeGuess(100));
    expect(game.feedback).toEqual("You got it!");
  });
  it("should generate aural feedback", () => {
    let game = reducer({}, a.restartGame(100));
    game = reducer(game, a.makeGuess(10));
    game = reducer(game, a.generateAuralUpdate());
    expect(game.auralStatus).toEqual(
      "Here's the status of the game right now: You're Ice Cold... You've made 1 guess. It was: 10"
    );
    game = reducer(game, a.makeGuess(20));
    game = reducer(game, a.generateAuralUpdate());
    expect(game.auralStatus).toEqual(
      "Here's the status of the game right now: You're Ice Cold... You've made 2 guesses. In order of most- to least-recent, they are: 20, 10"
    );
  });
});
