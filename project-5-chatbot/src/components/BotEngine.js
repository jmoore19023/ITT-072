import { getBotResponse } from '../data/responses';

export function processMessage(input) {
  return getBotResponse(input);
}