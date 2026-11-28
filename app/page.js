import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const dynamic = 'force-dynamic';

export default function Page() {
  const source = readFileSync(join(process.cwd(), 'index.html'), 'utf8');
  const style = source.match(/<style[^>]*>([\s\S]*?)<\/style>/i)?.[1] ?? '';
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? source;

  return <><style dangerouslySetInnerHTML={{ __html: style }} /><div dangerouslySetInnerHTML={{ __html: body }} /></>;
}
