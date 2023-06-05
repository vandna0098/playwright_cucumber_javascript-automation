// eslint-disable-next-line @typescript-eslint/no-var-requires
const report = require('multiple-cucumber-html-reporter');

const reportGenerationTime = new Date().toISOString();

report.generate({
  reportName: 'Cucumber Report',
  jsonDir: 'reports',
  reportPath: 'reports/multiple-cucumber-html-reporter',
  openReportInBrowser: true,
  disableLog: true,
  displayDuration: true,
  hideMetadata: false,
  displayReportTime: true,
  durationInMS: false,
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: `PLAYWRIGHT_SQL` },
      { label: 'Release', value: `1.0.0` },
      { label: 'Report Generation Time', value: `${reportGenerationTime}` },
    ],
  },
  metadata: {
    browser: {
      name: 'chrome',
    },
    device: 'Virtual Machine',
    platform: {
      name: 'ubuntu',
      version: '16.04',
    },
  },
});