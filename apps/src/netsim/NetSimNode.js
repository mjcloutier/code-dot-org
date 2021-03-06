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

require('../utils');
var NetSimEntity = require('./NetSimEntity');
var NetSimWire = require('./NetSimWire');

/**
 * Client model of simulated network entity, which lives
 * in a shard table.
 *
 * Wraps the entity row with helper methods for examining and maintaining
 * the entity state in shared storage.
 *
 * @param {!NetSimShard} shard
 * @param {Object} [nodeRow] JSON row from table.
 * @constructor
 * @augments NetSimEntity
 */
var NetSimNode = module.exports = function (shard, nodeRow) {
  nodeRow = nodeRow !== undefined ? nodeRow : {};
  NetSimEntity.call(this, shard, nodeRow);

  /**
   * @type {string}
   * @private
   */
  this.displayName_ = nodeRow.name;
};
NetSimNode.inherits(NetSimEntity);

/**
 * Get shared table for nodes
 * @returns {SharedTable}
 * @private
 */
NetSimNode.prototype.getTable_= function () {
  return this.shard_.nodeTable;
};

/** Build table row for this node */
NetSimNode.prototype.buildRow_ = function () {
  return {
    type: this.getNodeType(),
    name: this.getDisplayName()
  };
};

/**
 * Get node's display name, which is stored in table.
 * @returns {string}
 */
NetSimNode.prototype.getDisplayName = function () {
  return this.displayName_ ? this.displayName_ : '[New Node]';
};

/**
 * Get node's hostname, a modified version of its display name.
 * @returns {string}
 */
NetSimNode.prototype.getHostname = function () {
  // Strip everything that's not a word-character or a digit from the display
  // name, then append the node ID so that hostnames are more likely to
  // be unique.
  return this.getDisplayName().replace(/[^\w\d]/g, '').toLowerCase() +
      this.entityID;
};

/**
 * Get node's type.
 * @returns {NodeType}
 */
NetSimNode.prototype.getNodeType = function () {
  throw new Error('getNodeType method is not implemented');
};

/**
 * Get localized description of node status.
 * @returns {string}
 */
NetSimNode.prototype.getStatus = function () {
  throw new Error('getStatus method is not implemented');
};

/**
 * Establish a connection between this node and another node,
 * by creating a wire between them, and verifying that the remote node
 * can accept the connection.
 * When finished, calls onComplete({the new wire})
 * On failure, calls onComplete(null)
 * @param {!NetSimNode} otherNode
 * @param {NodeStyleCallback} [onComplete]
 */
NetSimNode.prototype.connectToNode = function (otherNode, onComplete) {
  onComplete = onComplete || function () {};

  var self = this;
  NetSimWire.create(this.shard_, this.entityID, otherNode.entityID, function (err, wire) {
    if (err) {
      onComplete(err, null);
      return;
    }

    otherNode.acceptConnection(self, function (err, isAccepted) {
      if (err || !isAccepted) {
        wire.destroy(function () {
          onComplete(new Error('Connection rejected.'), null);
        });
        return;
      }

      onComplete(null, wire);
    });
  });
};

/**
 * Called when another node establishes a connection to this one, giving this
 * node a chance to reject the connection.
 * @param {!NetSimNode} otherNode attempting to connect to this one
 * @param {!NodeStyleCallback} onComplete response method - should call with TRUE
 *        if connection is allowed, FALSE if connection is rejected.
 */
NetSimNode.prototype.acceptConnection = function (otherNode, onComplete) {
  onComplete(null, true);
};