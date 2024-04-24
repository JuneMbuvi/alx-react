import immutable from 'immutable';


export default function accessImmutableObject(object, array) {
	if (object instanceof immutable.Map) {
		let current = object;
		for (let i = 0; i < array.length; i++) {
			current = current.get(array[i]);
			if (current === undefined) {
				return undefined;
			}
		}
		return current;
	} else {
		let current = object;
		for (let i = 0; i < array.length; i++) {
			current = current[array[i]];
			if (current === undefined) {
				return undefined;
			}
		}
		return current;
	}
}
