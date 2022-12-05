export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('This character already exists!');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    const arr = [];
    arr.push(...characters);
    arr.forEach((char) => this.members.add(char));
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    const members = this.toArray();
    let index = -1;

    return {
      next() {
        index++;

        return {
          value: members[index],
          done: index >= members.length,
        };
      },
    };
  }
}
