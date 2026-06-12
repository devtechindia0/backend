import crypto from 'crypto';
import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET') || crypto.randomBytes(32).toString('hex'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT') || crypto.randomBytes(32).toString('hex'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT') || crypto.randomBytes(32).toString('hex'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    docLinks: env.bool('FLAG_DOC_LINKS', true),
  },
});

export default config;
