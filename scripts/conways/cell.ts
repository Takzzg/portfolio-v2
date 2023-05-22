class ConwaysCell {
	private _x: number;
	private _y: number;
	private _state: "dead" | "alive";

	constructor(x: number, y: number, state: "dead" | "alive") {
		this._x = x;
		this._y = y;
		this._state = state;
	}

	// ---------- getters and setters ----------

	public get x(): number {
		return this._x;
	}

	public get y(): number {
		return this._y;
	}

	public get state(): "dead" | "alive" {
		return this._state;
	}
	public set state(value: "dead" | "alive") {
		this._state = value;
	}
}

export default ConwaysCell;
