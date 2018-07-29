class Base {

  constructor(name) {
    this.displayName = name;
  }

  render() {
    console.log(this.displayName);
  }
}

class Extended extends Base {

  constructor() {
    super('extended class');
  }
}

const baseComponent = new Base('base component');
const extendedComponent = new Extended();

baseComponent.render();
extendedComponent.render();

