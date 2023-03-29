export interface IReducerAction {
    type: string;
    payload: any;
  }
  export enum actionTypes {
    UPDATE_SHOW = 'UPDATE_SHOW',
  }
  
  export interface IReducerState {
    show: boolean
  }
  
  const actions = {
    [actionTypes.UPDATE_SHOW]: (state: IReducerState, payload: any) => {
      return { ...state, show: payload };
    },
  };
  
  export function statusReducer(state: IReducerState, action: IReducerAction) {
    switch (action.type) {
      case actionTypes.UPDATE_SHOW:
        return actions[actionTypes.UPDATE_SHOW](state, action.payload);
      default:
        throw new Error();
    }
  }