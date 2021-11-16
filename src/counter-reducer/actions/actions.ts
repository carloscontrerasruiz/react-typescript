export type CounterAction =
  | {
      type: "increaseBy";
      payload: { value: number };
    }
  | { type: "reset" };

export const doReset = (): CounterAction => ({
  type: "reset",
});

export const doIncreasedBy = (valor: number): CounterAction => ({
  type: "increaseBy",
  payload: { value: valor },
});
