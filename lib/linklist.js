'use strict';

function ListItem(data) {
    if (typeof data !== 'undefined') {
        this.data = data;
    }
    this._next = null;
    this._prev = null;
}
ListItem.prototype = Object.create(null);
module.exports.ListItem = ListItem;

function LinkList() {
    var self = this;

    this.append = function (data) {
        var obj = new ListItem(data);
        if (!self._last) {
            self._first = obj;
            self._last = obj;
        } else {
            obj._prev = self._last;
            self._last._next = obj;
            self._last = obj;
        }
    };

    this.shift = function () {
        var result = self.remove(self._first);
        if (!!result) {
            self._first = result._next;
        }
        return result;
    };

    this.isEmpty = function () {
        return !self._first;
    }
}
LinkList.prototype = Object.create(null);
module.exports.LinkList = LinkList;