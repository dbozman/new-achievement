/** Achievement payload returned from `POST /ai/achievement` (nested under `achievement`). */
export class Achievement {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly reward: string,
  ) {}

  static fromApi(payload: {
    title: string;
    description: string;
    reward: string;
  }): Achievement {
    return new Achievement(payload.title, payload.description, payload.reward);
  }
}
