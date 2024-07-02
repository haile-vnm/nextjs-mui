import { NextRequest } from 'next/server';
import recipes from '../db';

export function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const recipe = recipes.find(r => r.id === id);
  return Response.json(recipe)
}
