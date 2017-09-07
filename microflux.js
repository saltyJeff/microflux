var MicroFlux = function (target) {
	var store = target.store;
	var events = {};
	function trigger(evt) {
		events[evt] = events[evt] || [];
		events[evt].forEach(function(elem) {
			elem(store);	
		});
	}
	function toReturn () {
		var self = this;
		for(var handler in target.actions) {
			self[handler] = (function (evtName) {
				return function () {
					target.actions[evtName].apply(store, arguments);
					trigger(evtName);
				}
			})(handler);
		}
		self.getStore = function () {
			return store;
		};
		self.on = function(evt, cb) {
			events[evt] = events[evt] || [];
			events[evt].push(cb);
		};
		self.unbindAll = function(evt) {
			events[evt] = [];
		};
	}
	return new toReturn();
};
if(typeof module !== "undefined" && ('exports' in module)){
	module.exports	= MicroFlux;
}