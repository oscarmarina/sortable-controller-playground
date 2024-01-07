import { playwrightLauncher } from '@web/test-runner-playwright';
import { defaultReporter, summaryReporter } from '@web/test-runner';
import { coverageTableReporter } from '@blockquote/coverage-table-reporter';

const filteredLogs = ['in dev mode'];
const outDir = process.env.OUTDIR || '.';

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  files: [`${outDir}/test/**/*.test.js`],
  nodeResolve: true,
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'webkit' }),
  ],
  concurrentBrowsers: 2,
  concurrency: 1,
  reporters: [summaryReporter({}), defaultReporter(), coverageTableReporter()],
  preserveSymlinks: true,
  coverage: true,
  coverageConfig: {
    reportDir: `${outDir}/test/coverage`,
    reporters: ['lcov', 'lcovonly', 'json'],
    threshold: {
      statements: 76,
      branches: 76,
      functions: 76,
      lines: 76,
    },
    include: ['**/src/**/*', '**/define/**/*'],
  },
  testFramework: {
    config: {
      ui: 'tdd',
      timeout: 4000,
    },
  },
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (typeof arg === 'string' && filteredLogs.some(l => arg.includes(l))) {
        return false;
      }
    }
    return true;
  },
});
