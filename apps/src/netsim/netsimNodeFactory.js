/* jshint
 funcscope: true,
 newcap: true,
 nonew: true,
 shadow: false,
 unused: true,

 maxlen: 90,
 maxparams: 3,
 maxstatements: 200
 */
'use strict';

var netsimConstants = require('./netsimConstants');
var NetSimClientNode = require('./NetSimClientNode');
var NetSimRouterNode = require('./NetSimRouterNode');

var NodeType = netsimConstants.NodeType;

var netsimNodeFactory = module.exports;

/**
 * Given a set of rows from the node table on a shard, gives back a set of node
 * controllers (of appropriate types).
 * @param {!NetSimShard} shard
 * @param {!Array.<Object>} nodeRows
 * @throws when a row doesn't have a mappable node type.
 * @return {Array.<NetSimNode>} nodes for the rows
 */
netsimNodeFactory.nodesFromRows = function (shard, nodeRows) {
  return nodeRows.map(netsimNodeFactory.nodeFromRow.bind(this, shard));
};

/**
 * Given a row from the node table on a shard, gives back a node controllers
 * (of appropriate types).
 * @param {!NetSimShard} shard
 * @param {!Object} nodeRow
 * @throws when the row doesn't have a mappable node type.
 * @return {NetSimNode} node for the rows
 */
netsimNodeFactory.nodeFromRow = function (shard, nodeRow) {
  if (nodeRow.type === NodeType.CLIENT) {
    return new NetSimClientNode(shard, nodeRow);
  } else if (nodeRow.type === NodeType.ROUTER) {
    return new NetSimRouterNode(shard, nodeRow);
  }

  // Oops!  We probably shouldn't ever get here.
  throw new Error("Unable to map row to node.");
};
