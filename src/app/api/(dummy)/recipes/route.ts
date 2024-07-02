import recipes from './db';

export function GET() {
  return Response.json(recipes)
}
