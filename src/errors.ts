export class BotError extends Error {
	constructor(
	  message: string,
	  public readonly code: string,
	  public readonly statusCode: number = 400
	) {
	  super(message);
	  this.name = 'BotError';
	}
  }
