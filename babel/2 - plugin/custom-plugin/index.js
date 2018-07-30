const visitor = {
  VariableDeclarator: (path) => {
    const { init = {} } = path.node;
    if (init.value === true) {
      init.value = false;
    }
  },
  ExpressionStatement: (path) => {
    const { expression = {} } = path.node;
    if (expression.right && expression.right.value === true) {
      expression.right.value = false;
    }
  },
};

module.exports = () => ({ visitor });
