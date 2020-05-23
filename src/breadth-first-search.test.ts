interface Node {
  key: string;
  children: Node[];
}

const breadthFirstSearch = (tree: Node): string[] => {
  const result: string[] = [];
  let frontier: Node[] = [tree];
  let newFrontier: Node[] = [];

  // Iterate while there is still a node that we haven't looked at
  while (frontier.length > 0) {
    for (let currentNode of frontier) {
      // Add current node to result
      result.push(currentNode.key);

      // Expand the new frontier
      newFrontier = newFrontier.concat(currentNode.children);
    }
    // Make newFrontier the current frontier
    frontier = newFrontier;
    // Clear newFrontier for the next iteration
    newFrontier = [];
  }

  return result;
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
