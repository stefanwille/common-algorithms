interface Node {
  key: string;
  children: Node[];
}

const depthFirstSearch = (tree: Node): string[] => {
  const childrenPaths = tree.children.map((node) => depthFirstSearch(node));
  const joinedChildredPaths = childrenPaths.flat(1);
  const result = [...joinedChildredPaths, tree.key];
  return result;
};

describe("depthFirstSearch()", () => {
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
      expect(depthFirstSearch(tree)).toEqual(["1-1", "1"]);
    });
  });

  describe("with just the root node", () => {
    it("returns sequence of searched nodes", () => {
      const tree: Node = {
        key: "1",
        children: [],
      };
      expect(depthFirstSearch(tree)).toEqual(["1"]);
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
      expect(depthFirstSearch(tree)).toEqual(["1-1", "2-1", "1"]);
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
      expect(depthFirstSearch(tree)).toEqual(["1-1", "2-1-2", "2-1", "1"]);
    });
  });
});

export {};
