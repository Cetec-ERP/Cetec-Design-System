/**
 * Returns true if the given node is covered by a
 * `// validate-ignore: <ruleName>` comment.
 *
 * The comment may appear:
 *   - on the same line as the node (inline), or
 *   - on the line immediately before the node.
 *
 * Format: // validate-ignore: rule-name — reason
 * Multiple rules may be comma-separated: // validate-ignore: rule-a, rule-b — reason
 */
export const hasValidateIgnoreComment = (context, node, ruleName) => {
  const sourceCode = context.sourceCode ?? context.getSourceCode();
  const nodeLine = node.loc.start.line;

  const comments = sourceCode.getAllComments();

  return comments.some((comment) => {
    if (comment.type !== 'Line') return false;

    const commentLine = comment.loc.start.line;
    if (commentLine !== nodeLine && commentLine !== nodeLine - 1) return false;

    const text = comment.value.trim();

    // Match: validate-ignore: rule-name-or-names [— optional reason]
    const match = text.match(/^validate-ignore:\s*(.+?)(?:\s*[—–\-]{1,2}.+)?$/);
    if (!match) return false;

    const rules = match[1].trim().split(/\s*,\s*/);
    return rules.some((r) => r.trim() === ruleName);
  });
};
