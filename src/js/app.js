export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(value) {
    if (this.members.has(value)) {
      throw new Error('Такой персонаж уже есть');
    } else {
      this.members.add(value);
    }
  }

  addAll(...values) {
    const names = [];
    for (const value of values) {
      if (!names.includes(value.name)) {
        names.push(value.name);
        this.members.add(value);
      }
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
