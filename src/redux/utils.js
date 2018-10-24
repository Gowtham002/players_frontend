export function generateTypes(actionName) {
  return {
    [`${actionName}_PENDING`]: `${actionName}_PENDING`,
    [`${actionName}_SUCCESS`]: `${actionName}_SUCCESS`,
    [`${actionName}_ERROR`]: `${actionName}_ERROR`,
  }
}