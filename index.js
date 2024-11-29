import app from './app.js';
import {logger, initLogCorrelation} from './utils/logging.js';
import {fetchProjectId} from './utils/metadata.js';


const main = async () => {

  let project = process.env.GOOGLE_CLOUD_PROJECT;
  if (!project) {
    try {
      project = await fetchProjectId();
    } catch {
      logger.warn('Could not fetch Project Id for tracing.');
    }
  }
  // Initialize request-based logger with project Id
  initLogCorrelation(project);

  // Start server listening on PORT env var
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => logger.info(`Listening on port ${PORT}`));
};

/**
 * Listen for termination signal
 */
process.on('SIGTERM', () => {
  // Clean up resources on shutdown
  logger.info('Caught SIGTERM.');
  logger.flush();
});

main();
