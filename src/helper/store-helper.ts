import {Action} from '~/auth/auth.type';

export function createReducer(defaultState: object = {}): any {
  const actionHandlerMap = new Map();

  function reducer(state: object = defaultState, action: Action) {
    const actionHandler = actionHandlerMap.get(action.type);

    if (!actionHandler) {
      return state;
    }

    return actionHandler(state, action);
  }

  Object.defineProperty(reducer, 'case', {
    writable: false,
    enumerable: false,
    configurable: false,

    value: function (action: Action) {
      return {
        register: function (handler: Function) {
          actionHandlerMap.set(action, handler);

          return function () {
            actionHandlerMap.delete(action);
          };
        },
      };
    },
  });

  return reducer;
}

export const updateObject = (oldObject: object, updatedProperties: object) => ({
  ...oldObject,
  ...updatedProperties,
});
