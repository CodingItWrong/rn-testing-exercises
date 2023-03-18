# Exercise 4: Detox

In this exercise, we are going to test the entire application using Detox.

There is a test file for this, `e2e/managing-movies.test.js`, but it does not yet contain a test.

Add a test to `e2e/managing-movies.test.js` that covers the main parts of the application's behavior.

## About the App

The app consists of the components you've worked with in previous exercises: the `MovieList` that loads and displays movies, the `MovieRow` that displays a single movie, and the `NewMovieForm` that allows adding a new movie.

## Designing Your Tests

As you think about what to cover in your test, remember that in end-to-end tests it is generally best to cover the major functionality of your app, not every edge case. What are the main things you want to check to confirm that the application is working? You've already invested most of the day into writing unit tests for lots of edge cases for these components. If you write Detox tests that reconfirm *all* of that behavior, you are probably writing more than you need to!

As you decide how to identify elements in the test, remember that Detox recommends using a testID to find elements. Try that approach.

## Getting Help

If you get stuck, feel free to ask questions, or check the following:

- <https://reactnativetesting.io/e2e/testing>
- <https://reactnativetesting.io/e2e/external-services>

## Going Further

If you finish the above steps of the exercise, try changing your test so that instead of querying based on a test ID, you query based on something visible to the user. What do you think of the two approaches?
