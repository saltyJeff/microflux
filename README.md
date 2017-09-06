# Microflux
Microflux is a super tiny flux library (407 bytes minified)
## Usage
1. Include either [microflux.js](https://cdn.rawgit.com/saltyJeff/microflux/adb7eb4c/microflux.js) or [microflux.min.js](https://cdn.rawgit.com/saltyJeff/microflux/adb7eb4c/microflux.min.js) using a `<script src="..."></script>` tag.
2. Setup a store:
```javascript
 var store = MicroFlux({
	store: {
		message: ''
	},
	actions: {
		changeMessage: function (newMsg) {
			this.message = newMsg;
		}
	}
});
```
Set the "store" property to the initial state of your store

Set the "actions" property to an object. The object's keys are action names and the values are functions taking any parameters you want. `this` is automatically bound to the store.

3. Bind some listeners to the event
```javascript
store.on('changeMessage', function (store) {
	alert(store.message);
});
```
The first parameter of `.on` should be the action name to listen to, and the second parameter should be a function that takes the store as an argument.
4. Trigger some events
```javascript
store.changeMessage('hello world');
```
The function is the same as the one declared in `actions`, the event will be automatically triggered after the function is called to any listeners.
5. Unbind if you want to
```javascript
store.unbindAll('changeMessage');
```
If you ever want to unregister all listeners. The first argument is the name of the action to remove all listeners for.
## Demo
There's a demo that takes the input in a textbox and broadcasts it to a bunch of h2's. See `demo.html`
## License
Licensed under the MIT License, see `LICENSE`
