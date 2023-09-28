import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'pathe'

const dir = dirname(fileURLToPath(import.meta.url))

export async function generateInlineTest(templatePath, testPath) {
  const template = await fs.readFile(templatePath, 'utf8')
  await fs.writeFile(testPath, template)
  // eslint-disable-next-line no-console
  console.log(`Generated ${testPath}`)
}

const filepath = resolve(dir, '../test-update/snapshots-inline-js.test.js')
const template = resolve(dir, './inline-test-template.js');

(async () => {
  await generateInlineTest(template, filepath)
})()
