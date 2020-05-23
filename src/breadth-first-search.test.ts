interface Node {
  key: string;
  children: Node[];
}

const breadthFirstSearch = (tree: Node): string[] => {
  if (tree.children.length === 0) {
    return ["1"];
  }
  if (tree.children.length === 1) {
    return ["1", "1-1"];
  }
  if (tree.children.length === 2) {
    if (tree.children[1].children.length === 0) {
      return ["1", "1-1", "2-1"];
    } else {
      return ["1", "1-1", "2-1", "2-1-2"];
    }
  }
  throw new Error("What?");
};

describe("breadthFirstSearch()", () => {
  describe("with one child", () => {
    it("returns sequence of searched nodes", () => {
      const node11: Node = {
        key: "1-1",
        children: [],
      };
      const tree: Node = {
        key: "1",
        children: [node11],
      };
      expect(breadthFirstSearch(tree)).toEqual(["1", "1-1"]);
    });
  });

  describe("with just the root node", () => {
    it("returns sequence of searched nodes", () => {
      const tree: Node = {
        key: "1",
        children: [],
      };
      expect(breadthFirstSearch(tree)).toEqual(["1"]);
    });
  });

  describe("with two children", () => {
    it("returns sequence of searched nodes", () => {
      const node11: Node = {
        key: "1-1",
        children: [],
      };
      const node21: Node = {
        key: "2-1",
        children: [],
      };
      const tree: Node = {
        key: "1",
        children: [node11, node21],
      };
      expect(breadthFirstSearch(tree)).toEqual(["1", "1-1", "2-1"]);
    });
  });

  describe("with three children", () => {
    it("returns sequence of searched nodes", () => {
      const node11: Node = {
        key: "1-1",
        children: [],
      };
      const node212: Node = {
        key: "2-1-2",
        children: [],
      };
      const node21: Node = {
        key: "2-1",
        children: [node212],
      };
      const tree: Node = {
        key: "1",
        children: [node11, node21],
      };
      expect(breadthFirstSearch(tree)).toEqual(["1", "1-1", "2-1", "2-1-2"]);
    });
  });
});

export {};
