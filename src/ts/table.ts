/// <reference path="../../typings/tsd.d.ts" />

class Table {
	elementId: any;
	data: any;
	constructor(elementId: string, data: any) {
		this.elementId = elementId;
		this.data = data;
	}
	render() {
		$(this.elementId).DataTable({
			data: this.data
		});
	}
}
