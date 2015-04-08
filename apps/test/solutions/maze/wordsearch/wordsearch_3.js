var testUtils = require('../../../util/testUtils');
var TestResults = require('@cdo/apps/constants.js').TestResults;
var blockUtils = require('@cdo/apps/block_utils');

module.exports = {
  app: "maze",
  skinId: 'letters',
  levelFile: 'wordsearchLevels',
  levelId: "k_3",
  tests: [
    {
      description: "Verify solution",
      expected: {
        result: true,
        testResult: TestResults.ALL_PASS
      },
      customValidator: function () {
        var Maze = require('@cdo/apps/maze/maze');
        return Maze.wordSearch !== undefined;
      },
      xml: '<xml>' + blockUtils.blocksFromList([
        'maze_moveWest',
        'maze_moveWest',
        'maze_moveWest',
        'maze_moveWest'
      ]) + '</xml>'
    },
    {
      description: "Incomplete (W W W)",
      expected: {
        result: false,
        testResult: TestResults.TOO_FEW_BLOCKS_FAIL
      },
      customValidator: function () {
        var Maze = require('@cdo/apps/maze/maze');
        return Maze.wordSearch !== undefined;
      },
      xml: '<xml>' + blockUtils.blocksFromList([
        'maze_moveWest',
        'maze_moveWest',
        'maze_moveWest'
      ]) + '</xml>'
    }
  ]
};
