const blocks = {} as { [x: string]: any };

function extendHelper(this: any, name: string, context: any) {
  let block = blocks[name];
  if (!block) {
    blocks[name] = [];
    block = blocks[name];
  }

  block.push(context.fn(this));
}

function blockHelper(name: string) {
  const val = (blocks[name] || []).join('\n');

  // clear the block
  blocks[name] = [];
  return val;
}

export default {
  blockHelper,
  extendHelper,
};
