import pino from 'pino';
import dayjs from 'dayjs';
import config from './config';

const log = pino({
    transport: {
        pipeline:
            config.NODE_ENV === 'production'
                ? [
                      {
                          target: 'pino/file',
                          options: {
                              destination:
                                  process.cwd() + `/logs/log-${dayjs().format('YYYY-MM-DD')}.log`,
                              mkdir: true,
                          },
                      },
                  ]
                : [
                      {
                          target: 'pino-pretty',
                      },
                  ],
    },
    timestamp: () => `,"time":"${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')}"`,
});

export default log;
